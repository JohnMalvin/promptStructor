import { PromptOptimizerSection } from "@/components/prompt-optimizer-section";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<section className="ambient-glow mx-auto w-full max-w-6xl px-6 pb-14 pt-16 text-center sm:pt-24">
				<p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">
					for anyone paying per token
				</p>
				<h1 className="mx-auto mt-4 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
					Say more with less.
				</h1>
				<p className="mx-auto mt-4 max-w-xl text-balance text-sm text-foreground-muted sm:text-base">
					Paste your prompt! Get back the same instruction, stripped
					to the tokens that matter, ready to paste into any model.
				</p>
			</section>

			<PromptOptimizerSection />
		</main>
	);
}
