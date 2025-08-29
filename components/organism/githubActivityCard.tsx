import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { GitHubEventTypeKey } from "@/types/githubEventsType";
import { getActivityCardDetail, fetchRepoAvatarUrl } from "@/lib/getworks/getActivityCardDetail";
import { GithubEvent } from "@/store/githubDataAtom";

interface GithubActivityCardProps {
	data: GithubEvent;
}

export const GithubActivityCard = ({ data }: GithubActivityCardProps) => {
	const activityType: GitHubEventTypeKey = data.type as GitHubEventTypeKey;
	const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

	useEffect(() => {
		const fetchAvatar = async () => {
			if (data.repo?.url) {
				const url = await fetchRepoAvatarUrl(data.repo.url);
				setAvatarUrl(url);
			}
		};
		fetchAvatar();
	}, [data.repo]);

	const {
		icon: Icon,
		title,
		url,
		iconColor,
		description,
		repo_url,
	} = getActivityCardDetail(activityType, data);

	return (
		<Card
			className="w-full flex flex-row items-center h-full px-4 py-3 bg-white rounded-lg shadow hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer"
			onClick={() => window.open(url.startsWith("http") ? url : `https://${url}`, "_blank")}
		>
			<div className="flex-1 flex flex-col justify-between h-full">
				<CardContent className="p-0">
					<div className="flex items-center space-x-4">
						<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100">
							<Icon size={28} color={iconColor} />
						</div>
						<Separator orientation="vertical" className="h-8" />
						<div className="flex flex-col space-y-1">
							<h3 className="text-base font-semibold leading-none text-gray-900">{title}</h3>
							{description && <p className="text-xs text-gray-500">{description}</p>}
						</div>
					</div>
				</CardContent>
				<CardFooter className="pt-2 pb-0 text-xs text-gray-400">
					<p>{url.replace(/^https?:\/\//, "")}</p>
				</CardFooter>
			</div>
			{avatarUrl && (
				<div className="ml-6 flex items-center">
					<img
						src={avatarUrl}
						alt="Repository Owner Avatar"
						className="w-12 h-12 rounded-full border border-gray-200 shadow-sm object-cover"
					/>
				</div>
			)}
		</Card>
	);
};
