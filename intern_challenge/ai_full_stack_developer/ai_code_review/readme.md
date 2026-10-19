## AI Code Review Task (all levels, 45 minutes)

An AI assistant wrote `rate_limiter.ts` from the prompt: "Write a rate limiter that allows 10 requests per user per hour, for a multi-server API." It looks clean and passes a quick demo.

Review it as you would review a teammate's pull request. In `review.md`, list every problem you find, ordered by severity. For each problem give: the line, why it breaks, a failing scenario with concrete inputs, and the fix.

Then fix the file and add tests that fail on the original and pass on yours.

There are at least 6 real problems. We also check that you do not report false alarms.

You may use AI to help, but record in `AI_LOG.md` what it missed or got wrong while you reviewed.
