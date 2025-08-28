import { Octokit } from "octokit";
import { GitHubEventType } from "@/types/githubEventsType";
import { GithubEvent } from "@/store/githubDataAtom";

export const getGithubEvent = async () => {
	const octokit = new Octokit();
	const eventData = await octokit.request("GET /users/{username}/events/public", {
		username: "tetsugo02",
		per_page: 100,
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
	return eventData.data;
};

export const getSpecificGithubEvent = async (): Promise<GithubEvent[]> => {
	const events = await getGithubEvent();
	const validTypes = Object.values(GitHubEventType) as string[];
	return events.filter((event) => event.type && validTypes.includes(event.type));
};
