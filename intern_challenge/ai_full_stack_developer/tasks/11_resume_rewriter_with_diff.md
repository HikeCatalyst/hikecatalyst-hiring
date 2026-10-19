## Task 11: Resume Rewriter with Fact Protection

**Level:** Medium. **Idea:** an AI rewrite tool that cannot lie.

### Build

1. Paste a resume and a target job description. The AI rewrites bullets to fit the job.
2. Show the original and rewritten text side by side with a word-level diff. The user accepts or rejects each bullet.
3. **Fact protection, in code:** extract numbers, company names, dates and job titles from the original. Any rewritten bullet that adds a new one is flagged and cannot be accepted without the user editing it.
4. Export the accepted version to PDF or DOCX.

### Traps we check

A resume with no numbers (the AI will invent "improved performance by 40%"), and a job description asking for a skill the resume lacks.

### Deliverables

Code, tests for the fact checker (at least 6), README, `AI_LOG.md`.
