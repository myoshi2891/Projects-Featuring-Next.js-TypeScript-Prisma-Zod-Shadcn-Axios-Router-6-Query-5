import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";

const Items = () => {
	const { isLoading, data, isError } = useFetchTasks();

	if (!data) {
		return null;
	}

	if (isLoading) {
		return <p style={{ marginTop: "1rem" }}>Loading...</p>;
	}

	if (isError) {
		return <div style={{ marginTop: "1rem" }}>There was an error...</div>;
	}

	// if (error) {
	// 	return <div style={{ marginTop: "1rem" }}>{error.response.data}</div>;
	// }

	return (
		<div className="items">
			{data.taskList.map((item) => {
				return <SingleItem key={item.id} item={item} />;
			})}
		</div>
	);
};
export default Items;
