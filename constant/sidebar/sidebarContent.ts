import { Inbox, Waypoints, Wrench } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { IoMail } from "react-icons/io5";
import { TFunction } from "i18next";

export const getSidebarItems = (t: TFunction) => [
	{
		title: t("home"),
		url: "/",
		icon: Inbox,
	},
	{
		title: t("works"),
		url: "/works",
		icon: Waypoints,
	},
	{
		title: t("skillsPage"),
		url: "/skills",
		icon: Wrench,
	},
];
export const snsBarItems = {
	github: {
		url: "https://github.com/tetsugo02",
		size: 30,
		icon: VscGithub,
	},
	mail: {
		url: "totetsugo2002[at]keio.jp",
		size: 32,
		icon: IoMail,
	},
};
