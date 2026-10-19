## Task 03: Discovery Call and Objection Handling

**Level:** Medium to advanced.

1. Write a 15-minute discovery call script with 8 questions that uncover pain, urgency and budget.
2. Write answers for 8 objections ("too expensive", "I will do it myself", "does it guarantee a job?", "I need to ask my spouse", and similar). Honest answers only. Never promise a guaranteed placement.
3. Record a role-play (audio or video, 5 minutes) using an AI as the customer. Then listen back and write what you did badly.
4. Write the CRM note you would save after the call: need, objection, next step, date.

**Deliverables:** `script.md`, `objections.md`, the recording, `call_review.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-sales-discovery-call-and-objections` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-sales-discovery-call-and-objections && cd hikecatalyst-sales-discovery-call-and-objections
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-sales-discovery-call-and-objections --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-sales-discovery-call-and-objections.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
