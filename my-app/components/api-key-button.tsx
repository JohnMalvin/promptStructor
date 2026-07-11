"use client";

import { useState } from "react";

export default function ApiKeyGenerator() {
	const [apiKey, setApiKey] = useState("");
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);
	const [error, setError] = useState("");

	async function generateApiKey() {
		try {
			setLoading(true);
			setError("");

			const res = await fetch("/api/create-api-key", {
				method: "GET",
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || data.error);
			}

			setApiKey(data.apiKey);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	async function copyApiKey() {
		await navigator.clipboard.writeText(apiKey);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	return (
		<div className="space-y-4">
			{!apiKey ? (
				<button
					onClick={generateApiKey}
					disabled={loading}
					className="rounded-lg border border-border-strong px-4 py-2 font-mono text-sm text-accent transition hover:bg-surface disabled:opacity-50"
				>
					{loading ? "Generating..." : "Generate API Key"}
				</button>
			) : (
				<div className="space-y-3">
					<div className="flex gap-2">
						<input
							value={apiKey}
							readOnly
							className="w-full rounded-lg border border-border-default bg-surface px-4 py-2 font-mono text-sm text-foreground outline-none"
						/>

						<button
							onClick={copyApiKey}
							className="rounded-lg border border-border-strong px-4 py-2 font-mono text-sm text-accent transition hover:bg-surface"
						>
							{copied ? "Copied!" : "Copy"}
						</button>
					</div>

					<p className="text-sm text-danger">
						Save this key now. You will not be able to see it again.
					</p>
				</div>
			)}

			{error && <p className="text-sm text-danger">{error}</p>}
		</div>
	);
}
