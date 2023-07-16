import React from "react";
import Link from "next/link";

async function getProfileBio() {
	const res = await fetch(process.env.NEXT_PUBLIC_API + "/home?populate=deep", {
		next: { revalidate: 60 },
	});
	const homeJSON = await res.json();
	return homeJSON.data.attributes.HomeProfile;
}

async function ProfileBio({ isHome }) {
	const profile = await getProfileBio();
	return (
		<div className="flex flex-col justify-center w-1/2 bioSection">
			<h2 className="mb-4 text-2xl font-bold">{profile.profileTitle}</h2>
			<p className="mb-4 text-base font-normal text-gray-100">
				{profile.profileDescription}
			</p>
			{isHome ? <Link href="/about">More</Link> : null}
		</div>
	);
}

export default ProfileBio;
