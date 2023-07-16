import Image from "next/image";
import Link from "next/link";

async function getHomeAboutData() {
	const res = await fetch(process.env.NEXT_PUBLIC_API + "/home?populate=deep", {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const home = await res.json();
	return {
		id: home.data.attributes.HomeProfile.id,
		title: home.data.attributes.HomeProfile.profileTitle,
		bio: home.data.attributes.HomeProfile.profileDescription,
		profilePic: home.data.attributes.HomeProfile.profilePicture.data.attributes,
	};
}

const About = async ({ isHome }) => {
	const aboutData = await getHomeAboutData();
	return (
		<div className="container relative flex flex-col items-center justify-center px-8 py-4 mx-auto my-24 md:flex-row md:gap-10">
			<div className="flex flex-col justify-center w-1/2 bioSection">
				<h2 className="mb-4 text-2xl font-bold">{aboutData.title}</h2>
				<p className="mb-4 text-base font-normal text-gray-100">
					{aboutData.bio}
				</p>
				{isHome ? <Link href="/about">More</Link> : null}
			</div>
			<div className="relative flex items-center justify-center order-first w-1/2 p-4 md:order-last">
				<Image
					src={aboutData.profilePic.url}
					alt={aboutData.profilePic.name}
					width={aboutData.profilePic.width}
					height={aboutData.profilePic.height}
					className="object-cover w-full h-full"
				/>
			</div>
		</div>
	);
};

export default About;

// import Image from "next/image";

// const About = async () => {
// 	const aboutData = await getHomeAboutData();
// 	return (
// 		<div className="container relative grid grid-cols-1 px-4 py-4 mx-auto my-24 md:px-10 md:grid-cols-2">
// 			<div className="flex flex-col justify-center bioSection">
// 				<h2 className="mb-4 text-2xl font-bold">{aboutData.title}</h2>
// 				<p className="mb-4 text-base font-normal text-gray-100">
// 					{aboutData.bio}
// 				</p>
// 			</div>
// 			<div className="relative flex justify-center w-3/5 min-h-screen mb-4 -order-1 md:order-2 md:min-h-screen">
// 				<Image
// 					src={`http://127.0.0.1:1337${aboutData.profilePic.attributes.url}`}
// 					alt={`http://127.0.0.1:1337${aboutData.profilePic.attributes.name}`}
// 					fill={true}
// 					style={{ objectFit: "contain" }}
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default About;
