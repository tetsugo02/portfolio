import { GithubActivityCard } from "./githubActivityCard";
import { GithubEvent } from "@/store/githubDataAtom";

export interface RecentExperienceProps {
	githubEventData: GithubEvent[] | null;
}

export const RecentExperience = ({ githubEventData }: RecentExperienceProps) => {
	if (!githubEventData) return null;
	const minlength = Math.min(githubEventData.length, 10);
	const limitedData = githubEventData.slice(0, minlength);
	console.log(limitedData);
	return limitedData.map((eventData) => {
		return <GithubActivityCard data={eventData} key={eventData.id} />;
	});
};
