import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getClientId(request: Request): string {
  // Use IP address or a cookie-based identifier
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor
    ? forwardedFor.split(",")[0]
    : request.headers.get("x-real-ip") || "unknown";

  return ip;
}
