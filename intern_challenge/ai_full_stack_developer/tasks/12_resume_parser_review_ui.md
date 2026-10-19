## Task 12: Resume Parser with Human Review

**Level:** Medium. **Idea:** turn messy PDFs into clean structured data, and be honest about uncertainty.

### Build

1. Upload a PDF resume. Extract the text (and handle scanned pages with OCR as a bonus).
2. Use an LLM with a JSON schema to extract: name, email, phone, skills, experience (company, title, start, end), education.
3. Give each field a **confidence** (use a method you explain, for example the model's own flag plus a regex check) and highlight low-confidence fields in a review form.
4. Save the corrected record. Keep the original extraction and the human edit so you can measure the error rate.
5. Handle failures: an encrypted PDF, a 40-page file, a resume in another layout, and a file that is not a resume.

### Measure

Use 10 sample resumes (make them up). Report the field-level accuracy before and after human review.

### Deliverables

Code, accuracy table, README, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-resume-parser-review-ui` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Next.js or FastAPI, a PDF text library (pdf-parse or pypdf), Zod or Pydantic
3. **You need:** Node 20+ or Python 3.11+, an LLM key, sample PDFs you create. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-resume-parser-review-ui && cd hikecatalyst-ai-full-stack-developer-resume-parser-review-ui
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-resume-parser-review-ui --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-resume-parser-review-ui.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
