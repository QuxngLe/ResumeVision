# Resume2review – Base Project

**Goal:** Upload resume → AI analyze → extract skills + missing gaps → generate feedback → show structured insights.  
Built as a **base project** for learning and extending full-stack AI applications with **Google Gemini** and **Vercel Cloud**.

---

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

---

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Google Gemini API Key
GOOGLE_API_KEY=your_gemini_api_key_here

# Vercel Postgres Database URL
POSTGRES_URL=your_vercel_postgres_url_here

# Vercel Blob Storage Token
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Keep `.env.local` private (gitignored).  
> Commit only `env.example` with placeholder values.

---

## 🏗️ Architecture

### Stack
- **Frontend:** Next.js 14 (App Router + TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui  
- **Backend:** Serverless API Routes on Vercel  
- **AI:** Google Gemini via `@google/generative-ai`  
- **Database:** Vercel Postgres + Drizzle ORM  
- **Storage:** Vercel Blob  
- **Deployment:** Vercel (Serverless Functions)

### Flow
1. User uploads resume on `/` or `/upload`
2. File stored in **Vercel Blob**
3. Backend sends extracted text to **Google Gemini**
4. Gemini returns AI feedback
5. Backend stores result in **Vercel Postgres**
6. Frontend displays analysis on `/analysis/[id]`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/generate/route.ts   # Gemini AI call
│   ├── api/upload/route.ts     # File upload handler
│   ├── analysis/[id]/page.tsx  # Result page
│   ├── globals.css             # Global styles
│   └── page.tsx                # Upload form
├── components/ui/              # UI components (shadcn/ui)
├── db/                         # Schema & Drizzle config
├── lib/                        # Gemini & utils
└── public/                     # Static assets
```

---

## ☁️ Deployment (Vercel)

1. Push to GitHub  
2. Import the repo into **Vercel**  
3. Add environment variables in the Vercel dashboard  
4. Deploy  

Visitors do **not** need their own Gemini key — the backend uses yours securely.

---

## 🔮 Future Enhancements

- Resume ↔ Job Description matching  
- Skill-gap visualization dashboard  
- Multi-language AI feedback  
- PDF export + email integration  
- Mentor/Admin panel  
- Queue system for large files  

---

## 📚 Educational Value

**Resume2review** serves as a **base architecture** for:
- LLM-integrated document analysis apps  
- Next.js + Vercel AI starters  
- End-to-end AI cloud projects (Gemini + Postgres + Blob)  
- Scalable serverless AI systems  

---

## 🙏 Credits

Originally based on [resume2review](https://github.com/tridinhbui/resume2review)  
by [Trí Đình Bùi](https://github.com/tridinhbui), licensed under the MIT License.  
Modified and extended by [Ngoc Quang Le](https://github.com/QuxngLe).
