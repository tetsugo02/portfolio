// Translation resources
import commonEN from "./locales/en/common.json";
import commonJA from "./locales/ja/common.json";
import homeEN from "./locales/en/home.json";
import homeJA from "./locales/ja/home.json";
import skillsEN from "./locales/en/skills.json";
import skillsJA from "./locales/ja/skills.json";

export const resources = {
	en: {
		common: commonEN,
		home: homeEN,
		skills: skillsEN,
	},
	ja: {
		common: commonJA,
		home: homeJA,
		skills: skillsJA,
	},
};

export const defaultNS = "common";
export const fallbackLng = "en";
