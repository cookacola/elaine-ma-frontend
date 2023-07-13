import ArtCard from "@/components/ArtCard";
import React from "react";

async function getGalleryData() {
	const res = await fetch(
		"http://127.0.0.1:1337/api/gallery-page?populate=deep",
		{
			next: { revalidate: 10 },
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
}

export default async function Gallery() {
	const gallery = await getGalleryData();
	const sections = gallery.data.attributes.gallerySection;
	return (
		<section>
			{sections.map((section) => (
				<article key={section.id} className="mb-10">
					<h1 className="text-center text-2xl my-6">{section.title}</h1>
					<div className="w-full columns-2 md:columns-3 gap-12">
						{section.posts.data.map((piece) => (
							<ArtCard piece={piece} key={piece.id} />
						))}
					</div>
				</article>
			))}
		</section>
	);
	// return {sections.map((section) => {
	// 	<div>
	// 		<h1 className="text-center text-2xl my-6">{section.title}</h1>
	// 		<div className="w-full columns-2 md:columns-3 gap-12">
	// 			<img
	// 				className="aspect-video mb-6"
	// 				src="https://picsum.photos/500/300?random=1"
	// 			/>
	// 			<img
	// 				className="aspect-square mb-6"
	// 				src="https://picsum.photos/500/300?random=2"
	// 			/>
	// 			<img
	// 				className="aspect-video mb-6"
	// 				src="https://picsum.photos/500/300?random=3"
	// 			/>
	// 			<img
	// 				className="aspect-square mb-6"
	// 				src="https://picsum.photos/500/300?random=4"
	// 			/>
	// 			<img
	// 				className="aspect-square mb-6"
	// 				src="https://picsum.photos/500/300?random=5"
	// 			/>
	// 			<img
	// 				className="aspect-video mb-6"
	// 				src="https://picsum.photos/500/300?random=6"
	// 			/>
	// 		</div>
	// 	</div>;
	// });

	// const data = ArtCard();
	// // Hook1: Tie media queries to the number of columns
	// const columns = useMedia(
	// 	["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
	// 	[5, 4, 3],
	// 	2
	// );
	// // Hook2: Measure the width of the container element
	// const [ref, { width }] = useMeasure();
	// // Hook3: Hold items
	// const [items, set] = useState(data);

	// const [heights, gridItems] = useMemo(() => {
	// 	let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
	// 	let gridItems = items.map((child, i) => {
	// 		const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
	// 		const x = (width / columns) * column; // x = container width / number of columns * column index,
	// 		const y = (heights[column] += child.height / 2) - child.height / 2; // y = it's just the height of the current column
	// 		return {
	// 			...child,
	// 			x,
	// 			y,
	// 			width: width / columns,
	// 			height: child.height / 2,
	// 		};
	// 	});
	// 	return [heights, gridItems];
	// }, [columns, items, width]);

	// // Render the grid
	// return (
	// 	<div
	// 		ref={ref}
	// 		className={styles.list}
	// 		style={{ height: Math.max(...heights) }}
	// 	>
	// 		{/* {transitions((style, item) => (
	// 			<a.div style={style}>
	// 				<div
	// 					style={{
	// 						backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
	// 					}}
	// 				/>
	// 			</a.div>
	// 		))} */}
	// 	</div>
	// );
}
