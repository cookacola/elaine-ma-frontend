import Slideshow from "../components/Slideshow";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Page() {
	return (
		<section>
			<Slideshow />
			<About isHome={true} />
			<div className="text-black bg-amber-500">
				<h1 className="pt-4 text-2xl font-bold text-center">Contact Me</h1>
				<Contact />
			</div>
		</section>
	);
}
