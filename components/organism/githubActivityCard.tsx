import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { IoIosGitPullRequest } from "react-icons/io";

export const GithubActivityCard = () => {
	return (
		<Card
			className="w-full flex flex-col h-full px-2 hover:shadow-lg transition-shadow cursor-pointer"
			onClick={() => window.open("https://github.com/marimo-team/marimo")}
		>
			<CardContent className="w-full flex-grow">
				<div className="flex h-10 items-center space-x-5 text-sm">
					<div>
						<IoIosGitPullRequest size={30} color="green" />
					</div>
					<Separator orientation="vertical" />
					<div className="flex flex-col space-y-1">
						<h3 className="text-lg font-medium leading-none">Opened Pull Request</h3>
						<p className="text-sm">Recent activities from GitHub</p>
					</div>
				</div>
			</CardContent>
			<CardFooter className="py-1 text-sm text-muted-foreground">
				<p>https://github.com/marimo-team/marimo</p>
			</CardFooter>
		</Card>
	);
};
