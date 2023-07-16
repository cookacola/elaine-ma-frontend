import Link from "next/link";

async function getFooter() {
	const res = await fetch(process.env.NEXT_PUBLIC_API + "/footer?populate=*", {
		next: { revalidate: 60 },
	});
	return res.json();
}

const Footer = async () => {
	const socialLinksData = await getFooter();
	const socialLinks = socialLinksData.data.attributes.socialLink;
	const copyright = socialLinksData.data.attributes.copyright;
	return (
		<footer className="container p-10 mx-auto border-t border-amber-500">
			<nav
				className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between"
				aria-label="footer-nav"
			>
				<div className="flex flex-col items-center gap-2.5 md:flex-row md:justify-end">
					{socialLinks.map((socialLink) => (
						<Link
							href={socialLink.link}
							key={socialLink.id}
							className="delay-100 hover:text-amber-500"
						>
							{socialLink.title}
						</Link>
					))}
				</div>
				<div className="md:-order-1">{copyright}</div>
			</nav>
		</footer>
	);
};

export default Footer;
