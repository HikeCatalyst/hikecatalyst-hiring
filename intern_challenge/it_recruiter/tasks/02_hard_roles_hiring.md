## Advanced Task: Fair, Fast Hiring for Two Hard Roles

Scenario: a startup wants a **Senior DevOps Engineer** (Kubernetes, Terraform, AWS) and a **Data Engineer** (Spark, Airflow) within 30 days, with a budget of Rs 60,000 and a salary band of 25-35 LPA. Market supply is small.

### Part 1: Market reality

1. Estimate how many suitable candidates exist in India for each role. Show your method (LinkedIn counts with Boolean strings, job post counts) and its limits. Do not trust an AI-stated number without a source.
2. Tell the hiring manager what is realistic: time to hire, band changes, or must-have skills to drop.

### Part 2: Resume screening with a test set

We give you (or you create) 10 resumes, 3 of which are tricks: a keyword-stuffed resume with no real work, a strong candidate with a career gap, and a resume with a fabricated-looking claim.

1. Rank them with an AI tool first, then with your own judgement.
2. Compare the two rankings and explain every disagreement.
3. Write the verification questions you would ask to confirm each claimed skill.

### Part 3: Technical screening guide

Write a 20-minute phone screen for one role: 6 questions with expected strong, weak and red-flag answers, so a non-technical recruiter can score them. Include a scorecard.

### Part 4: Pipeline plan

Create a 30-day plan with weekly targets and a funnel model (sourced, replied, screened, interviewed, offered, joined) using realistic conversion rates. Show the numbers needed at the top to get 1 hire, and the cost per hire against the Rs 60,000 budget.

### Part 5: Ethics and compliance

Write rules for using AI with candidate data (consent, storage, no sensitive attributes in scoring) and how you would audit an AI screener for bias.

### Live follow-up

We will role-play: you call a candidate who has a competing offer, and a hiring manager who wants to lower the bar. We watch how you handle both.

### Deliverables

`market.md`, `screening_comparison.md`, `phone_screen.md`, `plan.xlsx` or `plan.md`, `ethics.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-it-recruiter-hard-roles-hiring` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-it-recruiter-hard-roles-hiring && cd hikecatalyst-it-recruiter-hard-roles-hiring
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-it-recruiter-hard-roles-hiring --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-it-recruiter-hard-roles-hiring.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
