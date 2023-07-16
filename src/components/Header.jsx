"use client";
import Link from "next/link";
import Hamburger from "../assets/icons/Hamburger";
import React, { use, useState } from "react";

async function getNavLinks() {
	const res = await fetch(
		process.env.NEXT_PUBLIC_API + "/header?populate=deep",
		{ next: { revalidate: 60 } }
	);
	return await res.json();
}

const Header = () => {
	const [expanded, setExpanded] = useState(false);
	const handleExpand = () => {
		setExpanded(!expanded);
	};

	const navLinkData = use(getNavLinks());
	const navLinks = navLinkData.data.attributes.navLink;

	return (
		<header className="container sticky top-0 z-50 px-4 py-4 mx-auto bg-black border-b md:px-10 bg-opacity-60 border-amber-500">
			<nav
				className="relative justify-between align-middle md:flex"
				aria-label="header-nav"
			>
				<Link href="/" className="delay-75 hover:text-amber-500">
					Elaine Ma
				</Link>
				<div
					className={`${
						expanded
							? "space-x-8 flex flex-wrap justify-items-center justify-around pt-4 md:pt-0"
							: "hidden space-x-8 md:flex "
					}`}
				>
					{navLinks.map((navLink) => (
						<Link
							href={navLink.link}
							key={navLink.id}
							className="delay-75 hover:text-amber-500"
						>
							{navLink.title}
						</Link>
					))}
				</div>
				<div className="absolute top-0 right-0">
					<Hamburger onClick={handleExpand} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
