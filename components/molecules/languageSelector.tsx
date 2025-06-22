"use client";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const LanguageSelector = () => {
	const { i18n, t } = useTranslation();

	const changeLanguage = (value: string) => {
		i18n.changeLanguage(value);
		// オプション：言語設定をローカルストレージに保存
		localStorage.setItem("i18nextLng", value);
	};

	// 初期言語設定の適用
	useEffect(() => {
		const savedLang = localStorage.getItem("i18nextLng");
		if (savedLang) {
			i18n.changeLanguage(savedLang);
		}
	}, [i18n]);

	return (
		<Select defaultValue={i18n.language} onValueChange={changeLanguage}>
			<SelectTrigger className="w-32">
				<SelectValue placeholder={i18n.language === "en" ? "English" : "日本語"} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="en">{t("languages.english")}</SelectItem>
				<SelectItem value="ja">{t("languages.japanese")}</SelectItem>
			</SelectContent>
		</Select>
	);
};
