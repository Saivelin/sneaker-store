import { CategoryPage } from "@/modules/category";

const page = ({ params }: { params: { id: number } }) => (<CategoryPage id={params.id}/>)

export default page
