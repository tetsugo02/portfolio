import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface ShadowCardProps {
	children: React.ReactNode;
	className?: string;
}

export const ShadowCard = ({ children }: ShadowCardProps) => {
	return (
		<Card className={cn("hover:shadow-lg transition-shadow duration-300 ease-in-out")}>
			{children}
		</Card>
	);
};
