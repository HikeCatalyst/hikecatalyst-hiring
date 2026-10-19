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
