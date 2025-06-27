import { IconType } from "react-icons/lib";

export interface WorkBlockType {
	title: string;
	workType: WorkType;
	link?: string[];
	description: string;
	badges?: BadgeType[];
}

export interface BadgeType {
	name: string;
	className?: string;
	icon?: IconType;
}

export type WorkType = "development" | "research" | "other";
