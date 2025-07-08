"use client";

import { getBioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";
import { SingleGrid } from "../atom/singleGrid";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const Education = () => {
	const { t, i18n } = useTranslation("home");
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

	const bioContent = getBioContent(t);
	const educationContent = bioContent.education;

	return (
		<div className="w-full">
			<Header level="h3">{t("education.title")}</Header>
			<div className="m-2 border-l-2">
				{educationContent.map((item, index) => (
					<SingleGrid key={index} head={item.field} body={item.time} className="text-lg m-2" />
				))}
			</div>
		</div>
	);
};
