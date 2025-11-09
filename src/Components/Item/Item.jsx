import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

export default function Item(props){
    const { setProductOpen, setSearch } = useContext(ShopContext);
    return(
        <div id={props.id} key={props.id} className="item" onClick={() => (setProductOpen(false), setSearch(""), window.scrollTo(0,0))}>
            <Link className="item-link" to={`/product/${props.id}`}>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="price-details">
                <p>{props.newPrice} Lei</p>
                <p>{props.oldPrice} Lei</p>
            </div>
            </Link>
        </div>
    )
}