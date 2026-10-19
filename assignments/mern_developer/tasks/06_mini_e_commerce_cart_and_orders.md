## Task 06: Mini E-commerce: Cart and Orders

**Level:** Medium.

A small store with a cart and checkout (no real payments).

### Requirements

- Product list with search and category filter. Product page.
- Cart in React state, saved in localStorage, synced to the user after login.
- Place an order: the server recomputes prices from the database (never trust the price sent by the client) and reduces stock in a transaction.
- Orders page with status. An admin can add products and mark orders shipped.
- Out-of-stock handling.

### Also deliver

Test: two users order the last item at the same time; only one succeeds.

### Bonus (optional)

Deploy it (Vercel or Netlify for the client, Render or Railway for the API, MongoDB Atlas free tier) and add the live link to the README.


---

## Repo and submission

1. **Public repo name:** `hikecatalyst-mern-mini-e-commerce-cart-and-orders` on **your own personal GitHub account**. Do not push to the HikeCatalyst repo.
2. **Stack:** MongoDB, Express, React (Vite), Node.js 20+. TypeScript is welcome but optional. Follow the [MERN starter guide](../getting_started.md).
3. **Repo layout:** `client/`, `server/`, a root `README.md` (setup steps that work on a clean machine, a screenshot, what is unfinished), `.env.example` in each folder, and `.gitignore` with `.env` and `node_modules/`. Never commit secrets.
4. **Create and push:**

```bash
mkdir hikecatalyst-mern-mini-e-commerce-cart-and-orders && cd hikecatalyst-mern-mini-e-commerce-cart-and-orders
git init -b main
# ...add client/ server/ README.md...
git add -A && git commit -m "feat: first working version"
gh repo create hikecatalyst-mern-mini-e-commerce-cart-and-orders --public --source=. --remote=origin --push
# without gh:
# git remote add origin git@github.com:<your-username>/hikecatalyst-mern-mini-e-commerce-cart-and-orders.git
# git push -u origin main
```

5. Commit small and often with clear messages. Check the repo is **public** in a private browser window.
6. Submit the link in your PR (see [SUBMISSION.md](../../../SUBMISSION.md)). You may use AI tools; keep a short `AI_LOG.md` of what you used and what you changed. We ask you to explain your code in the follow-up call.
