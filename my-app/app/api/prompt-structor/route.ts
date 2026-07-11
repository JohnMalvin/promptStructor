import { getCurrentUser } from "@/lib/auth";
import { validateApiKey } from "@/lib/checkApi";
import { ai } from "@/lib/gemini";
import { NextResponse } from "next/server";

// expected output format
// {
//   "optimizedPrompt": "the shortened, token-lean version of the prompt",
//   "reductionPercent": 42,
//   "recommendedModel": "GPT-4o mini"
//	 "originalTokenEstimate": 80,
//	 "reductionTokenEstimate": 30,
//	 "optimizedTokenEstimate": 50
// }

export async function POST(req: Request) {
	try {
		const { prompt } = await req.json();

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
			"recommendedModel": "best AI model for this prompt",
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
		console.log("=========================");
		console.log(result);
		console.log("=========================");

		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.log(error);

		return NextResponse.json(
			{ message: "Something went wrong." },
			{ status: 500 },
		);
	}
}
