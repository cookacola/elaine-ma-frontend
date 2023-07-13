import React from "react";
import Contact from "../../components/Contact";

function ContactPage() {
	return (
		<section className="grid items-start grid-cols-1 gap-6 p-6 md:grid-cols-2">
			<div className="p-6 space-y-4 shadow-md">
				<h1 className="text-2xl font-bold text-center">Title</h1>
				<p className="text-lg text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
					accusamus magnam tempore corporis similique animi saepe placeat ipsum
					repudiandae quae veniam, eum quas, et voluptates tempora doloribus
					impedit nemo, in at aliquam ipsa vero. Maxime perferendis aliquid
					nesciunt rerum adipisci?
				</p>
			</div>
			<div>
				<Contact />;
			</div>
		</section>
	);
}

export default ContactPage;
