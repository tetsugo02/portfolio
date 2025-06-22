import { Header } from "@/components/atom/header";
import { Paragraph } from "@/components/atom/paragraph";
import { bioContent } from "@/data/bio/bioContent";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div
			className={`${roboto.className} w-full max-w-5xl mx-auto justify-items-start min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 gap-16 font-[family-name:var(--font-geist-sans)]`}
		>
			<Header level="h1">Bio</Header>
			<div className=" just">
				{bioContent.main.map((item, index) => {
					return <Paragraph key={index}>{item}</Paragraph>;
				})}
			</div>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
