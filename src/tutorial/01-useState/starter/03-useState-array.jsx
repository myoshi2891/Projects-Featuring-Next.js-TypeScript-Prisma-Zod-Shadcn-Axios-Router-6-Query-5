import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	const removeItem = id => {
		const newPeople = people.filter(person => person.id !== id);
		setPeople(newPeople);
	};
	const clearAllItem = () => setPeople([]);

	return (
		<div>
			{people.map(person => {
				const { id, name } = person;
				return (
					<div key={id}>
						<h4>{name}</h4>
						<button type="button" onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}
			<button
				type="button"
				style={{ marginTop: '2rem' }}
				className="btn"
				onClick={clearAllItem}
			>
				clear items
			</button>
		</div>
	);
};
export default UseStateArray;
