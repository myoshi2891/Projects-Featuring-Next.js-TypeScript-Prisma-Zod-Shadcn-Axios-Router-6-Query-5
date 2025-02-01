import { useState } from "react";

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		setUser({ name: "vegan food truck" });
	};
	const logout = () => {
		setUser(null);
	};

	return (
		<div>
			{user ? (
				<>
					<h4>hello there, {user.name}</h4>
					<button className="btn" onClick={logout}>
						logout
					</button>
				</>
			) : (
				<>
					<h4>please login</h4>
					<button className="btn" onClick={login}>
						login
					</button>
				</>
			)}
		</div>
	);
};
export default UserChallenge;
