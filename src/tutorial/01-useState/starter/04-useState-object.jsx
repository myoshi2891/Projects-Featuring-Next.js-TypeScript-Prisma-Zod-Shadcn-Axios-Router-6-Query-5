import { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Peter',
		age: 23,
		hobby: 'read books',
	});
	// const [name, setName] = useState('peter');
	// const [age, setAge] = useState(24);
	// const [hobby, setHobby] = useState('read book');

	const displayPerson = () => {
		// setPerson({ name: 'John', age: 28, hobby: 'scream at the computer' });
		setPerson({ ...person, name: 'Susan' });
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h4>Enjoys : {person.hobby}</h4>
			<button className="btn" onClick={displayPerson}>
				show john
			</button>
		</>
	);
};

export default UseStateObject;
