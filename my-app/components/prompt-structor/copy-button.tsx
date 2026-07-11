"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
	value: string;
	disabled?: boolean;
}

export function CopyButton({ value, disabled }: CopyButtonProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		if (!value) return;
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			setTimeout(() => setCopied(false), 1600);
		} catch {
			// Clipboard API can fail on insecure contexts / permissions — fail silently.
		}
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			disabled={disabled || !value}
			className={cn(
				"inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors",
				"border-border-default text-foreground-muted hover:border-border-hover hover:text-foreground",
				"disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border-default disabled:hover:text-foreground-muted cursor-pointer",
			)}
		>
			{copied ? <CheckIcon /> : <CopyIcon />}
			{copied ? "Copied" : "Copy"}
		</button>
	);
}

function CopyIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<rect
				x="9"
				y="9"
				width="12"
				height="12"
				rx="2"
				className="stroke-current"
				strokeWidth="1.8"
			/>
			<path
				d="M6 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2"
				className="stroke-current"
				strokeWidth="1.8"
			/>
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			className="text-success"
		>
			<path
				d="M5 13l4 4L19 7"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
