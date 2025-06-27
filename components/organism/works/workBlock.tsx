import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { WorkBlockType } from "@/types/workBlockType";
import { WorkHelper } from "@/lib/workHelper";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Eye } from "lucide-react";

export const WorkBlock = ({ title, description, link, workType, badges }: WorkBlockType) => {
	const workTypeBadge = WorkHelper.getWorkTypeBadge(workType);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="group relative  h-64 max-w-sm shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border-2 hover:border-primary/20 bg-gradient-to-br from-card to-card/95">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
					<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="p-1.5 bg-primary/10 rounded-full">
							<Eye className="w-4 h-4 text-primary" />
						</div>
					</div>
					<CardHeader className="relative z-10 pb-3">
						<h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
							{title}
						</h3>
					</CardHeader>

					<CardContent className="relative z-10 pb-3 flex-1">
						<p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
							{description}
						</p>
					</CardContent>

					<CardFooter className="relative z-10 flex flex-col gap-3 pt-0">
						<Separator className="opacity-20" />
						<div className="w-full flex flex-wrap gap-2">
							<Badge
								className={`${workTypeBadge.className} text-xs font-medium transition-transform duration-300 group-hover:scale-105`}
							>
								{workTypeBadge.name}
							</Badge>
							{badges?.slice(0, 2).map((badge, index) => (
								<Badge
									key={index}
									variant="secondary"
									className="text-xs font-medium transition-transform duration-300 group-hover:scale-105"
								>
									{badge.icon && <badge.icon className="inline w-3 h-3 mr-1" />}
									{badge.name}
								</Badge>
							))}
							{badges && badges.length > 2 && (
								<Badge variant="outline" className="text-xs">
									+{badges.length - 2}
								</Badge>
							)}
						</div>
					</CardFooter>
				</Card>
			</DialogTrigger>
			<DialogContent className="lg:max-w-2xl h-2/3 flex flex-col">
				<DialogHeader className="w-full">
					<DialogTitle className="text-2xl font-bold text-start">{title}</DialogTitle>
				</DialogHeader>
				<Separator />
				{link?.map((url, index) => (
					<a
						key={index}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline flex items-center gap-1 mt-1"
					>
						<ExternalLink className="w-4 h-4" />
						{new URL(url).hostname}
					</a>
				))}
				<Separator className="my-4" />
				<p className="text-sm text-muted-foreground whitespace-pre-wrap">{description}</p>
			</DialogContent>
		</Dialog>
	);
};
