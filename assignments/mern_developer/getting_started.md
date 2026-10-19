# MERN Getting Started

A one-hour setup for the MERN tasks. If something here fails, write it in your README. Solving setup problems is part of the job.

## 1. Install the tools

| Tool | Check | Install |
|------|-------|---------|
| Node.js 20+ | `node -v` | https://nodejs.org or `nvm install 20` |
| Git | `git --version` | https://git-scm.com |
| VS Code | | https://code.visualstudio.com |
| GitHub CLI (optional) | `gh --version` | https://cli.github.com |
| Postman or the REST Client VS Code extension | | for testing the API |

## 2. MongoDB

Easiest: a free **MongoDB Atlas** cluster (https://www.mongodb.com/atlas). Create a database user, allow your IP, copy the connection string into `server/.env` as `MONGODB_URI`. Alternative: run it locally with Docker: `docker run -d -p 27017:27017 --name mongo mongo:7`.

## 3. Project skeleton

```bash
mkdir my-app && cd my-app && git init -b main

# server
mkdir server && cd server
npm init -y
npm i express mongoose cors dotenv bcrypt jsonwebtoken zod
npm i -D nodemon jest supertest
cd ..

# client
npm create vite@latest client -- --template react
cd client && npm i && npm i axios react-router-dom && cd ..
```

`server/.env.example`:

```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=change-me
CLIENT_ORIGIN=http://localhost:5173
```

Minimal `server/index.js`:

```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());
app.get('/health', (req, res) => res.json({ ok: true }));

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT, () => console.log('API on', process.env.PORT));
});
```

Add `"dev": "nodemon index.js"` to `server/package.json` scripts, then run the server (`npm run dev`) and the client (`npm run dev`) in two terminals.

## 4. Suggested structure

```
server/  routes/  models/  middleware/  tests/  index.js
client/  src/pages  src/components  src/api
```

## 5. Habits we look for

- Validate every input on the server, not only in the form.
- Never trust the client for prices, roles or user ids.
- Hash passwords, keep secrets in `.env`, and return the right status codes (400, 401, 403, 404, 409).
- Handle loading, empty and error states in the UI.
- Write the README as if a stranger will run your project.
- Commit often with messages such as `feat: add login route`.

## 6. Push to GitHub

See the commands at the end of each task, or the root [SUBMISSION.md](../../SUBMISSION.md).

## Stuck?

Reproduce the error, read the message, search it, try one fix at a time, and note what you tried. If you still cannot move after 45 minutes, write it in your README and continue with the next requirement.
