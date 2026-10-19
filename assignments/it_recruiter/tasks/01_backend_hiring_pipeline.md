## Task: AI-Assisted Tech Hiring Pipeline

Scenario: A product startup needs to hire a Backend Engineer (Node.js or Java, 3-5 years, Bengaluru or remote). You are the recruiter.

### Part 1: Intake and job description

1. Write 6 intake questions you would ask the hiring manager.
2. Use AI to draft a job description, then edit it. Remove vague wording, biased language and unrealistic requirements. Show before and after.

### Part 2: Sourcing

1. Write 3 Boolean search strings (LinkedIn or GitHub) that find suitable candidates.
2. Write a 3-message outreach sequence (first message, follow-up, last nudge) with a personalisation approach. Each message stays under 100 words.

### Part 3: Screening

1. We give you 5 anonymised resumes (use any 5 made-up resumes if the files are not attached). Screen them with an AI tool and give a shortlist with a one-line reason per candidate.
2. Find at least 2 places where AI screening could be unfair or wrong, such as career gaps or non-top-tier colleges. Explain how you would reduce that risk.
3. Write 8 screening questions and a simple scorecard (skills, communication, notice period, expected CTC, culture fit).

### Part 4: Pipeline metrics

Given: 200 sourced, 60 replied, 30 screened, 10 interviewed, 3 offered, 2 joined. Calculate each stage's conversion and the cost per hire if the total spend is Rs 40,000. Name the biggest weakness and one fix.

### Part 5: AI judgement

In `AI_LOG.md`, list your prompts, one case where AI invented a skill or experience that was not in the resume, and the privacy rules you follow when using AI with candidate data.

### Short questions

1. A candidate has 3 offers and is asking for a 40% hike. How do you handle it?
2. How do you tell a real "Kubernetes" skill from a keyword listed on a resume?
3. The hiring manager rejects every profile you send. What do you do?


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-it-recruiter-backend-hiring-pipeline` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-it-recruiter-backend-hiring-pipeline && cd hikecatalyst-it-recruiter-backend-hiring-pipeline
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-it-recruiter-backend-hiring-pipeline --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-it-recruiter-backend-hiring-pipeline.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
