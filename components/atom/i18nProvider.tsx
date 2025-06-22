"use client";

import { ReactNode, useEffect } from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources, defaultNS, fallbackLng } from "@/i18n";
import { useMemo } from "react";

export function I18nClientProvider({ children }: { children: ReactNode }) {
	const i18n = useMemo(() => {
		const instance = i18next.createInstance().use(LanguageDetector).use(initReactI18next);

		instance.init({
			resources,
			defaultNS,
			fallbackLng,
			lng: undefined, // 検出またはローカルストレージから取得
			debug: process.env.NODE_ENV === "development",
			interpolation: {
				escapeValue: false, // React already safes from XSS
			},
		});

		return instance;
	}, []);

	useEffect(() => {
		// クライアントサイドでの言語検出を確実にする
		const savedLng = localStorage.getItem("i18nextLng");
		if (savedLng) {
			i18n.changeLanguage(savedLng);
		}
	}, [i18n]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
