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
		<header className="container px-4 py-4 sticky top-0 md:px-10 mx-auto bg-black bg-opacity-60 z-50 border-b border-amber-500">
			<nav
				className="relative md:flex justify-between align-middle"
				aria-label="header-nav"
			>
				<Link href="/" className="hover:text-amber-500 delay-75">
					Elaine Ma
				</Link>
				<div
					className={`${
						expanded
							? "space-x-8 flex flex-wrap justify-items-center justify-around pt-4 md:pt-0"
							: "hidden space-x-8 md:flex "
					}`}
				>
					<Link href="/" className="hover:text-amber-500 delay-75">
						Home
					</Link>
					<Link href="/gallery" className="hover:text-amber-500 delay-75">
						Gallery
					</Link>
					<Link href="/about" className="hover:text-amber-500 delay-75">
						About
					</Link>
					<Link href="/contact" className="hover:text-amber-500">
						Contact
					</Link>
				</div>
				<div className="absolute right-0 top-0">
					<Hamburger onClick={handleExpand} />
				</div>
			</nav>
		</header>
	);
};

export default Header;
