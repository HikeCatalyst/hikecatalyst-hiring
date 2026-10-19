## Advanced Task: Job Application Pipeline with Async AI Jobs

Build a mini tracker where users add job applications and an AI worker processes them in the background. Focus on correctness under failure, not on UI polish.

**Stack:** TypeScript. Next.js or Hono for the API, Postgres or SQLite, and a queue (BullMQ, QStash, Cloudflare Queues, or a table-based queue you write yourself).

### Features

1. **Applications CRUD** with statuses: `saved`, `applied`, `hr_call`, `interview`, `offer`, `rejected`. Only allowed transitions are accepted (for example `saved` to `offer` is rejected). Put the rule in one tested function.
2. **Roles:** `candidate` and `mentor`. A mentor can read and comment on only the candidates assigned to them. Write an access-control test matrix.
3. **Async AI job:** when an application is created with a job description, enqueue a job that asks an LLM for interview questions. The API returns immediately with `202` and a job id; the client polls `GET /jobs/:id`.
4. **Reliability:** the job must be **idempotent** (a retry must not create duplicate questions), retried with backoff at most 3 times, and moved to a `failed` state with the error stored. A duplicate create request with the same `Idempotency-Key` header must return the first result.
5. **Concurrency:** two simultaneous status updates on one application must not corrupt it. Use optimistic locking (a `version` column) or a transaction, and prove it with a test that fires parallel requests.
6. **Observability:** structured logs with a request id that follows the request into the job.

### Not allowed

- Storing job state only in memory.
- Catching errors and silently returning success.

### Deliverables

- Code, tests (minimum 8, including the concurrency and idempotency ones), `README.md`.
- `DESIGN.md` (one page): the schema, the state diagram, and your answers to: what happens if the worker crashes mid-job, and what happens if the LLM returns after the client gave up?
- `AI_LOG.md`.

### Follow-up call (30 minutes)

We will pick one file and ask you to explain it, break it on purpose, then fix it live. We will also change one requirement and watch how you adapt.
