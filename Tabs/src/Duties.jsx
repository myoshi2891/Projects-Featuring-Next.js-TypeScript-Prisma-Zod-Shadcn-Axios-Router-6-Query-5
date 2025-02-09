import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function Duties({ duties }) {
	const id = uuidv4();

	return (
		<div>
			{duties.map((duty, index) => {
				return (
					<div key={id} className="job-desc">
						<FaAngleDoubleRight className="job-icon" />
						<p>{duty}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Duties;
