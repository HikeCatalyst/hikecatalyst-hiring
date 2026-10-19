## Task 05: RFP and Questionnaire Answers

**Level:** Medium to Advanced.

Answer the 12 questions in `sample_data/questionnaire.md` using only the facts in `sample_data/product_facts.md`. Where the facts do not cover a question, write 'needs input' instead of inventing. Report how many questions an unguided AI answered with made-up facts.

**Deliverables:** the files above, plus `AI_LOG.md`. Be ready to explain every number and sentence on the follow-up call.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-pre-sales-executive-rfp-and-questionnaire-answers` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, code, images, exports, and links to videos or dashboards with view access on), a `README.md` listing each file, and `AI_LOG.md` (prompts, what the AI got wrong, what you fixed).
3. **Tools you may need:** Git, a free GitHub account, `gh` CLI (optional), Google Sheets or Excel, VS Code, and any AI tool. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-pre-sales-executive-rfp-and-questionnaire-answers && cd hikecatalyst-pre-sales-executive-rfp-and-questionnaire-answers
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-pre-sales-executive-rfp-and-questionnaire-answers --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-pre-sales-executive-rfp-and-questionnaire-answers.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)).
