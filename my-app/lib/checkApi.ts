import crypto from "crypto";
import ApiKey from "@/models/ApiKey";

export async function validateApiKey(apiKey: string): Promise<boolean> {
	if (!apiKey) return false;

	const key = apiKey.startsWith("Bearer ") ? apiKey.slice(7) : apiKey;

	const hash = crypto.createHash("sha256").update(key).digest("hex");

	const exists = await ApiKey.exists({
		keyHash: hash,
		revoked: false,
	});

	return !!exists;
}

export async function createNewApiKey(name = "Default"): Promise<string> {
	// Raw key shown to the user once
	const apiKey = `sk_${crypto.randomBytes(32).toString("hex")}`;

	// Hash stored in DB
	const keyHash = crypto.createHash("sha256").update(apiKey).digest("hex");

	await ApiKey.create({
		keyHash,
	});

	return apiKey;
}
