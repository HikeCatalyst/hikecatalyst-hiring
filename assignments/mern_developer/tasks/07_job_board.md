## Task 07: Job Board

**Level:** Medium.

Companies post jobs, candidates browse and apply.

### Requirements

- Roles: `company` and `candidate`. Companies create and close jobs. Candidates apply once per job.
- Search by keyword, location and job type with pagination. A MongoDB text index is enough.
- Candidates see their applications and status. Companies see applicants for their jobs only.
- Resume upload as PDF (size limit 2 MB, type check).

### Also deliver

Tests for role access, double-apply, and the file type check.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-job-board` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-job-board && cd hikecatalyst-mern-job-board
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-job-board --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-job-board.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
