## Task 07: Support Chatbot with Guardrails and Handoff

**Level:** Medium. **Idea:** a customer support bot for a fake career-services company.

### Build

1. Chat widget (embeddable script or a page) answering from a small FAQ file.
2. **Guardrails in code:** block prompt injection attempts, refuse out-of-scope questions (legal advice, other companies), and never output prices that are not in the FAQ.
3. **Handoff:** if the user is angry, asks twice for a human, or the bot is unsure, create a ticket (stored in the database) with the chat summary and show an agent view.
4. PII: mask phone numbers and emails before they go to the LLM and in logs.

### Red-team list

Write 20 attack messages (injection, jailbreak, data extraction, abuse). Run them all and report how many your bot resisted, and what you changed to fix the failures.

### Deliverables

Code, `redteam.md`, README, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-guarded-support-bot` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Next.js or any web framework, SQLite or Postgres, a small embeddable widget script
3. **You need:** Node 20+, an LLM key. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-guarded-support-bot && cd hikecatalyst-ai-full-stack-developer-guarded-support-bot
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-guarded-support-bot --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-guarded-support-bot.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
