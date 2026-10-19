# How to Submit

Your work lives in **your own public GitHub repository**, one per task. You then send us the links through a Pull Request.

## One-time setup

```bash
# 1. Tools: Git, Node 20+ (dev roles), Python 3.11+ (optional), VS Code, GitHub CLI
git --version && gh --version

# 2. Tell Git who you are
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# 3. Log in to GitHub (HTTPS is the easiest)
gh auth login

# Or use SSH: create a key, add the .pub file at https://github.com/settings/keys
ssh-keygen -t ed25519 -C "you@example.com"
ssh -T git@github.com
```

Accounts to create (free tiers are enough): GitHub, plus for developers an LLM provider key (Claude, OpenAI or Gemini), a database (Supabase, Neon or local SQLite), and optionally Vercel or Cloudflare to deploy.

## For each task

1. Open your task file. The "Repo and submission" section at the bottom gives the repo name, a suggested stack, and the exact commands.
2. Create the repo on your **personal** account and make it **public**:

   ```bash
   gh repo create <repo-name> --public --source=. --remote=origin --push
   ```

3. Keep secrets out of Git. Add this to `.gitignore` before the first commit:

   ```
   .env
   .env.*
   !.env.example
   node_modules/
   ```

   If a key ever reaches a commit, revoke it at the provider and make a new one. Deleting the file is not enough.
4. Your repo must contain a `README.md` (what it does, setup steps, how to run tests, what is unfinished), `AI_LOG.md`, and for developers a `.env.example`.
5. Check the repo in a private browser window. It must open without logging in.

## Send it to us

1. Fork `HikeCatalyst/hikecatalyst-internship-test` and create a branch.
2. Add one file: `submissions/<your_full_name_snake_case>.md` with this content:

   ```markdown
   # Your Full Name
   Role: AI Applied Full Stack Developer
   Email: you@example.com

   | Task | Repo link | Live link (if any) |
   |------|-----------|--------------------|
   | 03 RAG Career Assistant | https://github.com/<you>/hikecatalyst-... | |
   ```

3. Open a Pull Request. Do not copy your code into this repository.

```bash
git clone git@github.com:<your-username>/hikecatalyst-internship-test.git
cd hikecatalyst-internship-test
git switch -c submission/<your_full_name>
mkdir -p submissions && $EDITOR submissions/<your_full_name>.md
git add -A && git commit -m "submission: <your name>"
git push -u origin HEAD
gh pr create --fill
```

## Before you submit (checklist)

- [ ] Repo is public and has a README with setup steps that work on a clean machine
- [ ] No API keys or personal data anywhere in the history (`git log -p | grep -i "key\|secret\|token"`)
- [ ] `AI_LOG.md` exists and lists real mistakes the AI made
- [ ] Many small commits, not one large commit
- [ ] You can explain every file in the follow-up call
