import { bioContent } from "@/data/bio/bioContent";
import { Header } from "../atom/header";

export const Interest = () => {
	const interestContent = bioContent.interest;

	return (
		<div>
			<Header level="h3">Interest</Header>
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
