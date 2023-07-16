async function getFeaturedWorks() {
	const res = await fetch(process.env.NEXT_PUBLIC_API + "/home?populate=deep", {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
}

async function FeaturedWorks() {
	const home = await getFeaturedWorks();
	const featuredPosts = home.data.attributes.HomeSlideshow.works.data;
	return featuredPosts.map((artwork) => ({
		id: artwork.id,
		title: artwork.attributes.title,
		description: artwork.attributes.body,
		slug: artwork.attributes.slug,
		medium: artwork.attributes.medium,
		year: artwork.attributes.year,
		objectDisplayFit: artwork.attributes.objectDisplayFit,
		url: artwork.attributes.work.data.attributes.url,
	}));
}

//returns an array of images based on featured posts
export default FeaturedWorks;
