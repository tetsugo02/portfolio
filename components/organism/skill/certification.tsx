"use client";

import { Header } from "@/components/atom/header";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const Certification = () => {
	const { t, i18n } = useTranslation("skills");
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (i18n.isInitialized) {
			setIsReady(true);
		} else {
			const handleInit = () => setIsReady(true);
			i18n.on("initialized", handleInit);
			return () => i18n.off("initialized", handleInit);
		}
	}, [i18n]);

	if (!isReady) {
		return <div>Loading...</div>;
	}

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
