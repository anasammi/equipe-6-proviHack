import { products } from "../../data/Products"
import { Product } from "./styled";


export default function ProductCard() {
    
    const renderProduct = products.map(product => {
        return (
            <Product src={product.image} alt = "Imagem do Produto" key={product.id}/>
        )
    });
    
    return (
        renderProduct
    )
};