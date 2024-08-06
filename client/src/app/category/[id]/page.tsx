import { CategoryPage } from "@/pages/category";

const page = ({ params }: { params: { id: number } }) => (<CategoryPage id={params.id}/>)

export default page
