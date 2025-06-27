import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkBlockProps {
	title: string;
	description: string;
}

export const WorkBlock = ({ title, description }: WorkBlockProps) => {
	return (
		<Card className="w-full h-42 max-w-sm shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-300 justify-center">
			<CardHeader className="text-lg font-semibold text-card-foreground">{title}</CardHeader>
			<CardContent>
				<p className="text-sm text-card-foreground">{description}</p>
			</CardContent>
			<CardFooter className="flex flex-wrap gap-2">
				<Badge>Development</Badge>
				<Badge>event</Badge>
			</CardFooter>
		</Card>
	);
};
