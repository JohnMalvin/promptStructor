import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({
	apiKey: process.env.GEMINI_API_KEY!,
});

export function cleanJson(text: string) {
	return text
		.replace(/```json/g, "")
		.replace(/```/g, "")
		.replace(/,\s*}/g, "}")
		.replace(/,\s*]/g, "]")
		.trim();
}
