import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-space-grotesk",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-inter",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PromptStructor — Optimize prompts, cut token cost",
	description:
		"Paste a prompt and get back the same instruction in fewer tokens, ready to paste into any model.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
		>
			<body className="min-h-screen antialiased">
				<Header />
				{children}
			</body>
		</html>
	);
}
