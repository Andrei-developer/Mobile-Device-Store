import "./Css/Product.css"
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import ProductTop from "../Components/ProductTop/ProductTop";
import ProductMiddle from "../Components/ProductMiddle/ProductMiddle";
import Recenzii from "../Components/Recenzii/Recenzii";

export default function Product(){
    const { search} = useContext(ShopContext);
    return(
        <div className="product" style={search ==="" ? {display: "flex"} : {display: "none"}}>
        <ProductTop/>
        <ProductMiddle/>
        <Recenzii/>
        </div>
    )
}