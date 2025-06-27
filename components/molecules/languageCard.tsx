import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { LanguageLevel } from "@/types/languageLevel";
import { ShadowCard } from "../atom/shadowCard";

export const LanguageCard = ({ name, percentage, description }: LanguageLevel) => {
	let bgcolor = "";
	if (percentage >= 80) {
		bgcolor = "bg-chart-2";
	} else if (percentage >= 50) {
		bgcolor = "bg-cyan-500";
	} else {
		bgcolor = "bg-chart-4";
	}

	return (
		<ShadowCard className="w-full gap-0 ">
			<CardHeader>
				<CardTitle className="text-xl">{name}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center gap-4">
				<div className="relative w-full h-6 bg-muted rounded-full">
					<div
						className={`absolute inset-0 rounded-full ${bgcolor}`}
						style={{ width: `${percentage}%` }}
					/>
					<div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-medium">
						{percentage}%
					</div>
				</div>
				<div className="text-muted-foreground w-full">{description}</div>
			</CardContent>
		</ShadowCard>
	);
};
