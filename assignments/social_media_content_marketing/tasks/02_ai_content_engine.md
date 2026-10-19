## Advanced Task: Build an AI Content Engine and Prove It Works

Goal: design a repeatable workflow that turns one HikeCatalyst success story (a real candidate story is provided on request, or use a made-up one) into content for 4 channels, with a human quality gate.

### Part 1: Workflow (no-code or low-code)

Build it in n8n, Zapier, Make, Google Sheets plus Apps Script, or a simple script. It must:

1. Take a story brief (a row in a sheet) as input.
2. Generate a LinkedIn post, a short video script, a WhatsApp message and an email subject line set, using an LLM.
3. Run a **checker step**: flag any number, salary, company name or quote that is not in the brief. Flagged items block publishing.
4. Send the draft to a human approval step (sheet column, Slack message or email).

Show it working with a screen recording of 3 different briefs, including one brief where the AI would be tempted to exaggerate.

### Part 2: Experiment

Design a 2-week A/B test with a hypothesis, a sample size reality check (we post 5 times a week with small reach), the metric, and what result would make you stop or continue. Explain honestly why the data may be too small to conclude anything.

### Part 3: Brand and risk

Write a one-page brand voice guide with 5 do and 5 don't rules, 3 before and after examples (generic AI copy and your fix), and a policy for what the team must never post (fake testimonials, guaranteed placements, candidate data).

### Part 4: Live follow-up

On the call we will give you a new brief and 20 minutes. You rewrite one post live and explain every change.

### Deliverables

Workflow export or script, the recording, `experiment.md`, `brand_voice.md`, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-social-media-content-marketing-ai-content-engine` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-social-media-content-marketing-ai-content-engine && cd hikecatalyst-social-media-content-marketing-ai-content-engine
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-social-media-content-marketing-ai-content-engine --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-social-media-content-marketing-ai-content-engine.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
