import { validateApiKey } from "@/lib/checkApi";
import { ai } from "@/lib/gemini";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// Get API key from header
		const authHeader = req.headers.get("Authorization");

		if (!authHeader) {
			return NextResponse.json(
				{ message: "Missing API key." },
				{ status: 401 },
			);
		}

		await connectDB();
		const valid = await validateApiKey(authHeader);

		if (!valid) {
			return NextResponse.json(
				{ message: "Invalid API key." },
				{ status: 401 },
			);
		}

		const { prompt } = await req.json();

		if (!prompt) {
			return NextResponse.json(
				{ message: "Prompt is required." },
				{ status: 400 },
			);
		}

		const optimizationPrompt = `
You are an expert AI prompt optimizer.

Your job:
- Analyze the user's original prompt.
- Rewrite it into a shorter, clearer, more effective prompt.
- Preserve the original intent.
- Remove unnecessary words.
- Improve structure and instructions.
- Estimate token savings.

Return ONLY valid JSON.

Required JSON format:

{
  "optimizedPrompt": "optimized version",
  "originalTokens": number,
  "reductionTokens": number,
  "optimizedTokens": number,
  "reductionPercent": number,
  "recommendedModel": "best AI model for this prompt"
}

Original user prompt:

"""
${prompt}
"""
`;

		const response = await ai.models.generateContent({
			model: "gemini-flash-latest",
			contents: optimizationPrompt,
			config: {
				responseMimeType: "application/json",
			},
		});

		if (!response.text) {
			return NextResponse.json(
				{ message: "AI returned an empty response." },
				{ status: 500 },
			);
		}

		const result = JSON.parse(response.text);

		return NextResponse.json(result, {
			status: 200,
		});
	} catch (error) {
		console.error("API ERROR:", error);

		return NextResponse.json(
			{
				message: "Something went wrong.",
				error: error instanceof Error ? error.message : String(error),
			},
			{ status: 500 },
		);
	}
}
