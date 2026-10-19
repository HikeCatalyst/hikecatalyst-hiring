## Task 06: LLM Gateway

**Level:** Advanced. **Idea:** one internal API that sits in front of several LLM providers. This is a common real backend job.

### Build

1. `POST /v1/chat` takes a prompt and a team API key, and calls a provider. Support at least 2 providers (a real one plus a mock that you can make fail on demand).
2. **Fallback routing:** on timeout, 429 or 5xx, retry with backoff, then fall back to the second provider. Return which provider answered.
3. **Per-key limits:** requests per minute and a monthly token budget. Over the limit returns `429` with a `Retry-After` header.
4. **Cache** identical prompts for 10 minutes. Show the saving.
5. **Cost tracking:** log tokens and cost per request. Provide `GET /v1/usage` with totals per key and per day.
6. Streaming responses must also work with fallback (decide what happens if a stream breaks midway, and document it).

### Tests

Provider failure, both providers failing, limit exceeded, cache hit, and concurrent requests sharing one key (counters must stay correct).

### Deliverables

Code, tests, `DESIGN.md` (diagram, tradeoffs, what you would change at 1,000 requests per second), and `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-llm-gateway` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** TypeScript with Hono or Python with FastAPI, Redis or SQLite, Vitest or pytest
3. **You need:** Node 20+ or Python 3.11+, Docker for Redis, keys for 1 real provider. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-llm-gateway && cd hikecatalyst-ai-full-stack-developer-llm-gateway
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-llm-gateway --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-llm-gateway.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
