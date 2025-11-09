import "./Recenzii.css"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";

export default function Recenzii(){
    const {id} = useParams();
    const {reviews} = useContext(ShopContext);
    const productReviews = reviews.filter((r) => Number(r.productId) === Number(id));
    return(
        <div className="recenzii">
            <h2>Recenzii</h2>
            {productReviews.map((p) => (
                <div key={p.id} id={p.id} className="recenzie">
                    <div className="rating">
                        <h3>{p.name}</h3>
                        {Array.from({ length: p.rating}, (_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                    ))}
                    </div>
                    <p>{p.comment}</p>
                </div>
            ))}
        </div>
    )
}