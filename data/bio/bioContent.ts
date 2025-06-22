import { BioContentType, EducationContent } from "@/types/bioType";

export const bioContent: BioContentType = {
	main: [
		"I am a undergraduate student at the Keio University in Japan",
		"I also work as a Research Engineer intern at Cygames, Inc.",
	] as string[],
	interest: ["Machine Learning", "Computer Network", "operating system"] as string[],
	education: [
		{
			field: "Keio University, Faculty of Science and Technology ",
			time: "2022/4 ~",
		},
		{
			field: "Keio University, Electronics and Electrical Engineering",
			time: "2023/4 ~",
		},
		{
			field: "keio University, Murata Laboratory",
			time: "2025/4 ~",
		},
	] as EducationContent[],
};
