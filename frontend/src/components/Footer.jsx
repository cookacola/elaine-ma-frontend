import Link from "next/link";

const Footer = () => {
	return (
		<footer className="container p-10 mx-auto border-t border-amber-500">
			<nav
				className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between"
				aria-label="footer-nav"
			>
				<div className="flex flex-col items-center gap-2.5 md:flex-row md:justify-end">
					<Link href="#" className="hover:text-amber-500 delay-100">
						Social Media 1
					</Link>
					<Link href="#" className="hover:text-amber-500 delay-100">
						Social Media 2
					</Link>
					<Link href="#" className="hover:text-amber-500 delay-100">
						Social Media 3
					</Link>
				</div>
				<div className="md:-order-1">Copyright</div>
			</nav>
		</footer>
	);
};

export default Footer;
