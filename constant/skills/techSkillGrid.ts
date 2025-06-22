import { TechSkillGridInterface } from "@/types/techSkillGridType";
import { FaPython } from "react-icons/fa";
import { SiTypescript, SiPytorch, SiLinux, SiNumpy, SiCplusplus } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";

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
