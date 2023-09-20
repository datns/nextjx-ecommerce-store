import Container from "@/components/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const Home = async () => {
	const products = await getProducts({isFeatured: true})
	const billboard = await getBillboard("51b1bc2a-719f-47fd-97ae-cd4ada422105")


	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard}/>
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Product" items={products}/>
				</div>
			</div>

		</Container>
	)
}

export default Home;
