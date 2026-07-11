import ReactDOM from "react-dom/client";
import FloatingUI from "./FloatingUI";

const container = document.createElement("div");
container.id = "prompt-optimizer-root";
document.documentElement.appendChild(container);

const root = ReactDOM.createRoot(container);
root.render(<FloatingUI />);

function isTarget(el: EventTarget | null): el is HTMLElement {
	if (!(el instanceof HTMLElement)) return false;

	return (
		el.tagName === "TEXTAREA" ||
		el.isContentEditable ||
		(el.tagName === "INPUT" && (el as HTMLInputElement).type === "text")
	);
}

function getText(el: HTMLElement) {
	if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
		return el.value;
	}

	return el.innerText;
}

let activeElement: HTMLElement | null = null;

function updatePanel(el: HTMLElement) {
	const rect = el.getBoundingClientRect();

	window.dispatchEvent(
		new CustomEvent("show-floating", {
			detail: {
				x: rect.right + 10,
				y: rect.top,
				text: getText(el),
			},
		}),
	);
}

document.addEventListener("focusin", (event) => {
	if (!isTarget(event.target)) return;

	activeElement = event.target;
	updatePanel(activeElement);
});

document.addEventListener("input", (event) => {
	if (!activeElement) return;
	if (event.target !== activeElement) return;

	updatePanel(activeElement);
});

document.addEventListener("focusout", (event) => {
	if (!isTarget(event.target)) return;

	activeElement = null;
	window.dispatchEvent(new Event("hide-floating"));
});
