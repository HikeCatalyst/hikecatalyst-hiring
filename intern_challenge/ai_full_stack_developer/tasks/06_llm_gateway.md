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
