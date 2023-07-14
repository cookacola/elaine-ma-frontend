import Link from "next/link";
function ArtCard({ piece }) {
	return (
		<Link href={`/gallery/${piece.attributes.slug}`}>
			<div className="relative">
				<img
					src={`${piece.attributes.artwork.data[0].attributes.url}`}
					alt={`${piece.attributes.artwork.data[0].attributes.name}`}
					className="mb-10"
				/>
				<div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
					<h2 className="text-xl">{piece.attributes.title}</h2>
				</div>
			</div>
		</Link>
	);
}

export default ArtCard;
