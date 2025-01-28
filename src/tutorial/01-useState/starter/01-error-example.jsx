import { useState } from 'react';

const ErrorExample = () => {
	let [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count++);
	};

	return (
		<div>
			<h2>{count}</h2>
			<button type="button" onClick={handleClick}>
				increase
			</button>
		</div>
	);
};

export default ErrorExample;
