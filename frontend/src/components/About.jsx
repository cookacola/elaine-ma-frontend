import Image from "next/image";

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

const About = async () => {
	const aboutData = await getHomeAboutData();
	return (
		<div className="container my-24 mx-auto px-4 md:px-10 py-4 relative grid grid-cols-1 md:grid-cols-2">
			<div className="bioSection flex flex-col justify-center">
				<h2 className="font-bold text-2xl mb-4">{aboutData.title}</h2>
				<p className="font-normal text-base mb-4 text-gray-100">
					{aboutData.bio}
				</p>
			</div>
			<div className="flex relative justify-center -order-1 md:order-2 mb-4 md:min-h-screen">
				<Image
					src={`http://127.0.0.1:1337${aboutData.profilePic.attributes.url}`}
					alt={`http://127.0.0.1:1337${aboutData.profilePic.attributes.name}`}
					fill={true}
					style={{ objectFit: "contain" }}
				/>
			</div>
		</div>
	);
};

export default About;
