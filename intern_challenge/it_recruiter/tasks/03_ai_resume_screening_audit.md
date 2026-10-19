## Task 03: Audit an AI Resume Screener

**Level:** Medium to advanced.

1. Create 12 resumes for one role. Make pairs that are identical except for one trait (name, college, gender, career gap, location).
2. Screen all 12 with an AI tool using the same prompt. Record scores.
3. Report whether scores shifted for the changed trait. Show the numbers.
4. Rewrite the prompt to reduce the bias and test again.
5. Write a one-page policy for when a human must review an AI rejection.

**Deliverables:** resume set, results sheet, `bias_report.md`, `policy.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-it-recruiter-ai-resume-screening-audit` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-it-recruiter-ai-resume-screening-audit && cd hikecatalyst-it-recruiter-ai-resume-screening-audit
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-it-recruiter-ai-resume-screening-audit --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-it-recruiter-ai-resume-screening-audit.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
