## Task 03: Blog Platform

**Level:** Medium.

A blog with posts, comments and an author dashboard.

### Requirements

- Public list of posts with pagination (10 per page) and a post page.
- Logged-in authors create, edit and delete their own posts. Markdown body.
- Comments on posts. Authors can delete comments on their own posts.
- Slug URLs (`/posts/my-first-post`). Handle duplicate slugs.
- Basic SEO: page title and description per post.

### Also deliver

Seed script with 25 posts. Tests for pagination and ownership.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-blog-platform` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-blog-platform && cd hikecatalyst-mern-blog-platform
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-blog-platform --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-blog-platform.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
