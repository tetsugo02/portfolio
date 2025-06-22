import { BioContentType, EducationContent } from "@/types/bioType";

export const bioContent: BioContentType = {
	main: [
		"I am a undergraduate student at the Keio University in Japan",
		"I also work as a Research Engineer intern at Cygames, Inc.",
	] as string[],
	interest: ["Machine Learning", "Computer Network", "operating system"] as string[],
	education: [
		{
			field: "B.E. in Electronics and Electrical Engineering",
			time: "Keio University, 2022 - Present",
		},
	] as EducationContent[],
};
