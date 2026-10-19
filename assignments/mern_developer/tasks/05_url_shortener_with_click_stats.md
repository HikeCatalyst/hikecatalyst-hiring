## Task 05: URL Shortener with Click Stats

**Level:** Medium.

Create short links and see who clicked.

### Requirements

- Create a short link from a long URL. Validate the URL (only http and https).
- Visiting `/:code` redirects with 302 and records the click (time, referrer, user agent).
- A stats page: total clicks, clicks per day for 7 days.
- Optional custom code. Reject taken codes. Expire links after a date you choose.
- Rate-limit link creation to stop abuse.

### Also deliver

Tests for invalid URL, duplicate custom code, and expired link.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-url-shortener-with-click-stats` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-url-shortener-with-click-stats && cd hikecatalyst-mern-url-shortener-with-click-stats
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-url-shortener-with-click-stats --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-url-shortener-with-click-stats.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
