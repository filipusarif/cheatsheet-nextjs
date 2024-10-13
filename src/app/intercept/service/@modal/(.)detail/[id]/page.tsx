import Modal from "@/components/core/Modal";
import { getData } from "@/services/product";

export default async function DetailProductPage(props: any){
    const {params} = props;
    const product = await getData("http://localhost:3000/api/product?id="+params.id)
    console.log(product);
    return (
        <Modal>
            <div className="w-1/2 border border-gray-300">
                <img src={product.data.image} className="w-full" alt="" />
            </div>
            
            <h1>{product.data.title}</h1>
            <h2>$ {product.data.price}</h2>
        </Modal>
    )
}