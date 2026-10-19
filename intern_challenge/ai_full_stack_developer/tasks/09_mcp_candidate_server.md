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
