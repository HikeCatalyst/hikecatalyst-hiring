## Task 02: Personalised Outreach Sequence

**Level:** Medium.

1. For 5 of your leads, write a LinkedIn message and a WhatsApp message (under 80 words each). Each must contain one **true** detail about the person.
2. Write a 4-step follow-up sequence with timing and a clear stop rule.
3. Ask AI for drafts, then rewrite them. In `AI_LOG.md`, show one draft that sounded fake and what you changed.
4. Add compliance rules: consent, an opt-out line, no pressure tactics, no income guarantees.

**Deliverables:** `outreach.md`, `sequence.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-sales-personalised-outreach-sequence` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-sales-personalised-outreach-sequence && cd hikecatalyst-sales-personalised-outreach-sequence
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-sales-personalised-outreach-sequence --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-sales-personalised-outreach-sequence.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
