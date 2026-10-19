## Task: AI-Assisted Funnel Analysis and Requirements

Scenario: HikeCatalyst tracks candidates through a funnel: Lead, Profile Review, Resume Ready, Applications Sent, HR Call, Interview Rounds, Offer. Leads are leaking and the founders want to know where and why.

### Part 1: Data analysis (AI-assisted)

Create a sample dataset of at least 100 rows (use AI to generate it, then check it) with columns: `candidate_id`, `source`, `domain`, `experience_years`, `stage_reached`, `days_in_stage`, `offer_hike_percent`. Use Excel, Google Sheets, SQL or Python.

1. Compute stage-to-stage conversion rates and find the biggest drop.
2. Compare conversion by `source` and by `domain`.
3. List 3 insights and 3 questions you would ask the team before acting on them.

### Part 2: Requirements

Write a one-page PRD for one fix, for example an "automatic weekly update reminder for candidates". Include: problem, users, user stories (at least 4, with acceptance criteria), out of scope, success metric and risks.

### Part 3: Process and dashboard

1. Draw a flowchart of the candidate journey (Mermaid, draw.io or hand-drawn).
2. Sketch a dashboard of 5 KPIs with a definition and formula for each.

### Part 4: AI judgement

In `AI_LOG.md`, show where AI gave a wrong calculation or a made-up insight, and how you verified it. Never trust a number you did not recompute.

### Deliverables

Dataset, analysis file, `PRD.md`, diagrams and `AI_LOG.md`.

### Short questions

1. How do you check that a dataset is clean before analysis?
2. Explain the difference between a requirement and a solution with an example.
3. A stakeholder asks for 12 features in one sprint. What do you do?
