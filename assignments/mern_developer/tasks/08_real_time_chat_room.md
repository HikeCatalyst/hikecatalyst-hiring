## Task 08: Real-Time Chat Room

**Level:** Medium to Advanced.

Chat with rooms, using WebSockets.

### Requirements

- Login, then join or create rooms. Messages appear instantly for everyone in the room (Socket.io).
- Message history loads from MongoDB when you join.
- Show who is online and a typing indicator.
- Handle disconnects and reconnects without duplicate messages.
- Authenticate the socket connection with the JWT.

### Also deliver

Document in the README how it behaves with 2 server instances and what you would add.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-real-time-chat-room` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-real-time-chat-room && cd hikecatalyst-mern-real-time-chat-room
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-real-time-chat-room --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-real-time-chat-room.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
