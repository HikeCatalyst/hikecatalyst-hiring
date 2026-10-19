## Task 02: Partnership Pitch

**Level:** Medium.

Write a one-page pitch and a 6-slide deck for a college placement-cell partnership. Include an offer, proof points that are verifiable, and a pilot plan.

**Deliverables:** the files above, plus `AI_LOG.md`. Be ready to explain every number and sentence on the follow-up call.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-bd-ops-partnership-pitch` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, code, images, exports, and links to videos or dashboards with view access on), a `README.md` listing each file, and `AI_LOG.md` (prompts, what the AI got wrong, what you fixed).
3. **Tools you may need:** Git, a free GitHub account, `gh` CLI (optional), Google Sheets or Excel, VS Code, and any AI tool. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-bd-ops-partnership-pitch && cd hikecatalyst-bd-ops-partnership-pitch
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-bd-ops-partnership-pitch --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-bd-ops-partnership-pitch.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)).
