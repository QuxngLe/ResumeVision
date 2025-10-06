# Resume2review – Base Project

**Goal:** Upload resume → AI analyze → extract skills + missing gaps → generate feedback → show structured insights.  
Designed as a **base project** for learning and extending full-stack AI applications with **Google Gemini** and **Vercel Cloud**.

---

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
Set up environment variables

bash
Copy code
cp env.example .env.local
# Edit .env.local with your actual values
Run development server

bash
Copy code
npm run dev
Open http://localhost:3000

🔧 Environment Variables
Create a .env.local file with:

env
Copy code
# Google Gemini API Key
GOOGLE_API_KEY=your_gemini_api_key_here

# Vercel Postgres Database URL
POSTGRES_URL=your_vercel_postgres_url_here

# Vercel Blob Storage Token
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
⚠️ Keep .env.local private (gitignored).
Commit only env.example with placeholder values.

🏗️ Architecture
🧩 Stack
Frontend: Next.js 14 (App Router, TypeScript)

Styling: Tailwind CSS + shadcn/ui

Backend: Serverless API Routes on Vercel

AI: Google Gemini via @google/generative-ai

Database: Vercel Postgres + Drizzle ORM

Storage: Vercel Blob

Deployment: Vercel (Serverless Functions)

⚙️ Data Flow
mermaid
Copy code
graph TD
A[User Uploads Resume] -->|PDF/Text| B[Vercel Blob Storage]
B --> C[Serverless API Route (Next.js)]
C -->|Send extracted text| D[Google Gemini API]
D -->|Return feedback| C
C -->|Save results| E[Vercel Postgres]
C -->|Respond| F[Frontend UI]

subgraph "Frontend"
A
F
end

subgraph "Backend"
B
C
E
end

subgraph "AI"
D
end
📄 Database Schema
Table	Description
users	User profile info (optional)
resumes	Uploaded files & parsed content
analyses	AI analysis results (skills, feedback, improvements)

🔁 Flow Summary
User uploads resume on / or /upload

File temporarily stored in Vercel Blob

Backend sends text to Google Gemini

Gemini returns insights, which are saved to Postgres

Results displayed on /analysis/[id]

📁 Project Structure
bash
Copy code
src/
├── app/
│   ├── api/generate/route.ts   # AI call using Google Gemini
│   ├── api/upload/route.ts     # File upload logic
│   ├── analysis/[id]/page.tsx  # Feedback display
│   ├── globals.css             # Global styles
│   └── page.tsx                # Main upload UI
├── components/ui/              # Reusable UI (shadcn/ui)
├── db/                         # Schema + Drizzle config
├── lib/                        # Gemini + utility functions
└── public/                     # Static assets
☁️ Deployment (Vercel)
Push to GitHub

Import into Vercel

Add Environment Variables

Deploy

Visitors do not need their own Gemini key — the backend uses yours securely.

🔮 Future Enhancements
Resume → Job Description matching

Skill Gap visualization dashboard

Multi-language AI feedback

PDF export & email integration

Mentor/admin review panel

Queue for large file handling

📚 Educational Value
Resume2review is built as a base architecture for:

LLM-integrated document analysis tools

Full-stack cloud projects using Next.js + Vercel

AI workflow demonstrations (Gemini + Postgres + Blob)

Scalable serverless applications

🙏 Credits
Originally based on resume2review
by Trí Đình Bùi, licensed under the MIT License.
Modified and extended by Ngoc Quang Le.
