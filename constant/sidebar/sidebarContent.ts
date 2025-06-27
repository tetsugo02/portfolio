import { Inbox, Waypoints, Wrench } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { IoMail } from "react-icons/io5";
import { TFunction } from "i18next";
import { FaLinkedin } from "react-icons/fa";

export const getSidebarItems = (t: TFunction) => [
	{
		title: t("about"),
		url: "/",
		icon: Inbox,
	},
	{
		title: t("skillsPage"),
		url: "/skills",
		icon: Wrench,
	},
	//{
	//	title: t("experience"),
	//	url: "/experience",
	//	icon: MdOutlineWorkHistory,
	//},
	{
		title: t("works"),
		url: "/works",
		icon: Waypoints,
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
	Linkedin: {
		url: "https://www.linkedin.com/in/哲豪-董-634413306/",
		size: 32,
		icon: FaLinkedin, // Replace with actual LinkedIn icon if available
	},
};
