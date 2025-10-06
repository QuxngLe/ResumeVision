"use client";
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, TrendingUp, AlertCircle, Lightbulb, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Analysis {
  id: number;
  createdAt: string;
  menteeName: string | null;
  targetRole: string | null;
  skillsCount: number;
  gapsCount: number;
  suggestionsCount: number;
  fitScore: number;
  hasResult: boolean;
}

interface RecentAnalysesProps {
  userEmail: string;
}

export default function RecentAnalyses({ userEmail }: RecentAnalysesProps) {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRecentAnalyses = async () => {
      try {
        const response = await fetch(`/api/analyses/recent?email=${encodeURIComponent(userEmail)}&limit=5`);
        if (response.ok) {
          const data = await response.json();
          setAnalyses(data.analyses);
        }
      } catch (error) {
        console.error('Failed to fetch recent analyses:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchRecentAnalyses();
    }
  }, [userEmail]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  const getFitScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-400';
    if (score >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getFitScoreBadgeVariant = (score: number) => {
    if (score >= 8) return 'default';
    if (score >= 6) return 'secondary';
    return 'destructive';
  };

  if (loading) {
    return (
      <Card className="bg-ocean-800 border-ocean-600">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="h-5 w-5 text-ocean-300" />
            Recent Analyses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-ocean-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-ocean-700 rounded w-1/2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (analyses.length === 0) {
    return (
      <Card className="bg-ocean-800 border-ocean-600">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Clock className="h-5 w-5 text-ocean-300" />
            Recent Analyses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Clock className="h-12 w-12 text-ocean-400 mx-auto mb-3" />
            <p className="text-ocean-300">No analyses yet</p>
            <p className="text-sm text-ocean-400 mt-1">Upload your first resume to get started!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-ocean-800 border-ocean-600">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-ocean-300" />
          Recent Analyses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {analyses.map((analysis) => (
            <div
              key={analysis.id}
              className="p-4 bg-ocean-700/50 rounded-lg border border-ocean-600 hover:border-ocean-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-white text-sm">
                      {analysis.targetRole || 'General Analysis'}
                    </h4>
                    {analysis.fitScore > 0 && (
                      <Badge 
                        variant={getFitScoreBadgeVariant(analysis.fitScore)}
                        className="text-xs"
                      >
                        <Star className="h-3 w-3 mr-1" />
                        {analysis.fitScore}/10
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-ocean-300 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatDate(analysis.createdAt)}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => router.push(`/analysis/${analysis.id}`)}
                  className="text-xs h-7 px-3 border-ocean-500 text-ocean-200 hover:bg-ocean-600 hover:text-white"
                >
                  View
                </Button>
              </div>
              
              {analysis.hasResult && (
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-1 text-green-300">
                    <TrendingUp className="h-3 w-3" />
                    <span>{analysis.skillsCount} skills</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-300">
                    <AlertCircle className="h-3 w-3" />
                    <span>{analysis.gapsCount} gaps</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-300">
                    <Lightbulb className="h-3 w-3" />
                    <span>{analysis.suggestionsCount} tips</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {analyses.length >= 5 && (
          <div className="mt-4 pt-3 border-t border-ocean-600">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/dashboard')}
              className="w-full text-ocean-300 hover:text-white hover:bg-ocean-700"
            >
              View All Analyses
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
