"use client";

import { useState, useRef } from "react";

const IOBOX = "rounded-md bg-translator-card m-5 p-5 w-[30vw] h-[25vh] inset-shadow-sm inset-shadow-sky-400";

export default function MainPage() {
	const userInput = useRef<HTMLTextAreaElement>(null);
	const [output, setOutput] = useState("BAPAK LO");

	function apiCall() {
		if (userInput.current) {
			userInput.current.focus();
			setOutput(userInput.current.value);
		}
	}
	return (
		<div className="flex flex-col">
			<div>
				<p>BAPAK LO DURABLE</p> {/* This is for random pun before we get into the translator*/}
			</div>

			<div className="flex flex-row items-center justify-center">
				<div className={IOBOX}>
					<textarea
						placeholder="Your Prompt" className="resize-none outline-0 w-[25vw] h-[20vh]"
						ref={userInput}
					/>
				</div>

				<div>
					<button onClick={apiCall} className="rounded-3xl border-none bg-button p-5">
						Translate Now!
					</button>
				</div>

				<div className={IOBOX}>
					<p>{output}</p>
				</div>
			</div>
		</div>
	);
}
