## Task 04: Text-to-SQL Analyst with Guardrails

**Level:** Medium to advanced. **Idea:** let a non-technical person ask questions about a database in plain English.

### Build

1. Create a sample database (candidates, applications, interviews, offers) with at least 5 tables and 1,000 generated rows.
2. A UI where the user types a question. The backend gives the LLM the schema (not the data), gets SQL back, validates it, runs it, and shows a table plus the SQL used.
3. **Guardrails, enforced in code, not in the prompt:** read-only database user, only `SELECT`, a single statement, an allow-list of tables, a forced `LIMIT`, and a statement timeout. Parse the SQL with a real parser (for example `sqlglot` or `pgsql-parser`), not regex.
4. When the SQL fails or the result is empty, show a clear message. Let the LLM repair the query once.

### Traps we check

`drop table candidates`, `select * from users; delete from ...`, a question about a table that does not exist, and a prompt asking for all emails.

### Deliverables

Code, a `security.md` listing each attack you tried and the result, 15 test questions with expected answers, and `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-text-to-sql-analyst` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Next.js or FastAPI, Postgres or SQLite, sqlglot or pgsql-parser
3. **You need:** Python 3.11+ or Node 20+, Docker for Postgres, an LLM key. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-text-to-sql-analyst && cd hikecatalyst-ai-full-stack-developer-text-to-sql-analyst
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-text-to-sql-analyst --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-text-to-sql-analyst.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
