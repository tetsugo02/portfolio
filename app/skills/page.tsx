import { Header } from "@/components/atom/header";
import { LanguagesSkill } from "@/components/organism/skill/languagesSkill";
import { TechSkill } from "@/components/organism/skill/techSkill";
import { Certification } from "@/components/organism/skill/certification";
const SkillsPage = () => {
	return (
		<>
			<Header level="h1">Skills</Header>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-0 px-0">
				<TechSkill />
				<Certification />
			</div>
			<LanguagesSkill />
		</>
	);
};
export default SkillsPage;
