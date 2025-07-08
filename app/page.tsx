"use client";

import { Header } from "@/components/atom/header";
import { Paragraph } from "@/components/atom/paragraph";
import { getBioContent } from "@/data/bio/bioContent";
import { Interest } from "@/components/organism/interest";
import { Education } from "@/components/organism/education";
import { Separator } from "@/components/ui/separator";
import { RecentExperience } from "@/components/organism/workExperience";
import { useTranslation } from "react-i18next";

export default function Home() {
	const { t } = useTranslation("home");
	const bioContent = getBioContent(t);

	return (
		<>
			<Header level="h1">{t("bio.title")}</Header>
			<div className=" justify-items-start w-full h-fit flex flex-col gap-4  ">
				<article className="">
					{bioContent.main.map((item, index) => {
						return (
							<Paragraph key={index} className=" m-1 text-xl">
								{item}
							</Paragraph>
						);
					})}
				</article>
				<article className="mt-4  grid grid-cols-1 gap-4 ">
					<Interest />
					<Education />
				</article>
			</div>
			<Separator />
			<Header level="h1" className="mt-4">
				{t("workExperience.title")}
			</Header>
			<RecentExperience />
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</>
	);
}
