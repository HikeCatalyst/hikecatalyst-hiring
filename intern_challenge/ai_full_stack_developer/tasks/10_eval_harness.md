## Task 10: Evaluation Harness for an LLM Feature

**Level:** Advanced. **Idea:** most AI features have no tests. Build the thing that tests them.

### Build

1. Pick a simple LLM feature (for example summarise a job description into 5 bullets, or extract skills from a resume).
2. Create a **golden set** of at least 30 hand-checked cases, including 5 hard ones.
3. A runner that executes all cases against two prompt versions or two models, and records pass or fail per case.
4. Metrics: exact or schema checks where possible, plus an LLM-as-judge for the rest. **Validate the judge:** score 10 cases by hand and report how often the judge agrees with you.
5. A report page or markdown showing a comparison and the cases that regressed. A CI workflow (GitHub Actions) fails when the pass rate drops more than 5 points.

### Think about

Run the same case 5 times. How much does the result move? Report that noise level, and how it changes your conclusion.

### Deliverables

Code, golden set, report, CI file, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-ai-full-stack-developer-eval-harness` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Suggested stack:** Python or TypeScript, pytest or Vitest, GitHub Actions
3. **You need:** Python 3.11+ or Node 20+, an LLM key, a GitHub account with Actions enabled. Never commit API keys: keep them in `.env`, list `.env` in `.gitignore`, and commit only `.env.example`.
4. **Create and push** (run `gh auth login` once first, or create the repo on github.com and use the `git remote add` line):

```bash
mkdir hikecatalyst-ai-full-stack-developer-eval-harness && cd hikecatalyst-ai-full-stack-developer-eval-harness
git init -b main
# ...add your code and README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-ai-full-stack-developer-eval-harness --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-ai-full-stack-developer-eval-harness.git
# git push -u origin main
```

5. Commit small and often. Check that the repo is **public** in a private browser window and that no secrets are in the history.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`). The README must have setup steps that work on a clean machine.
