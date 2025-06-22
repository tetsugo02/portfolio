import { cn } from "@/lib/utils";

interface ParagraphProps {
	children?: React.ReactNode;
	className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
	return <p className={cn("leading-7 [&:not(:first-child)]:m-1", className)}>{children}</p>;
};
