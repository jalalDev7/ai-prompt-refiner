export interface PromptRefinerRequest {
  originalText: string;
  type: "prompt" | "image" | "code";
}

export interface PromptRefinerResponse {
  original: string;
  refined: string;
  suggestions?: string[];
  improvements?: string[];
}

export interface ApiError {
  error: string;
  message: string;
  status: number;
}

export interface RateLimitInfo {
  limit: number;
  current: number;
  remaining: number;
  resetTime: number;
}
