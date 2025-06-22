import { cn } from "@/lib/utils";

interface SingleGridProps {
	className?: string;
	head: string;
	body: string;
}

export const SingleGrid = ({ head, body, className }: SingleGridProps) => {
	return (
		<div className={cn("flex flex-col min-w-xl", className)}>
			<h3 className="font-medium">{head}</h3>
			<p className="text-gray-700">{body}</p>
		</div>
	);
};
