async function getHomeCarouselData() {
	const res = await fetch("http://127.0.0.1:1337/api/home-page?populate=deep", {
		next: { revalidate: 10 },
	});
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
}

async function FeaturedPosts() {
	const home = await getHomeCarouselData();
	const featuredPosts =
		home.data.attributes.homeArtworkScroller[0].featuredPosts.data;
	return featuredPosts.map((artwork) => ({
		id: artwork.id,
		title: artwork.attributes.title,
		description: artwork.attributes.description,
		slug: artwork.attributes.slug,
		medium: artwork.attributes.medium,
		year: artwork.attributes.year,
		objectDisplayFit: artwork.attributes.objectDisplayFit,
		images: artwork.attributes.artwork.data[0].attributes,
		url: artwork.attributes.artwork.data[0].attributes.url,
	}));
}

//returns an array of images based on featured posts
export default FeaturedPosts;
