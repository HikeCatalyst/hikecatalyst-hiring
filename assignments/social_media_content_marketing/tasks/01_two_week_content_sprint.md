## Task: AI-Assisted 2-Week Content Sprint

HikeCatalyst helps working professionals in India switch jobs for higher salary hikes (resume, ATS, interview prep, mentoring). Build a content plan and sample content with AI tools, then show your own judgement on top.

### Part 1: Audience and competitors (AI-assisted)

1. Use an LLM to draft two audience personas (for example, a 3-year IT services engineer and a 7-year QA lead). Edit them so they match what you really know.
2. Pick 3 competitor or peer accounts on LinkedIn or Instagram. Write what works for each, with evidence (post links, engagement numbers you can see).

### Part 2: 2-week content calendar

Create a table (Google Sheet or Markdown) of 10 posts across at least 2 platforms, with columns: date, platform, format, hook, key message, CTA, success metric.

### Part 3: Produce 3 pieces of content

- 1 LinkedIn post (150-250 words).
- 1 short-video script (30-45 seconds) with shot list.
- 1 carousel outline (7 slides). A design file is a bonus.

Rules: no invented salary numbers or testimonials. Every statistic needs a source link.

### Part 4: Measure and improve

Propose 3 metrics, a simple weekly report format, and one A/B test (for example, two hooks).

### Part 5: AI judgement

In `AI_LOG.md`, show: the prompts you used, one AI draft you rejected and why, and how you made the final copy sound human and on-brand.

### Deliverables

`content_calendar` file, `content_pieces.md`, `report_template`, and `AI_LOG.md`.

### Short questions

1. Which social platform would you prioritise for this audience, and why?
2. How do you spot AI-written content that feels generic? How do you fix it?
3. A post got high views but zero leads. What do you check first?


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-social-media-content-marketing-two-week-content-sprint` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-social-media-content-marketing-two-week-content-sprint && cd hikecatalyst-social-media-content-marketing-two-week-content-sprint
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-social-media-content-marketing-two-week-content-sprint --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-social-media-content-marketing-two-week-content-sprint.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
