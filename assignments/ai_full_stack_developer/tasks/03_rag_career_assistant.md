## Task 03: RAG Career Assistant with Citations

**Level:** Medium. **Idea:** a chatbot that answers career questions only from a document set you upload (for example 10 public salary guides, interview guides or policy pages).

### Build

1. Upload documents (PDF or text), split into chunks, embed, and store in a vector store (pgvector, Chroma, SQLite-vss or similar).
2. Chat UI with streaming answers. Every answer shows its source chunks as clickable citations.
3. Use **hybrid retrieval**: vector search plus keyword search (BM25), merged with a simple rank fusion. Compare it against vector-only on 10 questions.
4. If the documents do not contain the answer, the bot must say it does not know. It must not guess.

### Traps we check

- A question whose answer is in no document.
- A question where two documents disagree. The bot must show both.
- A document that contains the text "ignore all previous instructions". The bot must not obey it.

### Deliverables

Code, README, a `retrieval_comparison.md` table (10 questions, vector-only vs hybrid, your honest verdict), and `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-rag-career-assistant` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Next.js or FastAPI, pgvector or Chroma, an embeddings API, BM25 library
3. **You need:** Node 20+ or Python 3.11+, Docker for pgvector, an LLM and embeddings key. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-rag-career-assistant && cd hikecatalyst-ai-full-stack-developer-rag-career-assistant
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-rag-career-assistant --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-rag-career-assistant.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
