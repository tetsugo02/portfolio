export type HeaderLevels = "h1" | "h2" | "h3" | "h4";

export type HeaderStyles = {
	[key in HeaderLevels]: string;
};

export const headerStyles: HeaderStyles = {
	h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
	h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
	h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
	h4: "scroll-m-20 text-xl font-semibold tracking-tight",
} as const;
