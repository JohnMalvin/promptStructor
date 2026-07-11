"use client";
import { useRouter } from "next/navigation";

export function Header() {
	const router = useRouter();

	return (
		<header className="sticky top-0 z-20 border-b border-border-subtle bg-bg-glass backdrop-blur-xl">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<div
					className="flex items-center gap-3 cursor-pointer"
					onClick={() => {
						router.push("/");
					}}
				>
					<LogoMark />
					<span className="font-display text-lg font-semibold tracking-tight text-foreground">
						PromptStructor
					</span>
				</div>
				<span className="flex gap-2">
					<span
						className="hidden rounded-full border border-border-default px-3 py-1 font-mono text-xs text-foreground-muted sm:block hover:bg-black/40 hover:font-bold cursor-pointer"
						onClick={() => {
							router.push("/apiDocs");
						}}
					>
						API Docs
					</span>
					<span
						className="hidden rounded-full border border-border-default px-3 py-1 font-mono text-xs text-foreground-muted sm:block hover:bg-black/40 hover:font-bold cursor-pointer"
						onClick={() => {
							router.push("/getExtension");
						}}
					>
						Get Extension
					</span>
				</span>
			</div>
		</header>
	);
}

function LogoMark() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			aria-hidden="true"
			className="shrink-0"
		>
			<rect width="28" height="28" rx="8" className="fill-surface-2" />
			<path
				d="M11 8.5 6.5 14l4.5 5.5"
				className="stroke-accent"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 8.5 21.5 14 17 19.5"
				className="stroke-accent-2"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
