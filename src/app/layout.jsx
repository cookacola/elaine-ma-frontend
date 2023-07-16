// These styles apply to every route in the application
import "../../dist/output.css";

import { Cinzel } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
const cinzel = Cinzel({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={cinzel.className}>
			<body className="container mx-auto bg-black text-amber-400">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
