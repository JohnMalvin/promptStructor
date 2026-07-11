import ApiKeyGenerator from "@/components/api-key-button";
import { CodeBlock } from "@/components/code-block";

export default function ApiDocsPage() {
	return (
		<main className="mx-auto w-full max-w-5xl px-6 py-20">
			{/* Header */}
			<section className="mb-16">
				<p className="mb-3 font-mono text-sm text-accent">
					API DOCUMENTATION
				</p>

				<h1 className="text-4xl font-bold tracking-tight">
					Prompt Optimizer API
				</h1>

				<p className="mt-4 max-w-2xl text-foreground-muted">
					Optimize AI prompts automatically. Reduce token usage,
					improve clarity, and get better model recommendations with a
					single API request.
				</p>
			</section>

			{/* Authentication */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Authentication</h2>

				<div className="rounded-xl border border-border-default bg-surface p-6">
					<p className="mb-4 text-sm text-foreground-muted">
						Include your API key in every request.
					</p>

					<ApiKeyGenerator />
				</div>
			</section>

			{/* Endpoint */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Endpoint</h2>

				<div className="rounded-xl border border-border-default bg-surface p-6">
					<div className="flex items-center gap-3">
						<span className="rounded-md bg-success/20 px-3 py-1 font-mono text-xs text-success">
							POST
						</span>

						<code className="font-mono text-sm">
							/prompt-structor
						</code>
					</div>

					<p className="mt-4 text-sm text-foreground-muted">
						Receives an original prompt and returns an optimized,
						token-efficient version.
					</p>
				</div>
			</section>

			{/* Request */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Request</h2>

				<div className="space-y-4">
					<CodeBlock
						title="JavaScript"
						code={`const response = await fetch(
  "https://vercelllll/prompt-structor",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      prompt: "Build me a dashboard, i want background green color🦖"
    })
  }
);

const data = await response.json();

console.log(data);`}
					/>

					<CodeBlock
						title="React"
						code={`async function optimizePrompt(prompt) {
  const response = await fetch(
    "/api/optimize",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt
      })
    }
  );

  return response.json();
}


export default function App() {
  async function handleOptimize() {
    const result = await optimizePrompt(
      "Build me a dashboard, i want background green color🦖"
    );

    console.log(result.optimizedPrompt);
  }

  return (
    <button onClick={handleOptimize}>
      Optimize Prompt
    </button>
  );
}`}
					/>

					<CodeBlock
						title="curl"
						code={`curl https://vercelllll/prompt-structor \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "prompt": "Build me a dashboard, i want background green color🦖"
  }'`}
					/>
				</div>
			</section>

			{/* Response */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Response</h2>

				<CodeBlock
					title="json"
					code={`{
  "optimizedPrompt": "Create a responsive dashboard...",
  "reductionPercent": 52.2,
  "recommendedModel": "Claude 3.5 Sonnet",
  "originalTokens": 115,
  "reductionTokens": 60,
  "optimizedTokens": 55
}`}
				/>
			</section>

			{/* Parameters */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Parameters</h2>

				<div className="overflow-hidden rounded-xl border border-border-default">
					<table className="w-full text-left text-sm">
						<thead className="bg-surface">
							<tr>
								<th className="px-5 py-3 font-mono text-xs text-foreground-muted">
									Field
								</th>
								<th className="px-5 py-3 font-mono text-xs text-foreground-muted">
									Type
								</th>
								<th className="px-5 py-3 font-mono text-xs text-foreground-muted">
									Description
								</th>
							</tr>
						</thead>

						<tbody className="bg-surface-2">
							<tr>
								<td className="px-5 py-4 font-mono">prompt</td>
								<td className="px-5 py-4 text-accent">
									string
								</td>
								<td className="px-5 py-4 text-foreground-muted">
									The original AI prompt to optimize.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			{/* Errors */}
			<section className="mb-12">
				<h2 className="mb-4 text-xl font-semibold">Errors</h2>

				<div className="rounded-xl border border-border-default bg-surface">
					<div className="border-b border-border-subtle px-5 py-4">
						<span className="font-mono text-danger">400</span>
						<span className="ml-4 text-sm text-foreground-muted">
							Invalid request
						</span>
					</div>

					<div className="border-b border-border-subtle px-5 py-4">
						<span className="font-mono text-danger">401</span>
						<span className="ml-4 text-sm text-foreground-muted">
							Invalid API key
						</span>
					</div>

					<div className="px-5 py-4">
						<span className="font-mono text-danger">500</span>
						<span className="ml-4 text-sm text-foreground-muted">
							Server error
						</span>
					</div>
				</div>
			</section>

			{/* Support */}
			<section className="rounded-xl border border-border-default bg-surface-2 p-6">
				<h2 className="text-lg font-semibold">Support the project</h2>

				<p className="mt-2 max-w-xl text-sm text-foreground-muted">
					If this API helps you build faster, consider supporting
					development. Every contribution helps keep the project
					alive.
				</p>

				<a
					href="#"
					className="mt-5 inline-flex rounded-lg border border-border-strong px-4 py-2 font-mono text-sm text-accent transition hover:bg-surface"
				>
					Donate
				</a>
			</section>
		</main>
	);
}
