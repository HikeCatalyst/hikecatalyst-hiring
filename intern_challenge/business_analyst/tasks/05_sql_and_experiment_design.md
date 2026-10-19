## Task 05: SQL Questions and an Experiment

**Level:** Medium to advanced.

1. Write SQL for 6 questions on the sample database: top 5 sources by offer rate, median days per stage, candidates stuck over 14 days, month-over-month growth, repeat-callers, and a rolling 4-week conversion. Use window functions at least twice.
2. Ask an AI to write the same queries. Run both, compare results, and explain every difference.
3. Design an experiment: "Does a weekly WhatsApp update reduce drop-off?" State the hypothesis, groups, metric, duration, sample size estimate and decision rule.
4. List 3 ways the experiment result could mislead you.

**Deliverables:** `queries.sql`, `comparison.md`, `experiment.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-business-analyst-sql-and-experiment-design` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-business-analyst-sql-and-experiment-design && cd hikecatalyst-business-analyst-sql-and-experiment-design
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-business-analyst-sql-and-experiment-design --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-business-analyst-sql-and-experiment-design.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
