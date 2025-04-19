import { LuUser } from "react-icons/lu";
import {
	currentUser,
	// , auth
} from "@clerk/nextjs/server";
import Image from "next/image";
async function UserIcon() {
	// const { userId } = auth();
	const user = await currentUser();
	const profileImage = user?.imageUrl;

	if (profileImage) {
		return (
			<img
				className="rounded-full object-cover"
				width={24}
				height={24}
				src={profileImage}
				alt="User"
			/>
		);
	}

	return <LuUser className="h-6 w-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
