## Task 03: Dashboard with AI-Written Insights

**Level:** Medium.

1. Using the sample funnel data, build a dashboard (Google Sheets, Looker Studio, Metabase, Power BI or a small app) with 5 KPIs and 3 charts.
2. Add an AI-written weekly summary of the numbers. **The summary must be generated from numbers you pass in**, not from the AI reading the chart.
3. Write a check that compares every number in the AI summary with the source data and flags mismatches.
4. Document each KPI: definition, formula, owner, and how it can be gamed.

**Deliverables:** the dashboard link or file, the check, `kpi_definitions.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-business-analyst-dashboard-with-ai-insights` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-business-analyst-dashboard-with-ai-insights && cd hikecatalyst-business-analyst-dashboard-with-ai-insights
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-business-analyst-dashboard-with-ai-insights --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-business-analyst-dashboard-with-ai-insights.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
