## Task 03: AI-Assisted Short Video Pipeline

**Level:** Medium. Make 3 short videos (30-45 seconds) for HikeCatalyst's audience (working professionals who want a job switch and a higher hike).

1. Use AI for ideas, hooks and scripts. Use your own voice or face for at least 1 video. A fully synthetic video is allowed only if you label it as AI-generated.
2. Write 5 hook variants per video and pick one with a reason.
3. Edit captions yourself (CapCut, Canva or similar). Subtitles must be accurate.
4. Write a post caption, hashtags and a CTA for each.
5. In `AI_LOG.md`, show what the AI wrote and what you changed to remove generic phrasing and unsupported claims.

**Deliverables:** 3 video files or links, scripts, captions, `AI_LOG.md`.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-social-media-content-marketing-ai-video-shorts-pipeline` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Put in the repo:** all deliverables as files (`.md`, `.csv`, `.sql`, images, exported sheets, and links to videos or dashboards with view access turned on). Add a `README.md` that lists each file and what it contains.
3. **Tools you may need:** a free GitHub account, Git, `gh` CLI (optional), Google Sheets or Excel, a Markdown editor (VS Code), and any AI tool of your choice. Never put real people's private data or API keys in the repo.
4. **Create and push:**

```bash
mkdir hikecatalyst-social-media-content-marketing-ai-video-shorts-pipeline && cd hikecatalyst-social-media-content-marketing-ai-video-shorts-pipeline
git init -b main
# ...add your files and README.md...
git add -A && git commit -m "feat: first draft of deliverables"
gh repo create hikecatalyst-social-media-content-marketing-ai-video-shorts-pipeline --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-social-media-content-marketing-ai-video-shorts-pipeline.git
# git push -u origin main
```

5. Commit as you go. Check the repo is **public** in a private browser window.
6. Submit the repo link in your PR (see the root `SUBMISSION.md`).
