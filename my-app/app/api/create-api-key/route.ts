import { NextResponse } from "next/server";
import { createNewApiKey } from "@/lib/checkApi";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
	try {
		await connectDB();
		const apiKey = await createNewApiKey();

		return NextResponse.json({ apiKey }, { status: 200 });
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
