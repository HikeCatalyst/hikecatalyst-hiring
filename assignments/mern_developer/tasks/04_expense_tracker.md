## Task 04: Expense Tracker

**Level:** Medium.

Track income and expenses with simple analytics.

### Requirements

- Add transactions: amount, type, category, date, note.
- Monthly summary: total income, expense and savings.
- A chart of spending by category (Chart.js or Recharts).
- Filter by date range and category. Export the filtered rows to CSV.
- Money rules: store amounts as integers (paise or cents), never floats.

### Also deliver

Tests for the summary calculation, including an empty month and a month boundary.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-expense-tracker` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-expense-tracker && cd hikecatalyst-mern-expense-tracker
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-expense-tracker --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-expense-tracker.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
