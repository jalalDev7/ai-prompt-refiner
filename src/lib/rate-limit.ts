// Simple in-memory rate limiter for free tier
// In production, use Redis or database
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const FREE_TIER_LIMIT = parseInt(process.env.RATE_LIMIT_FREE_TIER || "5");
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export function checkRateLimit(clientId: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const userLimit = requestCounts.get(clientId);

  if (!userLimit || now > userLimit.resetTime) {
    // Reset or initialize
    requestCounts.set(clientId, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return {
      allowed: true,
      remaining: FREE_TIER_LIMIT - 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
  }

  if (userLimit.count >= FREE_TIER_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: userLimit.resetTime,
    };
  }

  userLimit.count++;
  return {
    allowed: true,
    remaining: FREE_TIER_LIMIT - userLimit.count,
    resetTime: userLimit.resetTime,
  };
}
