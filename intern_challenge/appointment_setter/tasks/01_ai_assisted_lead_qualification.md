## Task 01: AI-Assisted Lead Qualification

**Level:** Medium.

Use the lead list in `sample_data/leads.csv` (made up). Write a 5-question qualification script (role, years, goal, timeline, budget). Score every lead 1-5 with a rubric you write. Use AI to draft, then hand-check 10 scores and report disagreements. List the 5 leads you would book first and why.

**Deliverables:** the files above, plus `AI_LOG.md`. Be ready to explain every number and sentence on the follow-up call.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-appointment-setter-ai-assisted-lead-qualification` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, code, images, exports, and links to videos or dashboards with view access on), a `README.md` listing each file, and `AI_LOG.md` (prompts, what the AI got wrong, what you fixed).
3. **Tools you may need:** Git, a free GitHub account, `gh` CLI (optional), Google Sheets or Excel, VS Code, and any AI tool. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-appointment-setter-ai-assisted-lead-qualification && cd hikecatalyst-appointment-setter-ai-assisted-lead-qualification
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-appointment-setter-ai-assisted-lead-qualification --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-appointment-setter-ai-assisted-lead-qualification.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)).
