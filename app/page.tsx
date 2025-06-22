import { Header } from "@/components/atom/header";
import { Paragraph } from "@/components/atom/paragraph";
import { bioContent } from "@/data/bio/bioContent";
import { Roboto } from "next/font/google";
import { Interest } from "@/components/organism/interest";
import { Education } from "@/components/organism/education";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div
			className={`${roboto.className} w-full max-w-5xl mx-auto flex flex-col gap-2  justify-items-start min-h-screen p-4 sm:p-8 md:p-12 lg:p-16`}
		>
			<Header level="h1">About</Header>
			<div className=" justify-items-start w-full flex flex-col gap-4 ">
				<article className="">
					{bioContent.main.map((item, index) => {
						return (
							<Paragraph key={index} className=" m-1 text-xl">
								{item}
							</Paragraph>
						);
					})}
				</article>
				<article className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
					<Interest />
					<Education />
				</article>
			</div>
			<Header level="h1" className="mt-4">
				Work Experience
			</Header>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
