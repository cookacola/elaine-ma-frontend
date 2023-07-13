import Image from "next/image";
import Link from "next/link";

async function getHomeAboutData() {
	const res = await fetch("http://127.0.0.1:1337/api/home-page?populate=deep", {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const home = await res.json();
	return {
		id: home.data.attributes.homeAboutMe.id,
		title: home.data.attributes.homeAboutMe.title,
		bio: home.data.attributes.homeAboutMe.bio,
		profilePic: home.data.attributes.homeAboutMe.profilePic.data,
	};
}

const About = async ({ isHome }) => {
	const aboutData = await getHomeAboutData();
	return (
		<div className="container relative flex flex-col px-8 py-4 mx-auto my-24 md:flex-row md:gap-10">
			<div className="flex flex-col justify-center bioSection">
				<h2 className="mb-4 text-2xl font-bold">{aboutData.title}</h2>
				<p className="mb-4 text-base font-normal text-gray-100">
					{aboutData.bio}
				</p>
				{isHome ? <Link href="/about">More</Link> : null}
			</div>
			<div className="relative flex items-center justify-center order-first p-4 md:order-last">
				<Image
					src={`http://127.0.0.1:1337${aboutData.profilePic.attributes.url}`}
					alt={`http://127.0.0.1:1337${aboutData.profilePic.attributes.name}`}
					layout="responsive"
					width={500} // Set this to your desired width
					height={300} // Set this to your desired height
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
