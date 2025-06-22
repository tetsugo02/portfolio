export interface EducationContent {
	field: string;
	time: string;
}

export type BioContentType = {
	main: string[];
	interest: string[];
	education: EducationContent[];
};
