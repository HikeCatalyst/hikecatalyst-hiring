## Task 02: Notes App with Login

**Level:** Easy to Medium.

Users sign up, log in and keep private notes.

### Requirements

- Register and login with email and password. Hash passwords (bcrypt). Return a JWT.
- Protect note routes with middleware. A user must never read or edit another user's notes.
- CRUD notes with tags. Search notes by title or tag.
- Store the token safely and log out clears it.

### Also deliver

Tests for register, login failure, and the access check (user A cannot read user B's note).

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-notes-app-with-login` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-notes-app-with-login && cd hikecatalyst-mern-notes-app-with-login
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-notes-app-with-login --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-notes-app-with-login.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
