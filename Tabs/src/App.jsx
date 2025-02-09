import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	// currentItem

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading"></div>
			</section>
		);
	}

	return (
		<section className="jobs-center">
			{/* button container */}
			<ButtonContainer jobs={jobs} />
			{/* job info */}
			<JobInfo jobs={jobs} />
		</section>
	);
};
export default App;
