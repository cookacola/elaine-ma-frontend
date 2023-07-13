"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-black">
			<div className="p-6 text-center bg-black border rounded-md shadow-xl border-amber-500">
				<h2 className="mb-4 text-2xl font-semibold text-amber-500">
					Something went wrong!
				</h2>
				<button
					onClick={() => reset()}
					className="px-4 py-2 mt-4 text-black rounded-md bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-opacity-50"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
