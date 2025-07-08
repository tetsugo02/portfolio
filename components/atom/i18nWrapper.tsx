"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface I18nWrapperProps {
	children: React.ReactNode;
}

export const I18nWrapper = ({ children }: I18nWrapperProps) => {
	const { i18n } = useTranslation();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (i18n.isInitialized) {
			setIsReady(true);
		} else {
			i18n.on("initialized", () => {
				setIsReady(true);
			});
		}

		return () => {
			i18n.off("initialized");
		};
	}, [i18n]);

	if (!isReady) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};
