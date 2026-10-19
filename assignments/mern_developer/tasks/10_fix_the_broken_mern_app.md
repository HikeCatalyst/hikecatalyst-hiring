## Task 10: Fix the Broken MERN App

**Level:** Easy to Medium.

Debug a small app you did not write. We give you `sample_data/buggy_server.js`.

### Requirements

- Find at least 6 problems (security, logic, async, validation and error handling).
- For each: the line, why it breaks, a failing request that proves it, and your fix.
- Add tests that fail before and pass after.
- Write `review.md` with the list ordered by severity.

### Also deliver

This task shows how you read code. Do not hide behind a rewrite: fix the file in place.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-fix-the-broken-mern-app` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-fix-the-broken-mern-app && cd hikecatalyst-mern-fix-the-broken-mern-app
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-fix-the-broken-mern-app --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-fix-the-broken-mern-app.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
