## Coding Task: AI Resume Match Tracker

Build a small app where a job seeker pastes a job description, uploads or pastes a resume, and gets an AI-generated match report. Past reports are saved and listed.

1. Initialize your project in `your_full_name/coding_task`.
2. Design your database schema with Drizzle ORM or Prisma. Supabase, Neon or SQLite are all fine.
3. Implement the features below. Follow best practices for security and performance.
4. Commit regularly with clear, descriptive messages.

### Tech Stack

**Frontend:** Next.js, Tailwind CSS, and shadcn/ui.

**Backend:** Next.js route handlers (or Hono), a database of your choice, and an LLM API (Claude, OpenAI or Gemini; a free tier is fine). Mock the LLM call if you have no key, and say so in your README.

### Features

1. **Authentication:** Register and log in. Supabase Auth, Clerk or NextAuth is fine.
2. **Analyze:** A form takes a job description and resume text. The server calls the LLM and returns JSON with `match_score` (0-100), `matched_skills`, `missing_skills` and `three_improvement_tips`.
3. **Validate AI output:** Parse the LLM response with a schema (Zod). If it is invalid, retry once, then show a clean error.
4. **History:** Save each report per user. Show a list and a detail page. Users must never see another user's reports.
5. **Safety and limits:** Limit inputs to 10,000 characters. Rate-limit to 10 analyses per user per hour. Keep API keys server-side only.
6. **Tests:** Write at least 3 tests, for example the schema validation, the rate limit, and the access check.

### Bonus (optional)

- Stream the AI response to the UI.
- Export a report as PDF.
- Deploy it and share a live link.

### Deliverables

- Working code and a `README.md` with setup steps and `.env.example`.
- `AI_LOG.md` describing where AI helped and where it was wrong.
- A 2-minute screen recording or screenshots.
