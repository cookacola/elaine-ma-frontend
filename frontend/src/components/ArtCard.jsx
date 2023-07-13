import Link from "next/link";
function ArtCard({ piece }) {
	return (
		<Link href={`/gallery/${piece.attributes.slug}`}>
			<div className="relative">
				<img
					src={`http://127.0.0.1:1337${piece.attributes.artwork.data[0].attributes.url}`}
					alt={`http://127.0.0.1:1337${piece.attributes.artwork.data[0].attributes.name}`}
					className="mb-10"
				/>
				<div className="absolute inset-0 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
					<h2 className="text-xl">{piece.attributes.title}</h2>
				</div>
			</div>
		</Link>
	);
}

export default ArtCard;
