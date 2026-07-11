export interface OptimizationStats {
	originalTokens: number;
	optimizedTokens: number;
	reductionTokens: number;
	reductionPercent: number;
	recommendedModel: string;
}

export interface OptimizeResult {
	optimizedPrompt: string;
	stats: OptimizationStats;
}
