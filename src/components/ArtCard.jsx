import Link from "next/link";
function ArtCard({ work }) {
	return (
		<Link href={`/gallery/${work.attributes.slug}`}>
			<div className="relative">
				<img
					src={work.attributes.work.data.attributes.url}
					alt={work.attributes.work.data.attributes.alternativeText}
					className="mb-10"
				/>
				<div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
					<h2 className="text-xl">{work.attributes.title}</h2>
				</div>
			</div>
		</Link>
	);
}

export default ArtCard;
