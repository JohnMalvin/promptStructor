"use client";

import { useCallback, useState } from "react";
import type { OptimizationStats } from "@/lib/types";

interface OptimizeApiResponse {
	optimizedPrompt: string;
	reductionPercent: number;
	recommendedModel: string;
	originalTokens: number;
	reductionTokens: number;
	optimizedTokens: number;
}

async function requestOptimizedPrompt(
	prompt: string,
): Promise<OptimizeApiResponse> {
	const res = await fetch("/api/prompt-structor", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ prompt }),
	});

	if (!res.ok) {
		throw new Error(`prompt-structor request failed: ${res.status}`);
	}

	return res.json();
}

interface UsePromptOptimizerResult {
	input: string;
	output: string;
	loading: boolean;
	error: string | null;
	stats: OptimizationStats | null;
	setInput: (value: string) => void;
	optimize: () => Promise<void>;
	reset: () => void;
}

export function usePromptOptimizer(): UsePromptOptimizerResult {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [stats, setStats] = useState<OptimizationStats | null>(null);

	const optimize = useCallback(async () => {
		const trimmed = input.trim();

		if (!trimmed) return;

		setLoading(true);
		setError(null);

		try {
			const data = await requestOptimizedPrompt(trimmed);

			setOutput(data.optimizedPrompt);

			setStats({
				originalTokens: data.originalTokens,
				optimizedTokens: data.optimizedTokens,
				reductionTokens: data.reductionTokens,
				reductionPercent: Math.round(data.reductionPercent),
				recommendedModel: data.recommendedModel,
			});
		} catch {
			setError("Couldn't optimize that prompt. Try again.");
		} finally {
			setLoading(false);
		}
	}, [input]);

	const reset = useCallback(() => {
		setInput("");
		setOutput("");
		setStats(null);
		setError(null);
	}, []);

	return {
		input,
		output,
		loading,
		error,
		stats,
		setInput,
		optimize,
		reset,
	};
}
