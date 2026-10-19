## Medium Task: AI Resume Match Tracker

Build a small app where a job seeker pastes a job description and a resume, and gets an AI-generated match report. Reports are saved per user.

**Stack:** Next.js, Tailwind, any database (Supabase, Neon, SQLite), any LLM API. Mock the LLM if you have no key and say so.

### Features

1. Register and log in.
2. Analyze form: the server calls the LLM and returns JSON with `match_score` (0-100), `matched_skills`, `missing_skills`, `three_improvement_tips`.
3. Validate the AI output with a schema (Zod). On invalid output, retry once, then show a clean error.
4. Save each report per user, with a list page and a detail page. A user must never see another user's reports.
5. Limit input to 10,000 characters. Rate-limit to 10 analyses per user per hour. Keep API keys server-side.
6. At least 3 tests: schema validation, rate limit, access check.

### Twists (these are what we grade hardest)

- **Grounding rule:** `matched_skills` may only contain skills that appear in the resume text. Enforce this in code, not only in the prompt.
- **Explain the failure:** your README must list 3 ways the AI output can be wrong in this app and what your code does for each.
- **Change request:** in the follow-up call we will ask you to add a feature live (for example "also store the model name and token cost per report"). You will do it on your own code, screen shared.

### Deliverables

Working code, `README.md` with setup and `.env.example`, `AI_LOG.md`, and a 2-minute screen recording.
