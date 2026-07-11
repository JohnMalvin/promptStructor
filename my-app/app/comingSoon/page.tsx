import Link from "next/link";

export default function ComingSoonPage() {
	return (
		<main className="flex min-h-screen items-center justify-center px-6">
			<div className="w-full max-w-xl rounded-2xl border border-border-default bg-surface p-10 text-center shadow-glow">
				<p className="font-mono text-sm tracking-widest text-accent">
					COMING SOON
				</p>

				<h1 className="mt-4 text-4xl font-bold tracking-tight">
					This page isn't ready yet.
				</h1>

				<p className="mt-5 leading-7 text-foreground-muted">
					I'm still building this part of the website. It'll be
					available soon, so check back later!
				</p>

				<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-surface transition hover:opacity-90"
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}
