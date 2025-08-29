import { GitHubEventTypeKey } from "@/types/githubEventsType";
import { IconType } from "react-icons/lib";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { MdOutlineForkRight } from "react-icons/md";
import { GoIssueOpened } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { GithubEvent } from "@/store/githubDataAtom";

interface ActivityCardDetail {
	icon: IconType;
	url: string;
	iconColor?: string;
	title?: string;
	description?: string;
	repo_url?: string;
}

export const getActivityCardDetail = (
	activityType: GitHubEventTypeKey,
	data: GithubEvent
): ActivityCardDetail => {
	switch (activityType) {
		case "ForkEvent":
			return {
				icon: MdOutlineForkRight,
				iconColor: "orange",
				url: data?.payload?.forkee?.html_url || "",
				title: `Forked ${data.repo.name} as ${data.payload?.forkee?.full_name}` || "",
				description: "",
				repo_url: data.repo.url,
			};
		case "PullRequestEvent":
			return {
				icon: IoGitPullRequestOutline,
				iconColor: "green",
				title: data?.payload?.pull_request?.title || "No title available",
				url: data?.payload?.pull_request?.html_url || "",
				description: "",
				repo_url: data.repo.url,
			};
		case "IssuesEvent":
			return {
				icon: GoIssueOpened,
				iconColor: "blue",
				title: data?.payload?.issue?.title || "No title available",
				url: data?.payload?.issue?.html_url || "",
				description: "",
				repo_url: data.repo.url,
			};
		case "CreateEvent":
			return {
				icon: IoCreateOutline,
				iconColor: "green",
				title: `Created ${data.payload?.ref_type}: ${data.payload?.ref}` || "",
				url: data.repo.url.replace("api.", "").replace("repos/", ""),
				description: "",
				repo_url: data.repo.url,
			};
		default:
			return {
				icon: IoGitPullRequestOutline,
				iconColor: "gray",
				url: "",
				title: "",
				description: "",
				repo_url: data.repo.url,
			};
	}
};

export const fetchRepoAvatarUrl = async (repoApiUrl: string): Promise<string | null> => {
	try {
		const res = await fetch(repoApiUrl);
		const repoData = await res.json();
		return repoData.owner?.avatar_url ?? null;
	} catch {
		return null;
	}
};
