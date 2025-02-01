import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState(null);

	const fetchUser = async () => {
		try {
			const resp = await fetch(url);
			if (!resp.ok) {
				setIsError(true);
				setIsLoading(false);
				return;
			}
			const data = await resp.json();
			setUser(data);
		} catch (error) {
			setIsError(true);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUser();
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>Error fetching data.</h2>;
	}

	const { avatar_url, name, company, bio } = user;

	return (
		<div>
			<img
				src={avatar_url}
				alt={name}
				style={{ width: "150px", borderRadius: "25px" }}
			/>
			<h2>{name}</h2>
		</div>
	);
};
export default MultipleReturnsFetchData;
