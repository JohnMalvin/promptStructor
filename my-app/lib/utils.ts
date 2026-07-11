export function cn(
	...classes: Array<string | false | null | undefined>
): string {
	return classes.filter(Boolean).join(" ");
}

export function estimateTokens(text: string): number {
	const trimmed = text.trim();
	if (!trimmed) return 0;
	return Math.max(1, Math.ceil(trimmed.length / 4));
}
