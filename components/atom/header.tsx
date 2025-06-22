import { HeaderLevels, headerStyles } from "@/types/headerTypes";
import { cn } from "@/lib/utils";

interface HeaderProps {
	children: React.ReactNode;
	level: HeaderLevels;
	className?: string;
}

export const Header = ({ children, level, className }: HeaderProps) => {
	const HeaderTag = level;

	return (
		<HeaderTag className={cn(headerStyles[level], className, " text-left")}>{children}</HeaderTag>
	);
};
