import ProductsDetail from "@/modules/products/detail/ProductsDetail";

const page = ({params} : {params: {id: number}}) => <ProductsDetail id={+params.id}/>

export default page