// Rate limiter: 10 requests per user per hour.
// NOTE: this file is the review target. It contains deliberate bugs.

const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 10;

const hits: Record<string, number[]> = {};

export function isAllowed(userId: string): boolean {
  const now = Date.now();
  if (!hits[userId]) hits[userId] = [];

  hits[userId] = hits[userId].filter((t) => t > now - WINDOW_MS);

  if (hits[userId].length > LIMIT) {
    return false;
  }

  hits[userId].push(now);
  return true;
}

export function remaining(userId: string): number {
  return LIMIT - hits[userId].length;
}

export async function handler(req: { headers: Record<string, string> }) {
  const userId = req.headers["x-user-id"];
  if (!isAllowed(userId)) {
    return { status: 429, body: "Too many requests" };
  }
  return { status: 200, body: `ok, ${remaining(userId)} left` };
}
