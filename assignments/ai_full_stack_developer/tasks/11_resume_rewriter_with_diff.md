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


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-resume-rewriter-with-diff` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Next.js, a diff library, a PDF or DOCX export library, Vitest
3. **You need:** Node 20+, an LLM key. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-resume-rewriter-with-diff && cd hikecatalyst-ai-full-stack-developer-resume-rewriter-with-diff
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-resume-rewriter-with-diff --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-resume-rewriter-with-diff.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
