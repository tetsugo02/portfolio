import { Card, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { GitHubEventTypeKey } from "@/types/githubEventsType";
import { getActivityCardDetail } from "@/lib/getworks/getActivityCardDetail";
import { GithubEvent } from "@/store/githubDataAtom";

interface GithubActivityCardProps {
	data: GithubEvent;
}

export const GithubActivityCard = ({ data }: GithubActivityCardProps) => {
	const activityType: GitHubEventTypeKey = data.type as GitHubEventTypeKey;

	const {
		icon: Icon,
		title: title,
		url: url,
		iconColor: iconColor,
		description,
	} = getActivityCardDetail(activityType, data);

	return (
		<Card
			className="w-full flex flex-col h-full px-2 hover:shadow-lg transition-shadow cursor-pointer"
			onClick={() => window.open(url.startsWith("http") ? url : `https://${url}`, "_blank")}
		>
			<CardContent className="w-full flex-grow">
				<div className="flex h-10 items-center space-x-5 text-sm">
					<div>
						<Icon size={30} color={iconColor} />
					</div>
					<Separator orientation="vertical" />
					<div className="flex flex-col space-y-1">
						<h3 className="text-lg font-medium leading-none">{title}</h3>
						<p className="text-sm">{description}</p>
					</div>
				</div>
			</CardContent>
			<CardFooter className="py-1 text-sm text-muted-foreground">
				<p>{url.replace("https://", "").replace("http://", "")}</p>
			</CardFooter>
		</Card>
	);
};
