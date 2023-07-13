import React from "react";
import { micromark } from "micromark";

async function getPiece(pieceSlug) {
	const pieces = await fetch(
		`http://127.0.0.1:1337/api/posts?filters[slug][$eq]=${pieceSlug.slug}&populate=deep`,
		{ next: { revalidate: 10 } }
	);
	return await pieces.json();
}

export default async function Piece({ params }) {
	const piece = await getPiece(params);
	const descriptionHTML = micromark(piece.data[0].attributes.description);

	return (
		<div className="mt-16 flex flex-col items-center gap-8 w-2/3 mx-auto">
			<div className="">
				<img
					src={`http://127.0.0.1:1337${piece.data[0].attributes.artwork.data[0].attributes.url}`}
					alt={`http://127.0.0.1:1337${piece.data[0].attributes.artwork.data[0].attributes.name}`}
				/>
			</div>
			<div className="flex flex-col gap-5 items-center">
				<h1>{piece.data[0].attributes.title}</h1>
				<h1>{piece.data[0].attributes.medium}</h1>
				<h2>{piece.data[0].attributes.year}</h2>
				<div className="text-white mb-10">
					<div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
				</div>
			</div>
		</div>
	);
}
