"use client";
import Link from "next/link";
import Hamburger from "../assets/icons/Hamburger";
import React, { useState } from "react";

const Header = () => {
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<header className="sticky top-0 z-50 px-4 py-4 mx-auto bg-black border-b-2 border-amber-500 md:px-10 bg-opacity-60">
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
					<Link href="/" className="delay-75 hover:text-amber-500">
						Home
					</Link>
					<Link href="/about" className="delay-75 hover:text-amber-500">
						About
					</Link>
					<Link href="/gallery" className="delay-75 hover:text-amber-500">
						Gallery
					</Link>
					<Link href="/contact" className="delay-75 hover:text-amber-500">
						Contact
					</Link>
				</div>
				<div className="absolute top-0 right-0 z-50">
					<Hamburger onClick={handleExpand} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
