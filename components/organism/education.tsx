import { bioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";
import { SingleGrid } from "../atom/singleGrid";

export const Education = () => {
	const educationContent = bioContent.education;
	return (
		<div>
			<Header level="h3">Education</Header>
			<div className="m-2 border-l-2">
				{educationContent.map((item, index) => (
					<SingleGrid key={index} head={item.field} body={item.time} className="text-lg m-2 " />
				))}
			</div>
		</div>
	);
};
