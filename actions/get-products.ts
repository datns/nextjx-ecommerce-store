import {Billboard, Product} from "@/types";
import qs from "querystring";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryId?: string
	colorId?: string
	sizeId?: string
	isFeatured?: boolean
}
const getProducts = async (query: Query): Promise<Product[]> => {
	const _query = qs.stringify({
		colorId: query.colorId,
		sizeId: query.sizeId,
		categoryId: query.categoryId,
		isFeatured: query.isFeatured,
	})
	const res = await fetch(`${URL}?${_query}`);
	return res.json();
};

export default getProducts;
