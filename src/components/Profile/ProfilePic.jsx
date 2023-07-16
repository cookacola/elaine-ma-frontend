import React from "react";
import Image from "next/image";

async function getProfilePic() {
	const res = await fetch(process.env.NEXT_PUBLIC_API + "/home?populate=deep", {
		cache: "no-store",
	});
	const homeJSON = await res.json();
	return homeJSON.data.attributes.HomeProfile.profilePicture.data.attributes;
}

async function ProfilePic() {
	const profilePic = await getProfilePic();
	return (
		<div className="relative flex items-center justify-center order-first w-1/2 p-4 md:order-last">
			<Image
				src={profilePic.url}
				alt={profilePic.alternativeText}
				width={profilePic.width}
				height={profilePic.height}
				className="object-cover w-full h-full"
			/>
		</div>
	);
}

export default ProfilePic;
