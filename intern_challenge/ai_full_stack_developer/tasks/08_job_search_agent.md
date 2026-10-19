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
