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
