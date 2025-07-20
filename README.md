# 🚀💼 **CareerCraft**  
### *Your Smart Assistant for Building a Successful Career* 
CareerCraft is a smart, modern career development web app built using **Next.js 14**, **TailwindCSS**, **Shadcn/UI**, and powered by **AI via Google Gemini**. It helps users explore industries, generate resumes, ace quizzes, and craft cover letters — all personalized to their chosen career path.

---

## ✨ Features

🎯 Personalized onboarding for industry & skill selection  
🧠 AI-driven resume builder with real-time preview and markdown support  
✍️ Google Gemini-powered cover letter generator  
📊 Interactive charts for industry insights and performance tracking  
📝 Dynamic MCQ quizzes with AI-generated questions and auto scoring  
🧑‍💼 User profile management with Clerk Authentication  
📂 Organized dashboard: insights, resumes, quizzes, and letters  
⚙️ Inngest-powered background workflows (quiz scoring, PDF generation)  
💾 PostgreSQL database with Prisma ORM  
🧩 Fully responsive and modern UI  
🚀 Deployed on Vercel

---

## 📌 About the Project

**CareerCraft** simplifies career development by bringing together essential tools in one place. Whether you're a student, job-seeker, or working professional, CareerCraft provides AI-curated insights, smart resume tools, and real-time career tracking to keep you ahead.

---

## 🔗 Live App

👉 Visit CareerCraft Live on Vercel: [CareerCraft](https://career-craft-zeta.vercel.app/)

---

## 🛠️ Tech Stack

| Layer            | Technology                         |
|------------------|-------------------------------------|
| Frontend         | Next.js 14 (App Router)             |
| Styling & UI     | TailwindCSS + Shadcn/UI             |
| Authentication   | Clerk (Sign in / Sign up)           |
| ORM & DB         | Prisma + PostgreSQL                 |
| Background Jobs  | Inngest                             |
| AI Integration   | Google Gemini API                   |
| Deployment       | Vercel                              |

---

## 🛠️ Setup `.env` File
Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=your_postgres_url
DIRECT_URL=your_postgres_direct_url
GEMINI_API_KEY=your_google_gemini_key

