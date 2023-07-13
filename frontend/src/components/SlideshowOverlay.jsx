import React from "react";
import Link from "next/link";

function SlideshowOverlay() {
	return (
		<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-49 flex justify-center items-center">
			<div className="text-white flex flex-col items-center gap-5">
				<h1 className="text-xl">Artist. Painter. Visionary.</h1>
				<Link href="/gallery">
					<div className="text-black border-white m-4 p-4 rounded-lg bg-white">
						View More
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SlideshowOverlay;
