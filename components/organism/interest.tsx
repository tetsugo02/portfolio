"use client";

import { getBioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const Interest = () => {
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
	const interestContent = bioContent.interest;

	return (
		<div>
			<Header level="h3">{t("interests.title")}</Header>
			<ul className="list-disc list-inside mt-2">
				{interestContent.map((item, index) => (
					<li key={index} className="m-1 text-lg">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
