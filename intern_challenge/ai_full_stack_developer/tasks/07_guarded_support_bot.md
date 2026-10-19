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
