## Task 05: Interview Loop and Offer Negotiation

**Level:** Medium to advanced.

1. Design a 3-round loop for a Full Stack Developer: what each round tests, who runs it, the scorecard, and what is not asked.
2. Use AI to generate interview questions, then fix 5 of them that are vague, leading or illegal to ask.
3. Write a debrief template that stops the first opinion from dominating.
4. Offer case: the candidate has a 12 LPA offer elsewhere and asks 18 LPA, our band is 12-16. Write the call plan, the email and your fallback options.
5. Track the first 30 days after joining: a checklist that prevents early exits.

**Deliverables:** `loop.md`, `offer_plan.md`, `onboarding.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-it-recruiter-interview-loop-and-offer` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-it-recruiter-interview-loop-and-offer && cd hikecatalyst-it-recruiter-interview-loop-and-offer
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-it-recruiter-interview-loop-and-offer --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-it-recruiter-interview-loop-and-offer.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
