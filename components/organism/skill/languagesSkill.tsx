"use client";

import { CardContent } from "@/components/ui/card";
import { LanguageCard } from "@/components/molecules/languageCard";
import { getLanguageLevel } from "@/constant/skills/languageLevel";
import { Header } from "@/components/atom/header";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const LanguagesSkill = () => {
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

	const languageLevel = getLanguageLevel(t);

	return (
		<div className="justify-items-start w-full px-2 flex flex-col gap-4">
			<Header level="h3">{t("skillsSection.languages")}</Header>
			<CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-0 px-0">
				{languageLevel.map((language) => (
					<LanguageCard
						key={language.name}
						name={language.name}
						percentage={language.percentage}
						description={language.description}
					/>
				))}
			</CardContent>
		</div>
	);
};
