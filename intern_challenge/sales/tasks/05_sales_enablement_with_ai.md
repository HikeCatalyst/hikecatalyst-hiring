## Task 05: Sales Enablement Kit

**Level:** Medium to advanced.

1. Build a one-page battlecard against 2 competitors (pricing, strengths, weaknesses, how to respond). Every claim needs a public source link.
2. Create an AI-powered call summary prompt. Test it on 3 call transcripts (you may write them). Score the summaries for missed objections, invented facts and wrong next steps.
3. Create a proposal template and generate one for a made-up customer. Remove claims you cannot back up.
4. Write a weekly sales report in plain language: pipeline, wins, losses and why, and the one thing to change next week.

**Deliverables:** `battlecard.md`, `summary_prompt_test.md`, `proposal.md`, `weekly_report.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-sales-sales-enablement-with-ai` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-sales-sales-enablement-with-ai && cd hikecatalyst-sales-sales-enablement-with-ai
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-sales-sales-enablement-with-ai --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-sales-sales-enablement-with-ai.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
