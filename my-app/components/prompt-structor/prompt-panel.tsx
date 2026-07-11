import type { ReactNode } from "react";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

interface PromptPanelProps {
	label: string;
	eyebrow: string;
	value: string;
	placeholder?: string;
	onChange?: (value: string) => void;
	readOnly?: boolean;
	loading?: boolean;
	charCount: number;
	actions?: ReactNode;
}

export function PromptPanel({
	label,
	eyebrow,
	value,
	placeholder,
	onChange,
	readOnly,
	loading,
	charCount,
	actions,
}: PromptPanelProps) {
	return (
		<GlassCard
			active={!readOnly && value.length > 0}
			className="flex h-full flex-col p-5"
		>
			<div className="mb-3 flex items-center justify-between gap-3">
				<div>
					<p className="font-mono text-[11px] uppercase tracking-widest text-accent-soft">
						{eyebrow}
					</p>
					<h2 className="font-display text-sm font-medium text-foreground">
						{label}
					</h2>
				</div>
				{actions}
			</div>

			<div className="relative flex-1">
				{loading ? (
					<div className="space-y-2.5 pt-1">
						<div className="skeleton-shimmer h-3.5 w-[92%] rounded" />
						<div className="skeleton-shimmer h-3.5 w-[78%] rounded" />
						<div className="skeleton-shimmer h-3.5 w-[85%] rounded" />
						<div className="skeleton-shimmer h-3.5 w-[60%] rounded" />
					</div>
				) : (
					<textarea
						value={value}
						onChange={
							onChange
								? (e) => onChange(e.target.value)
								: undefined
						}
						readOnly={readOnly}
						placeholder={placeholder}
						spellCheck={false}
						className={cn(
							"token-scroll h-full min-h-[220px] w-full resize-none bg-transparent font-mono text-sm leading-relaxed text-foreground",
							"placeholder:text-foreground-subtle focus:outline-none",
							readOnly && "cursor-default",
						)}
					/>
				)}
			</div>

			<div className="mt-3 flex items-center justify-between border-t border-border-subtle pt-3 font-mono text-[11px] text-foreground-muted">
				<span>{charCount.toLocaleString()} chars</span>
			</div>
		</GlassCard>
	);
}
