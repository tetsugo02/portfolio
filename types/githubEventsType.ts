export const GitHubEventType = {
	ForkEvent: "ForkEvent",
	IssuesEvent: "IssuesEvent",
	PullRequestEvent: "PullRequestEvent",
	OpenEvent: "OpenEvent",
	MergeEvent: "MergeEvent",
	CreateEvent: "CreateEvent",
} as const;

// 型として使う場合
export type GitHubEventTypeKey = keyof typeof GitHubEventType;
