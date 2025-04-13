import db from "@/utils/db";

async function AboutPage() {
	const profile = await db.testProfile.create({
		data: {
			name: "John Doe",
		},
	});

	const users = await db.testProfile.findMany();

	return (
		<div>
			{users.map((user) => {
				return <p key={user.id}>{user.name}</p>;
			})}
		</div>
	);
}

export default AboutPage;
