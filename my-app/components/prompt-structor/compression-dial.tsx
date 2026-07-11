"use client";

import { cn } from "@/lib/utils";

interface CompressionDialProps {
	reductionPercent: number | null;
	loading: boolean;
	disabled: boolean;
	onOptimize: () => void;
}

const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CompressionDial({
	reductionPercent,
	loading,
	disabled,
	onOptimize,
}: CompressionDialProps) {
	const progress = reductionPercent ?? 0;
	const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

	return (
		<div className="flex justify-center items-center gap-3 py-1 lg:flex-col lg:justify-center lg:gap-0 lg:py-0 self-center">
			<span className="hidden flex-1 border-t border-dashed border-border-dashed lg:block" />

			<button
				type="button"
				onClick={onOptimize}
				disabled={disabled || loading}
				aria-label="Optimize prompt"
				className={cn(
					"group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full",
					"border border-border-default bg-surface-2-glass backdrop-blur-xl transition-all",
					"hover:border-border-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border-default cursor-pointer self-center",
					!disabled && "shadow-glow",
				)}
			>
				<svg
					width="96"
					height="96"
					viewBox="0 0 96 96"
					className="absolute inset-0 -rotate-90"
				>
					<circle
						cx="48"
						cy="48"
						r={RADIUS}
						strokeWidth="4"
						className="fill-none stroke-border-subtle"
					/>
					<circle
						cx="48"
						cy="48"
						r={RADIUS}
						strokeWidth="4"
						strokeLinecap="round"
						className="fill-none stroke-accent transition-[stroke-dashoffset] duration-700 ease-out"
						style={{
							strokeDasharray: CIRCUMFERENCE,
							strokeDashoffset: dashOffset,
						}}
					/>
				</svg>

				<span className="relative flex flex-col items-center gap-0.5">
					{loading ? (
						<span className="h-4 w-4 animate-spin rounded-full border-2 border-border-default border-t-accent" />
					) : reductionPercent !== null ? (
						<>
							<span className="font-display text-xl font-semibold text-foreground">
								-{reductionPercent}%
							</span>
							<span className="font-mono text-[9px] uppercase tracking-wider text-foreground-muted">
								tokens
							</span>
						</>
					) : (
						<>
							<CompressIcon />
							<span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted group-disabled:opacity-60">
								Optimize
							</span>
						</>
					)}
				</span>
			</button>

			<span className="hidden flex-1 border-t border-dashed border-border-dashed lg:block" />
		</div>
	);
}

function CompressIcon() {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			className="text-accent rotate-90 lg:rotate-0"
		>
			<path
				d="M8 5 4 9l4 4M16 5l4 4-4 4M4 9h16"
				className="stroke-current"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
