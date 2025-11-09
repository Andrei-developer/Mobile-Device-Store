import "./ProductItemCard.css"
import {Link} from "react-router-dom"

export default function ProductItemCard(props){
    return(
        <li className="product-item-card">
            <Link className="product-item-card-link" to={`/product/${props.id}`}>
                <img src={props.image1} alt="" />
                <p>{props.color}</p>
            </Link>
        </li>
    )
}