import ProductsDetail from "@/pages/products/detail/ProductsDetail";

const page = ({params} : {params: {id: number}}) => <ProductsDetail id={+params.id}/>

export default page