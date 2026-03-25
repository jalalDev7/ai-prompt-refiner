import { NextRequest, NextResponse } from "next/server";
import { refineImagePrompt } from "@/lib/openai";
import { checkRateLimit } from "@/lib/rate-limit";
import { getClientId } from "@/lib/utils";
import { z } from "zod";

const requestSchema = z.object({
  text: z.string().min(1).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientId = getClientId(request);
    const rateLimit = checkRateLimit(clientId);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: `You've exceeded the free tier limit. Please try again in ${Math.ceil((rateLimit.resetTime - Date.now()) / 1000)} seconds.`,
          remaining: 0,
          resetTime: rateLimit.resetTime,
        },
        { status: 429 },
      );
    }

    // Validate request
    const body = await request.json();
    const { text } = requestSchema.parse(body);

    // Refine image prompt
    const refined = await refineImagePrompt(text);

    return NextResponse.json(
      {
        original: text,
        refined,
        remaining: rateLimit.remaining,
        message: "Image prompt refined successfully",
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error("Error refining image prompt:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation error",
          message: error.issues[0]?.message || "Invalid request",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error
            ? error.message
            : "An error occurred while refining the image prompt",
      },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
