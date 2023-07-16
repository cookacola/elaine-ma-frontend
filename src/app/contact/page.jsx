import React from "react";
import Contact from "../../components/Contact";

async function getContact() {
	const res = await fetch(
		process.env.NEXT_PUBLIC_API + "/contact?populate=deep",
		{ next: { revalidate: 60 } }
	);
	return await res.json();
}

async function ContactPage() {
	const contactJSON = await getContact();
	return (
		<section className="grid items-start grid-cols-1 gap-6 p-6 md:grid-cols-2">
			<div className="p-6 space-y-4 shadow-md">
				<h1 className="text-2xl font-bold text-center">
					{contactJSON.data.attributes.contactContact.contactTitle}
				</h1>
				<p className="text-lg text-white">
					{contactJSON.data.attributes.contactContact.contactBody}
				</p>
			</div>
			<div>
				<Contact />;
			</div>
		</section>
	);
}

export default ContactPage;
