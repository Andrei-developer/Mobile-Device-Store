import "./Css/Pay.css";
import { useContext, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";


export default function Pay(){

    const { getTotalAmount, setCartItems, getDefaultCart} = useContext(ShopContext);

    const firstName = useRef("");
    const lastName = useRef("");
    const numberCard = useRef("");
    const cvv = useRef("");
    const mmyy = useRef("");

    return(
        <div className="pay">
            <div className="pay-container">
                <div className="pay-top">
                    <p>Total</p>
                    <p>{getTotalAmount(getDefaultCart())} Lei</p>
                </div>
                <hr />
                <form action="">
                    <div className="pay-input-container">
                        <input ref={firstName} placeholder="Nume" type="text" />
                        <input ref={lastName} placeholder="Prenume" type="text" />
                    </div>
                    <div className="pay-input-container">
                        <input ref={numberCard} placeholder="Numar Card" type="text" />
                        <input ref={cvv} placeholder="CVV" type="text" />
                    </div>
                    <div className="pay-input-container">
                        <div className="pay-cards">
                            <img loading="lazy" src="https://images.andrew-code.com/cards/Alpha-Bank.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/bcr.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/bnr.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/bt.png" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/CEC-Bank.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/ing.webp" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/paypal.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/Raiffeisen-Bank.jpg" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/revolut.png" alt="" />
                            <img loading="lazy" src="https://images.andrew-code.com/cards/visa.webp" alt="" />
                        </div>
                        <input ref={mmyy} className="mmyy-input" placeholder="MM/YY" type="text" />
                    </div>
                    <div className="pay-buttons">
                        <button type="reset">Anuleaza</button>
                        <Link className="pay-btn" to="/" onClick={(event) => {
                            
                            if(firstName.current.value === "" || lastName.current.value === "" || numberCard.current.value === "" || cvv.current.value === "" || mmyy.current.value === ""){
                                alert("Completati toate campurile!");
                                event.preventDefault();
                            }else{
                                alert("Plata efectuata cu succes!");
                                setCartItems({});
                            };
                            }}>Plateste</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}