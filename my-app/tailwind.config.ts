import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./hooks/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				surface: "var(--surface)",
				"surface-2": "var(--surface-2)",
				"surface-glass": "var(--surface-glass)",
				"surface-2-glass": "var(--surface-2-glass)",
				"bg-glass": "var(--bg-glass)",

				accent: "var(--cyan)",
				"accent-2": "var(--sky)",
				"accent-soft": "var(--cyan-soft)",

				foreground: "var(--foreground)",
				"foreground-muted": "var(--foreground-muted)",
				"foreground-subtle": "var(--foreground-subtle)",

				success: "var(--success)",
				danger: "var(--danger)",

				"border-subtle": "var(--border-subtle)",
				"border-default": "var(--border-default)",
				"border-dashed": "var(--border-dashed)",
				"border-strong": "var(--border-strong)",
				"border-hover": "var(--border-hover)",
			},
			fontFamily: {
				display: ["var(--font-display)"],
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
			boxShadow: {
				glow: "0 0 0 1px var(--border-strong), 0 8px 40px -12px var(--glow)",
			},
		},
	},
	plugins: [],
};

export default config;
