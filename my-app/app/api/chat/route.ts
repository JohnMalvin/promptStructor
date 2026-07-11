import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();

		const prompt = messages
			.map(
				(m: { role: string; content: string }) =>
					`${m.role}: ${m.content}`,
			)
			.join("\n");

		const response = await ai.models.generateContent({
			model: "gemini-flash-latest",
			contents: prompt,
		});

		return NextResponse.json({
			message: response.text,
		});
	} catch (err: any) {
		console.error(err);

		return NextResponse.json(
			{
				error: err.message,
				details: err,
			},
			{ status: 500 },
		);
	}
}
