import "./ProductMiddle.css"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom"
import FourProducts from "../FourProducts/FourProducts"
import DeviceSpecifications from "../DeviceSpecifications/DeviceSpecifications";

export default function ProductMiddle(){
    const {id} = useParams();
    const {products} = useContext(ShopContext);
    const product = products.find((p) => Number(p.id) === Number(id));
    return(
        <div className="product-middle">
            <div className="product-middle-description">
                <h2>Descriere {product.name}</h2>
                <p>{product.description}</p>
            </div>
            <DeviceSpecifications />
            <h2>Produse similare</h2>
            <FourProducts />
        </div>
    )
}