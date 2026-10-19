## Task 04: Map a Process and Find What to Automate

**Level:** Medium.

Process: a candidate goes from "paid" to "first HR call scheduled" (profile review, resume rewrite, mentor assignment, job applications, weekly updates).

1. Interview a classmate or friend for 15 minutes to learn a real process of theirs, or use ours. Draw the current flow (BPMN, Mermaid or flowchart) with owners and waiting times.
2. List 10 steps and rate each for automation fit (volume, rule-based, risk). Use AI to suggest, then challenge its picks.
3. Choose 2 to automate with AI. For each: expected hours saved per week (show the math), error risk, and a human checkpoint.
4. Write a go/no-go recommendation with a pilot plan.

**Deliverables:** flow diagram, scoring sheet, `recommendation.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-business-analyst-process-mapping-and-automation` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-business-analyst-process-mapping-and-automation && cd hikecatalyst-business-analyst-process-mapping-and-automation
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-business-analyst-process-mapping-and-automation --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-business-analyst-process-mapping-and-automation.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
