## Task 01: Todo App with REST API

**Level:** Easy.

Build a todo app: React frontend, Express API, MongoDB.

### Requirements

- Create, list, edit, complete and delete todos.
- Each todo has `title`, `done`, `dueDate`, `createdAt`.
- Filter by all, active, done. Sort by due date.
- Validate input on the server (title required, max 120 characters) and return clear error messages.
- Show loading and error states in the UI.

### Also deliver

5 API tests (Jest and Supertest) and a Postman or `.http` collection.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-todo-app-with-rest-api` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-todo-app-with-rest-api && cd hikecatalyst-mern-todo-app-with-rest-api
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-todo-app-with-rest-api --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-todo-app-with-rest-api.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
