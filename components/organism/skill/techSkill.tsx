import { Header } from "@/components/atom/header";
import { Card, CardContent } from "@/components/ui/card";

import { techSkillList } from "@/constant/skills/techSkillGrid";
import { Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
export const TechSkill = () => {
	return (
		<div className="justify-items-start w-full px-2 flex flex-col gap-4">
			<Header level="h3">Tech Skills</Header>
			<Card className="w-full h-full shadow-none">
				<CardContent className=" flex flex-row flex-wrap gap-2">
					{techSkillList.map((skill, index) => {
						return (
							<Tooltip key={index}>
								<TooltipTrigger asChild>
									<Card
										className="py-0 min-w-14 min-h-14 items-center justify-center hover:shadow-lg transition-shadaw ease-in-out"
										key={index}
									>
										<skill.icon size={32} />
									</Card>
								</TooltipTrigger>
								<TooltipContent side="bottom" className="bg-background shadow-lg rounded-2xl  p-2">
									<p className="text-sm font-semibold">{skill.name}</p>
								</TooltipContent>
							</Tooltip>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
};
