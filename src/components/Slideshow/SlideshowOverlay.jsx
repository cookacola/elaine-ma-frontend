import React from "react";
import Link from "next/link";

function SlideshowOverlay() {
	return (
		<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-49">
			<div className="flex flex-col items-center gap-5 text-white">
				<h1 className="text-xl">Artist. Painter. Visionary.</h1>
				<Link href="/gallery">
					<div className="p-4 m-4 text-black bg-white border-white rounded-lg">
						View More
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SlideshowOverlay;
