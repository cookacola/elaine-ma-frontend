import React from "react";
import Link from "next/link";
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
		<div className="flex flex-col items-center w-2/3 gap-8 mx-auto mt-16">
			<div className="">
				<img
					src={`http://127.0.0.1:1337${piece.data[0].attributes.artwork.data[0].attributes.url}`}
					alt={`http://127.0.0.1:1337${piece.data[0].attributes.artwork.data[0].attributes.name}`}
				/>
			</div>
			<div className="flex flex-col items-center gap-5">
				<h1>{piece.data[0].attributes.title}</h1>
				<h1>{piece.data[0].attributes.medium}</h1>
				<h2>{piece.data[0].attributes.year}</h2>
				<div className="mb-10 text-white">
					<div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
				</div>
				<Link href="/gallery" className="mb-10">
					Back
				</Link>
			</div>
		</div>
	);
}
