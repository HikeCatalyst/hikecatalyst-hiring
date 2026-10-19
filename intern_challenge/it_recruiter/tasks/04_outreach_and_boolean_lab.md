## Task 04: Outreach and Boolean Lab

**Level:** Medium.

1. For 3 roles (Frontend, Data Engineer, QA Automation), write Boolean strings and check them on LinkedIn or GitHub. Record how many results each returns and how many of the first 20 are relevant.
2. Use AI to draft outreach for 5 specific public profiles. Personalise each with a true detail from the profile. Remove any detail the AI invented.
3. Write a follow-up sequence and a respectful way to close the loop with someone who says no.
4. Report which message you would send and why. Do not send anything to real people without permission.

**Deliverables:** `boolean.md` with precision numbers, `outreach.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-it-recruiter-outreach-and-boolean-lab` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-it-recruiter-outreach-and-boolean-lab && cd hikecatalyst-it-recruiter-outreach-and-boolean-lab
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-it-recruiter-outreach-and-boolean-lab --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-it-recruiter-outreach-and-boolean-lab.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
