"use client";

import { useState } from "react";

interface CodeBlockProps {
	title: string;
	code: string;
}

export function CodeBlock({ title, code }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	async function handleCopy() {
		await navigator.clipboard.writeText(code);

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1500);
	}

	return (
		<div className="overflow-hidden rounded-xl border border-border-default bg-surface">
			{/* Header */}
			<div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
				<span className="font-mono text-xs text-foreground-muted">
					{title}
				</span>

				<button
					type="button"
					onClick={handleCopy}
					className="cursor-pointer font-mono text-xs text-accent transition-colors hover:text-accent-soft"
				>
					{copied ? "Copied" : "Copy"}
				</button>
			</div>

			{/* Code */}
			<pre className="token-scroll max-h-[500px] overflow-auto p-5 text-sm leading-6 text-foreground">
				<code>{code}</code>
			</pre>
		</div>
	);
}
