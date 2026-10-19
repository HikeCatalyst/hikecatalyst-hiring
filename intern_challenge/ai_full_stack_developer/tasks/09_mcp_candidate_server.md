## Task 09: MCP Server for a Candidate Tracker

**Level:** Medium. **Idea:** expose a small app to AI assistants through the Model Context Protocol.

### Build

1. A simple candidate tracker backend (SQLite or Postgres).
2. An MCP server (TypeScript or Python SDK) with tools: `list_candidates`, `get_candidate`, `add_note`, `move_stage`, and a resource that returns the pipeline summary.
3. Auth: a token is required, and `move_stage` rejects invalid transitions.
4. Write tool descriptions that make a model choose the right tool. Test with an MCP-capable client (Claude Desktop, Claude Code, MCP Inspector) and record a short demo.

### Think about

What happens if an assistant calls `move_stage` for the wrong candidate? Add a confirmation or dry-run mode and explain it.

### Deliverables

Code, README with client setup, demo recording, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-mcp-candidate-server` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** MCP SDK (TypeScript or Python), SQLite or Postgres
3. **You need:** Node 20+ or Python 3.11+, an MCP client (Claude Desktop, Claude Code or MCP Inspector). Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-mcp-candidate-server && cd hikecatalyst-ai-full-stack-developer-mcp-candidate-server
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-mcp-candidate-server --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-mcp-candidate-server.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
