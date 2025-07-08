import { getBioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";
import { useTranslation } from "react-i18next";

export const Interest = () => {
	const { t } = useTranslation("home");
	const bioContent = getBioContent(t);
	const interestContent = bioContent.interest;

	return (
		<div>
			<Header level="h3">{t("interests.title")}</Header>
			<ul className="list-disc list-inside mt-2">
				{interestContent.map((item, index) => (
					<li key={index} className="m-1 text-lg">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
