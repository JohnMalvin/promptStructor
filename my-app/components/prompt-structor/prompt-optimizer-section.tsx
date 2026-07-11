"use client";

import { usePromptOptimizer } from "@/hooks/use-prompt-optimizer";
import { PromptPanel } from "./prompt-panel";
import { CompressionDial } from "./compression-dial";
import { StatsBar } from "./stats-bar";
import { CopyButton } from "./copy-button";

export function PromptOptimizerSection() {
	const { input, output, loading, error, stats, setInput, optimize, reset } =
		usePromptOptimizer();

	return (
		<section className="mx-auto w-full max-w-6xl px-6 pb-24">
			<div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-3">
				{/* <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-3"> */}
				<PromptPanel
					eyebrow="Input"
					label="Your prompt"
					value={input}
					onChange={setInput}
					placeholder="Paste your prompt here — instructions, context, examples, anything you'd normally send to a model."
					charCount={input.length}
					actions={
						<button
							type="button"
							onClick={reset}
							disabled={!input && !output}
							className="cursor-pointer font-mono text-[11px] text-foreground-muted underline-offset-2 transition-colors hover:text-foreground hover:underline disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:no-underline"
						>
							Clear
						</button>
					}
				/>

				<CompressionDial
					reductionPercent={stats?.reductionPercent ?? null}
					loading={loading}
					disabled={!input.trim()}
					onOptimize={optimize}
				/>

				<PromptPanel
					eyebrow="Output"
					label="Optimized prompt"
					value={output}
					readOnly
					loading={loading}
					placeholder="Your optimized, token-lean prompt will appear here."
					charCount={output.length}
					actions={<CopyButton value={output} disabled={loading} />}
				/>
			</div>

			{error && (
				<p
					role="alert"
					className="mt-4 text-center font-mono text-xs text-danger"
				>
					{error}
				</p>
			)}

			<div className="mt-4">
				<StatsBar stats={stats} loading={loading} />
			</div>
		</section>
	);
}
