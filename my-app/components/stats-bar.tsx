import { GlassCard } from "./glass-card";
import type { OptimizationStats } from "@/lib/types";

interface StatsBarProps {
	stats: OptimizationStats | null;
	loading: boolean;
}

export function StatsBar({ stats, loading }: StatsBarProps) {
	if (!stats && !loading) return null;

	return (
		<GlassCard className="grid grid-cols-4 divide-x divide-border-subtle p-0">
			<Stat
				label="Original"
				value={loading ? undefined : stats?.originalTokens}
				suffix="tokens"
			/>
			<Stat
				label="Optimized"
				value={loading ? undefined : stats?.optimizedTokens}
				suffix="tokens"
				accent
			/>
			<Stat
				label="Reduction"
				value={loading ? undefined : stats?.reductionPercent}
				suffix="%"
				success
			/>
			<Stat
				label="Recommended Model"
				value={loading ? undefined : stats?.recommendedModel}
				suffix=""
			/>
		</GlassCard>
	);
}

interface StatProps {
	label: string;
	value?: number | string;
	suffix: string;
	accent?: boolean;
	success?: boolean;
}

function Stat({ label, value, suffix, accent, success }: StatProps) {
	return (
		<div className="flex flex-col items-center gap-1 px-4 py-4 text-center">
			<span className="font-mono text-[11px] uppercase tracking-widest text-foreground-muted">
				{label}
			</span>
			{value === undefined ? (
				<span className="skeleton-shimmer h-6 w-14 rounded" />
			) : (
				<span
					className={
						"font-display text-xl font-semibold " +
						(success
							? "text-success"
							: accent
								? "text-accent"
								: "text-foreground")
					}
				>
					{suffix === "%"
						? `-${value}${suffix}`
						: typeof value === "number"
							? `${value.toLocaleString()} ${suffix}`
							: `${value}${suffix ? ` ${suffix}` : ""}`}
				</span>
			)}
		</div>
	);
}
