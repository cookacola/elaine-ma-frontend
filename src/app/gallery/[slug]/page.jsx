import React from "react";
import Link from "next/link";
import { micromark } from "micromark";

async function getWork(workSlug) {
	const works = await fetch(
		process.env.NEXT_PUBLIC_API +
			`/works?filters[slug][$eq]=${workSlug.slug}&populate=deep`,
		{ next: { revalidate: 10 } }
	);
	return await works.json();
}

export default async function Work({ params }) {
	const work = await getWork(params);
	console.log(work);
	const bodyHTML = micromark(work.data[0].attributes.body);

	return (
		<div className="flex flex-col items-center w-2/3 gap-8 mx-auto mt-16">
			<div className="">
				<img
					src={work.data[0].attributes.work.data.attributes.url}
					alt={work.data[0].attributes.work.data.attributes.alternativeText}
				/>
			</div>
			<div className="flex flex-col items-center gap-5">
				<h1>{work.data[0].attributes.title}</h1>
				<h1>{work.data[0].attributes.medium}</h1>
				<h2>{work.data[0].attributes.year}</h2>
				<div className="mb-10 text-white">
					<div dangerouslySetInnerHTML={{ __html: bodyHTML }}></div>
				</div>
				<Link href="/gallery" className="mb-10">
					Back
				</Link>
			</div>
		</div>
	);
}
