## Advanced Task: Messy Data, Real Decision

You get a deliberately messy file. AI will confidently analyze it and miss traps, so your job is to find the traps first.

### Part 1: Dataset with traps

Create `candidates_raw.csv` (or request ours) with at least 300 rows and these planted problems, then clean it with SQL or Python and document each fix:

- duplicate candidates with different spellings and emails,
- stage names written 4 different ways,
- `offer_hike_percent` values such as `-5`, `450` and `"N/A"`,
- candidates who skip stages (for example Lead straight to Offer),
- one source that has far fewer rows than the others.

Write `data_quality.md`: what was wrong, how many rows were affected, and the rule you used to fix or drop each case.

### Part 2: Analysis

1. Funnel conversion by source, with a confidence caveat for the small source.
2. Hike analysis: median instead of average, and explain why.
3. One result that looks significant but is misleading (Simpson's paradox or small sample). Show both views.

### Part 3: Recommendation

Write a one-page memo for the founders: the decision you recommend, the evidence, what you are not sure about, and a cheap experiment to confirm it before spending money.

### Part 4: Requirements

Write a PRD for the recommended fix, including user stories with acceptance criteria and the events to track so success can be measured. Add a RACI for 4 stakeholders.

### Part 5: AI audit

Give the raw file to an AI tool with no hints. In `AI_AUDIT.md` list what it got right, what it silently ignored, and any number you could not reproduce.

### Live follow-up

We will change one assumption (for example "the small source is actually our best channel") and ask you to redo the reasoning live.

### Deliverables

Cleaning code or queries, `data_quality.md`, analysis file, memo, `PRD.md`, `AI_AUDIT.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-business-analyst-messy-data-decision` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-business-analyst-messy-data-decision && cd hikecatalyst-business-analyst-messy-data-decision
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-business-analyst-messy-data-decision --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-business-analyst-messy-data-decision.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
