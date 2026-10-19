## Task 04: Competitor and Trend Report

**Level:** Medium.

1. Pick 5 accounts (career coaches, edtech, job platforms). Collect 10 recent posts from each into a sheet with format, topic, hook type, likes, comments and shares.
2. Use AI to tag hook types and topics, then **check 20 tags by hand** and report the AI error rate.
3. Find 3 patterns backed by the numbers, and 2 gaps nobody covers.
4. Turn the findings into 5 content ideas, each with the evidence behind it.

**Trap:** AI will invent engagement numbers if you ask it to "analyse" accounts it cannot see. Every figure must come from your own collected data.

**Deliverables:** the data sheet, `report.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-social-media-content-marketing-competitor-and-trend-report` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-social-media-content-marketing-competitor-and-trend-report && cd hikecatalyst-social-media-content-marketing-competitor-and-trend-report
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-social-media-content-marketing-competitor-and-trend-report --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-social-media-content-marketing-competitor-and-trend-report.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
