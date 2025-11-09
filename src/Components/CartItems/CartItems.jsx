import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { useContext, useRef } from "react";
import {Link} from "react-router-dom";

export default function CartItems(){

    const { products, getTotalAmount, removeToCart, cartItems} = useContext(ShopContext);
    const inputValue = useRef("");
    return(
        <div className="cart-items">
            <div className="cart-items-header">
                <p>Produs</p>
                <p>Nume</p>
                <p>Pret</p>
                <p>Cantitate</p>
                <p>Total</p>
                <p>Sterge</p>
            </div>
            <hr />
            {products.map((item) => {
                if(cartItems[item.id] > 0){
                return(
                    <div className="cart-item" key={item.id} id={item.id}>
                        <Link to={"/product/" + item.id}><img loading="lazy" src={item.image1} alt="" /></Link>
                        <p>{item.name}</p>
                        <p>{item.newPrice} Lei</p>
                        <p>{cartItems[item.id]}</p>
                        <p>{(item.newPrice * cartItems[item.id]).toFixed(3)} Lei</p>
                        <button onClick={() => removeToCart(item.id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                )
            }
            })}
            <hr />
            {getTotalAmount() > 0 && <div className="total-amount"><p>Total: {getTotalAmount()} Lei</p></div>}
            {getTotalAmount() > 0 &&
            <div className="promo-buy">
                <div className="promo-code">
                    <input ref={inputValue} type="text" placeholder="Cod de promotie" />
                    <button onClick={() => inputValue.current.value === "" ? alert("Introduceti codul") : (alert("Codul a fost aplicat"), inputValue.current.value = "")}>Aplica</button>
                </div>
                    <Link to="/pay" className="buy">Cumpara Acum</Link>
            </div>}
            
        </div>
    )
}