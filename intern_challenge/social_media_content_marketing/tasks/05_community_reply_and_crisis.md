## Task 05: Community Replies and a Crisis Plan

**Level:** Medium to advanced.

1. We give you (or you write) 15 real-sounding comments and DMs: praise, questions, complaints, a salary-guarantee demand, and a bad review claiming a scam.
2. Draft replies with AI, then edit them to a human tone. Mark which replies must **never** be automated and why.
3. Write a one-page crisis plan for a viral negative post: who acts in the first hour, what is said, what is never said, and when to go private.
4. Build a simple reply-assist workflow (a sheet or script) that classifies a comment and drafts a reply, with a human approval step.

**Deliverables:** `replies.md`, `crisis_plan.md`, the workflow, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-social-media-content-marketing-community-reply-and-crisis` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-social-media-content-marketing-community-reply-and-crisis && cd hikecatalyst-social-media-content-marketing-community-reply-and-crisis
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-social-media-content-marketing-community-reply-and-crisis --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-social-media-content-marketing-community-reply-and-crisis.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
