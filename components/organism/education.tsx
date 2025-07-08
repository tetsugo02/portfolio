import { getBioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";
import { SingleGrid } from "../atom/singleGrid";
import { useTranslation } from "react-i18next";

export const Education = () => {
	const { t } = useTranslation("home");
	const bioContent = getBioContent(t);
	const educationContent = bioContent.education;

	return (
		<div>
			<Header level="h3">{t("education.title")}</Header>
			<div className="m-2 border-l-2">
				{educationContent.map((item, index) => (
					<SingleGrid key={index} head={item.field} body={item.time} className="text-lg m-2 " />
				))}
			</div>
		</div>
	);
};
