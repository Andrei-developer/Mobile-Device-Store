import "./FourProducts.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";

export default function FourProducts(){

    const {products} = useContext(ShopContext);

    return(
        <div className="four-products">
            <ul>
                <li>
                    <Item id={products[21].id} image={products[21].image1} name={products[21].name} newPrice={products[21].newPrice} oldPrice={products[21].oldPrice}/>
                </li>
                <li>
                    <Item id={products[65].id} image={products[65].image1} name={products[65].name} newPrice={products[65].newPrice} oldPrice={products[65].oldPrice}/>
                </li>
                <li>
                    <Item id={products[79].id} image={products[79].image1} name={products[79].name} newPrice={products[79].newPrice} oldPrice={products[79].oldPrice}/>
                </li>
                <li>
                    <Item id={products[58].id} image={products[58].image1} name={products[58].name} newPrice={products[58].newPrice} oldPrice={products[58].oldPrice}/>
                </li>
                <li>
                    <Item id={products[103].id} image={products[103].image1} name={products[103].name} newPrice={products[103].newPrice} oldPrice={products[103].oldPrice}/>
                </li>
            </ul>
        </div>
    )
}