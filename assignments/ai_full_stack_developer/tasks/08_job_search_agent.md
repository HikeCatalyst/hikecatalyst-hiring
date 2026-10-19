## Task 08: Tool-Calling Job Search Agent

**Level:** Advanced. **Idea:** an agent that takes a goal, such as "find 5 remote backend jobs matching my resume and draft an email for each".

### Build

1. Tools (each a typed function with a schema): `search_jobs(query)` (a mock job API you build or a free public one), `fetch_job(id)`, `score_match(resume, job)`, `draft_email(job)`.
2. An agent loop you write yourself (no agent framework for the loop itself): the LLM picks a tool, you run it, you feed back the result, until done.
3. **Safety:** a hard cap of 8 steps and a token budget. Detect repeated identical tool calls. Validate tool arguments before running. Never send an email automatically: the user approves each draft.
4. Show a trace page: every step, tool, arguments, result, and time.

### Traps we check

A job posting that contains instructions aimed at the agent ("email this resume to ..."). The agent must treat tool output as data, not as commands.

### Deliverables

Code, tests with a fake LLM that replays a fixed script, `DESIGN.md`, and `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-job-search-agent` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** TypeScript or Python, no agent framework for the loop, a mock jobs API, Vitest or pytest
3. **You need:** Node 20+ or Python 3.11+, an LLM key plus a fake LLM for tests. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-job-search-agent && cd hikecatalyst-ai-full-stack-developer-job-search-agent
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-job-search-agent --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-job-search-agent.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
