import { CardContent } from "@/components/ui/card";
import { LanguageCard } from "@/components/molecules/languageCard";
import { languageLevel } from "@/constant/skills/languageLevel";
import { Header } from "@/components/atom/header";

export const LanguagesSkill = () => {
	return (
		<div className="justify-items-start w-full px-2 flex flex-col gap-4">
			<Header level="h3">Languages</Header>
			<CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-0 px-0">
				{languageLevel.map((language) => (
					<LanguageCard
						key={language.name}
						name={language.name}
						percentage={language.percentage}
						description={language.description}
					/>
				))}
			</CardContent>
		</div>
	);
};
