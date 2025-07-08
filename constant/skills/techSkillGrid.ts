import { TechSkillGridInterface } from "@/types/techSkillGridType";
import { TFunction } from "i18next";
import { FaPython } from "react-icons/fa";
import { SiTypescript, SiPytorch, SiLinux, SiNumpy, SiCplusplus } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";

const iconMap = {
	Python: FaPython,
	TypeScript: SiTypescript,
	"C++": SiCplusplus,
	React: FaReact,
	"Next.js": RiNextjsFill,
	PyTorch: SiPytorch,
	Linux: SiLinux,
	NumPy: SiNumpy,
	Unity: FaUnity,
};

export const getTechSkillList = (t: TFunction): TechSkillGridInterface[] => {
	const skillsData = t("skills.technicalSkills", { returnObjects: true }) as { name: string }[];
	return skillsData.map((skill) => ({
		name: skill.name,
		icon: iconMap[skill.name as keyof typeof iconMap] || FaPython,
	}));
};

// 後方互換性のための既存のエクスポート（必要に応じて削除可能）
export const techSkillList: TechSkillGridInterface[] = [
	{
		name: "Python",
		icon: FaPython,
	},
	{
		name: "Typescript",
		icon: SiTypescript,
	},
	{
		name: "C++",
		icon: SiCplusplus,
	},
	{
		name: "React",
		icon: FaReact,
	},
	{
		name: "Next.js",
		icon: RiNextjsFill,
	},
	{
		name: "PyTorch",
		icon: SiPytorch,
	},
	{
		name: "Linux",
		icon: SiLinux,
	},
	{
		name: "NumPy",
		icon: SiNumpy,
	},
	{
		name: "Unity",
		icon: FaUnity,
	},
];
