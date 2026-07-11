import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
}

export function GlassCard({
	className,
	active,
	children,
	...props
}: GlassCardProps) {
	return (
		<div
			className={cn(
				"rounded-2xl border bg-surface-glass backdrop-blur-xl transition-colors",
				active
					? "border-border-strong shadow-glow"
					: "border-border-subtle",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}
