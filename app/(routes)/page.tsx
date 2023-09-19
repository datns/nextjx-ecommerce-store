import Container from "@/components/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";

export const revalidate = 0;

const Home = async () => {
	const billboard = await getBillboard("51b1bc2a-719f-47fd-97ae-cd4ada422105")

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
			</div>
		</Container>
	)
}

export default Home;
