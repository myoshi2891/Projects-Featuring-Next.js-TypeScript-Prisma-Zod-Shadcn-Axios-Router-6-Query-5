import { useState } from "react";

type Link = {
	id: number;
	url: string;
	text: string;
};

const navLinks: Link[] = [
	{
		id: 1,
		url: "some  url",
		text: "some text",
	},
	{
		id: 2,
		url: "some  url",
		text: "some text",
	},
	{
		id: 3,
		url: "some  url",
		text: "some text",
	},
];

function Component() {
	const [text, setText] = useState("test");
	const [number, setNumber] = useState(1);
	const [list, setList] = useState<string[]>([]);
	const [links, setLinks] = useState<Link[]>(navLinks);

	return (
		<div>
			<h2 className="mb-1">React & Typescript</h2>
			<button
				className="btn btn-center"
				onClick={() => {
					// setText(1)
					setNumber(1);
					// setList([1,3])
					setLinks([
						...links,
						{ id: 4, url: "hello", text: "world" },
					]);
				}}
			>
				click me
			</button>
		</div>
	);
}
export default Component;
