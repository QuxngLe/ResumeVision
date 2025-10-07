# Resume2review – Advanced Gemini Version

**Goal:** Upload resume → AI analyze → extract skills + detect gaps → generate actionable feedback → offer career advice.  
Originally built as a resume analysis tool, now upgraded into a **robust AI career assistant** base project with a fully reworked backend, improved Gemini AI integration, and enhanced cloud infrastructure.

---

## ✨ Overview

This version by **Ngoc Quang Le** significantly upgrades the original [resume2review](https://github.com/tridinhbui/resume2review) project by **deeply refactoring the backend**, **integrating Google Gemini 2.0 Flash**, and adding a range of **enterprise-grade reliability features** — making it an ideal **base architecture for full-stack AI applications**.

---

## 🔧 Major Backend Improvements & Features Added

### 1. Database Connection & Error Handling
- 🧩 Fixed and optimized **PostgreSQL connection** using Drizzle ORM  
- 🧠 Added **graceful degradation**: app continues running even if DB is unavailable  
- 🧪 Implemented **mock database fallback** for local development and testing  
- 📦 Added **database schema migrations** for production deployment  
- 🛠️ Support for **connection pooling (Neon PostgreSQL)** for better scalability  

### 2. AI Integration & Processing
- 🤖 Switched from **OpenAI → Google Gemini 2.0 Flash** for resume analysis  
- 📄 Added **PDF & DOCX** parsing using `mammoth.js`  
- 💬 Added **chat functionality** for interactive career advice  
- 🧠 Improved **AI prompt engineering** for consistent, structured feedback  
- 🔁 Built a complete **AI pipeline**: Upload → Parse → Analyze → Store → Display  

### 3. File Upload & Storage System
- 📂 Rebuilt upload API with **comprehensive error handling**  
- ☁️ Integrated **Vercel Blob** for scalable cloud storage  
- 🧰 Added **fallback local storage** for development  
- ⚡ Optimized text extraction from multiple file formats  
- 🔒 Implemented **file validation** and **rate limiting** to prevent abuse  

### 4. Authentication & Security
- 🔐 Made **Firebase authentication optional** — works with or without it  
- 🧱 Fixed auth state bugs in Header and Analysis components  
- ⚙️ Added **per-IP rate limiting** and **quota management**  
- 🧾 Secured **API keys and environment variables** across all services  

### 5. API Routes & Backend Logic
- 🧠 Rewrote `/api/upload` for better reliability and speed  
- 💡 Added new API endpoints:
  - `/api/gemini` → Dedicated Gemini AI analysis route  
  - `/api/analyses/recent` → Fetch user's recent analyses  
  - `/api/usage` → Monitor API usage and quotas  
  - `/api/analysis/[id]` → Retrieve specific results  
- ⚙️ Unified error handling and standardized response formats  

### 6. Frontend Components & UX
- 🧭 Fixed Header component crashes related to Firebase auth  
- 📊 Enhanced **Analysis page** with better loading and error states  
- 🕒 Added **Recent Analyses** section with user history tracking  
- 🧩 Improved **Dashboard** layout and user navigation  
- 📱 Added full **mobile responsiveness**  

### 7. Environment & Configuration
- 🧰 Comprehensive `.env` setup for all integrations (Gemini, DB, Blob, Firebase)  
- 🧾 Clear separation between **Development** and **Production** modes  
- 🗄️ Added **DB connection pooling and fallbacks**  
- 🧩 Improved error logging and monitoring for debugging  

---

## 📊 Technical Improvements

### Backend Architecture
- Modular serverless routes with reusable logic  
- Centralized error handling and logging  
- Fallback systems for database and storage failures  

### Database Enhancements
- Connection pooling for Neon PostgreSQL  
- Schema migrations and versioning  
- Mock database fallback for development  

### AI Processing Pipeline
```
File Upload → Parse Resume (PDF/DOCX)
→ Clean Text → Gemini AI Analysis
→ Extract Skills, Gaps, and Suggestions
→ Store Results → Display to User
```

---

## 🚀 New Features Added

| Feature | Description |
|----------|-------------|
| 🧾 **Recent Analyses System** | Track and display users' past resume analyses |
| 💬 **Interactive Career Chat** | Real-time career advice powered by Gemini |
| 🎯 **Enhanced Skill Gap Detection** | Identify strengths and weaknesses |
| 📈 **Usage Monitoring Dashboard** | Track API usage, quotas, and performance |
| ⚙️ **Improved Error Handling** | Graceful fallback and user-friendly alerts |

---

## 🏗️ Tech Stack

- **Frontend:** Next.js 14 (TypeScript, Tailwind, shadcn/ui)  
- **Backend:** Serverless API routes (Vercel)  
- **Database:** Vercel Postgres + Drizzle ORM  
- **AI:** Google Gemini 2.0 Flash (`@google/generative-ai`)  
- **Storage:** Vercel Blob  
- **Auth:** Optional Firebase integration  
- **Deployment:** Vercel  

---

## ⚙️ Environment Variables

```env
GOOGLE_API_KEY=your_gemini_api_key_here
POSTGRES_URL=your_postgres_url_here
BLOB_READ_WRITE_TOKEN=your_blob_token_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
FIREBASE_API_KEY=optional_if_used
```

> ⚠️ Keep `.env.local` private.  
> Commit only `env.example` with placeholder values.

---

## 🚀 Run Locally

```bash
npm install
cp env.example .env.local
npm run dev
```
Visit → [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deploy on Vercel

1. Push to GitHub  
2. Import into **Vercel**  
3. Add Environment Variables  
4. Deploy  

---

## 🔮 Future Enhancements

- AI-powered job description matching  
- Advanced skill visualization dashboard  
- Resume scoring metrics  
- Multi-language AI feedback  
- PDF export + email report  
- Mentor/admin dashboard  

---

## 📚 Educational Value

This project demonstrates how to build **AI + Cloud integrated web systems** using modern technologies.  
It can be adapted into:
- AI-powered document analysis tools  
- Career or education analytics platforms  
- Serverless LLM application starters  

---

## 🙏 Credits

Originally based on [resume2review](https://github.com/tridinhbui/resume2review)  
by [Trí Đình Bùi](https://github.com/tridinhbui), licensed under the MIT License.  
Rebuilt, optimized, and extended by [Ngoc Quang Le](https://github.com/QuxngLe).

---
