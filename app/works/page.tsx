import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WorkBlock } from "@/components/organism/works/workBlock";
const WorksPage = () => {
	return (
		<>
			<Tabs defaultValue="all" className="w-full h-fit m-auto lg:w-3/4 ">
				<TabsList className="grid w-full grid-cols-2 grid-rows-2 h-1/10 lg:grid-cols-4 lg:grid-rows-1 lg:h-1/20">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="research">Research</TabsTrigger>
					<TabsTrigger value="development">Development</TabsTrigger>
					<TabsTrigger value="other">Other</TabsTrigger>
				</TabsList>
				<TabsContent value="all" className="w-full h-full ">
					<div className="w-full h-full flex flex-wrap gap-4 justify-between mt-2">
						<WorkBlock
							title="Progate Hackthon"
							description="2025年３月に行われたprogateハッカソンに参加し、AWS賞をもらいました。"
						/>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};
export default WorksPage;
