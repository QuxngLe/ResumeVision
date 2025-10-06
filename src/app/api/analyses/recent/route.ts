import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { analyses, resumes, mentees } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const email = searchParams.get('email');
    const limit = parseInt(searchParams.get('limit') || '5');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Get recent analyses for the user
    const recentAnalyses = await db
      .select({
        id: analyses.id,
        createdAt: analyses.createdAt,
        result: analyses.result,
        resumeId: analyses.resumeId,
        menteeName: mentees.name,
        targetRole: mentees.targetRole,
      })
      .from(analyses)
      .innerJoin(resumes, eq(analyses.resumeId, resumes.id))
      .innerJoin(mentees, eq(resumes.menteeId, mentees.id))
      .where(eq(mentees.email, email))
      .orderBy(desc(analyses.createdAt))
      .limit(limit);

    // Transform the data to include useful stats
    const transformedAnalyses = recentAnalyses.map((analysis: any) => {
      const result = analysis.result as any;
      const skills = result?.skills || [];
      const gaps = result?.gaps || [];
      const suggestions = result?.suggestions || [];
      const fitScore = result?.fit || 0;

      return {
        id: analysis.id,
        createdAt: analysis.createdAt,
        menteeName: analysis.menteeName,
        targetRole: analysis.targetRole,
        skillsCount: skills.length,
        gapsCount: gaps.length,
        suggestionsCount: suggestions.length,
        fitScore: typeof fitScore === 'number' ? fitScore : 0,
        hasResult: !!result,
      };
    });

    return NextResponse.json({ analyses: transformedAnalyses });
  } catch (error) {
    console.error('Error fetching recent analyses:', error);
    return NextResponse.json({ error: 'Failed to fetch recent analyses' }, { status: 500 });
  }
}
