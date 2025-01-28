import { useState } from 'react';

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		// setValue((currentState) => {
		//   const newState = currentState + 1;
		//   return newState;
		// });
		setTimeout(() => {
			setValue(currentState => {
				return currentState + 1;
			});
			console.log('after setTimeout', value);
		}, 3000);
	};

	return (
		<div>
			<h1>{value}</h1>
			<button onClick={handleClick} type="button" className="btn">
				Increment
			</button>
		</div>
	);
};

export default UseStateGotcha;
