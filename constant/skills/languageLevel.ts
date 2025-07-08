import { LanguageLevel } from "@/types/languageLevel";
import { TFunction } from "i18next";

export const getLanguageLevel = (t: TFunction): LanguageLevel[] => {
	return t("skills.languageSkills", { returnObjects: true }) as LanguageLevel[];
};

// 後方互換性のための既存のエクスポート（必要に応じて削除可能）
export const languageLevel: LanguageLevel[] = [
	{
		name: "English",
		percentage: 70,
		description: "Comfortable with technical documentation and basic conversations.",
	},
	{
		name: "Chinese",
		percentage: 100,
		description: "Mother tongue, fluent in all aspects of the language.",
	},
	{
		name: "Japanese",
		percentage: 95,
		description: "Billingual, fluent in all aspects of the language.",
	},
	{
		name: "French",
		percentage: 10,
		description: "Basic understanding, can have simple greetings",
	},
];
