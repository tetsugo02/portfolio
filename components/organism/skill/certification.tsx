"use client";

import { Header } from "@/components/atom/header";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const Certification = () => {
	const { t } = useTranslation("skills");
	const certifications = t("skills.certifications", { returnObjects: true }) as { name: string }[];

	return (
		<div className="justify-items-start w-full px-2 flex flex-col gap-4">
			<Header level="h3">{t("skillsSection.certifications")}</Header>
			<Card className="w-full h-full shadow-none p-2 overflow-y-scroll">
				<ul className="list-disc list-outside m-6 text-lg font-semibold">
					{certifications.map((cert, index) => (
						<li key={index}>{cert.name}</li>
					))}
				</ul>
			</Card>
		</div>
	);
};
