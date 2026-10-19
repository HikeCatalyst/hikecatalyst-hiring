## Task 01: AI Lead Research and Scoring

**Level:** Medium. HikeCatalyst sells job-switch support to working professionals in India (resume, interview prep, mentoring).

1. Define the ideal customer in 5 lines (role, years of experience, pain, trigger events, budget).
2. Collect 30 public leads (for example people posting "open to work" or asking switch questions in public communities). Store only public information, in a sheet.
3. Score each lead from 1 to 5 using a rubric you write. Use AI to help, then check 10 scores by hand and report the disagreement.
4. Pick the top 10 and write one line on why each is a fit and what trigger to use.

**Rule:** no scraping that breaks a site's terms, and no private data.

**Deliverables:** lead sheet, `rubric.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-sales-ai-lead-research-and-scoring` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-sales-ai-lead-research-and-scoring && cd hikecatalyst-sales-ai-lead-research-and-scoring
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-sales-ai-lead-research-and-scoring --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-sales-ai-lead-research-and-scoring.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
