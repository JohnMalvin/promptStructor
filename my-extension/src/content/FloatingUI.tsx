import { useEffect, useState } from "react";
import "./index.css";

type FloatingEvent = {
	text: string;
};

export default function FloatingUI() {
	const [visible, setVisible] = useState(false);
	const [text, setText] = useState("");

	useEffect(() => {
		const show = (event: Event) => {
			const { text } = (event as CustomEvent<FloatingEvent>).detail;

			setText(text);
			setVisible(true);
		};

		const hide = () => setVisible(false);

		window.addEventListener("show-floating", show);
		window.addEventListener("hide-floating", hide);

		return () => {
			window.removeEventListener("show-floating", show);
			window.removeEventListener("hide-floating", hide);
		};
	}, []);

	if (!visible) return null;

	return (
		<div className="floating-ui">
			<h3>Current text</h3>
			<pre>{text}</pre>
		</div>
	);
}
