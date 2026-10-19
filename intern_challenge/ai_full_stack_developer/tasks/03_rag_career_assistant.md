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
