import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const refineTextPrompt = async (text: string): Promise<string> => {
  const message = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an expert at refining text prompts to be more clear, specific, and effective. Keep responses focused and remove ambiguity. Return only the refined prompt without any explanation.",
      },
      {
        role: "user",
        content: `Original text: "${text}"\n\nPlease refine this text into a clear, concise prompt that will get better AI responses.`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  const content = message.choices[0]?.message?.content;
  if (content) {
    return content.trim();
  }
  throw new Error("Unexpected response format from API");
};

export const refineImagePrompt = async (text: string): Promise<string> => {
  const message = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an expert at creating detailed image generation prompts for AI image models like DALL-E, Midjourney, or Stable Diffusion. Return only the refined image prompt without any explanation.",
      },
      {
        role: "user",
        content: `Original description: "${text}"\n\nTransform this into a detailed, visual image generation prompt that includes:\n- Main subject and composition\n- Style and artistic direction\n- Lighting and mood\n- Technical details (resolution suggestions, aspect ratio hints)\n- Quality indicators`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  const content = message.choices[0]?.message?.content;
  if (content) {
    return content.trim();
  }
  throw new Error("Unexpected response format from API");
};

export const refineCodePrompt = async (text: string): Promise<string> => {
  const message = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an expert at creating precise code generation prompts for AI coding assistants. Return only the refined code prompt without any explanation.",
      },
      {
        role: "user",
        content: `Original request: "${text}"\n\nTransform this into a detailed code generation prompt that includes:\n- Clear problem statement\n- Expected input/output format\n- Specific technology stack or language preferences\n- Any special requirements or constraints\n- Code style preferences`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  const content = message.choices[0]?.message?.content;
  if (content) {
    return content.trim();
  }
  throw new Error("Unexpected response format from API");
};
