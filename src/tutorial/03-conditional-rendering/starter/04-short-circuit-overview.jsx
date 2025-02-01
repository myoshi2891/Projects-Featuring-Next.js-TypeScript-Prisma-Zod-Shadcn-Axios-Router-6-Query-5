import { useState } from "react";

const ShortCircuitOverview = () => {
	const [text, setText] = useState("");
	const [name, setName] = useState("John");

	const codeExample = text || "hello world";
	return (
		<div>
			<h4>Falsy OR: {text || "hello world"}</h4>
			<h4>Falsy And: {text && "hello world"}</h4>
			<h4>Truthy OR: {name || "hello world"}</h4>
			<h4>Truthy And: {name && "hello world"}</h4>
			{codeExample}
		</div>
	);
};
export default ShortCircuitOverview;
