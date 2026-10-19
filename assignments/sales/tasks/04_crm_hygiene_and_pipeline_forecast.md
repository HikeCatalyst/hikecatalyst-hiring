## Task 04: CRM Hygiene and Pipeline Forecast

**Level:** Medium.

We give you (or you create) a CRM export of 80 messy leads: duplicates, wrong stages, missing owners and stale deals.

1. Clean the sheet. List every rule you used and how many rows each affected.
2. Use AI to suggest fixes, then check it did not merge two different people.
3. Build a pipeline report: leads by stage, conversion between stages, average days in stage, and deals stale for more than 10 days.
4. Forecast next month's closed revenue with a range (low, expected, high). Show the assumptions. Explain why the forecast could be wrong.

**Deliverables:** cleaned sheet, `rules.md`, `forecast.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-sales-crm-hygiene-and-pipeline-forecast` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-sales-crm-hygiene-and-pipeline-forecast && cd hikecatalyst-sales-crm-hygiene-and-pipeline-forecast
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-sales-crm-hygiene-and-pipeline-forecast --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-sales-crm-hygiene-and-pipeline-forecast.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
