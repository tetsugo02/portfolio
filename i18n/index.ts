// Translation resources
import translationEN from "./locales/en/translation.json";
import translationJA from "./locales/ja/translation.json";

export const resources = {
	en: {
		translation: translationEN,
	},
	ja: {
		translation: translationJA,
	},
};

export const defaultNS = "translation";
export const fallbackLng = "en";
