import { CardHeader, CardContent } from "../ui/card";
import { Paragraph } from "../atom/paragraph";
import { ShadowCard } from "../atom/shadowCard";

export const RecentExperience = () => {
	return (
		<ShadowCard className="w-full gap-0  ">
			<CardHeader className=" text-xl font-semibold gap-4 grid grid-cols-2">
				<div>Research Engineer Internship</div>
				<div className="text-gray-700 text-right">2024/2 - present </div>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<Paragraph className="text-lg">Cygames Inc </Paragraph>
			</CardContent>
		</ShadowCard>
	);
};
