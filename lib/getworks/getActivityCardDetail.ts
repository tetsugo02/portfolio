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
			};
		case "PullRequestEvent":
			return {
				icon: IoGitPullRequestOutline,
				iconColor: "green",
				title: data?.payload?.pull_request?.title || "No title available",
				url: data?.payload?.pull_request?.html_url || "",
				description: "",
			};
		case "IssuesEvent":
			return {
				icon: GoIssueOpened,
				iconColor: "blue",
				title: data?.payload?.issue?.title || "No title available",
				url: data?.payload?.issue?.html_url || "",
				description: "",
			};
		case "CreateEvent":
			return {
				icon: IoCreateOutline,
				iconColor: "green",
				title: `Created ${data.payload?.ref_type}: ${data.payload?.ref}` || "",
				url: data.repo.url.replace("api.", "").replace("repos/", ""),
				description: "",
			};
		default:
			return {
				icon: IoGitPullRequestOutline,
				iconColor: "gray",
				url: "",
				title: "",
				description: "",
			};
	}
};

const getTitle = (activityType: GitHubEventTypeKey, data: GithubEvent): string => {
	switch (activityType) {
		case "PullRequestEvent":
			return data?.payload?.pull_request?.title || "No title available";
		case "IssuesEvent":
		default:
			return "No title available";
	}
};
