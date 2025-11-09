import {useContext} from "react";
import {ShopContext} from "../Context/ShopContext";
import "./Css/Shop.css"
import Item from "../Components/Item/Item";

export default function Shop(){

    const {search, products} = useContext(ShopContext);
    if(search === ""){
        return(
            <div className="shop">
                <div className="shop-container">
                    {products.map((p) => {
                            if(Number(p.id) !== 111){
                                return(
                                    <Item key={p.id } id={p.id} image={p.image1} name={p.name} newPrice={p.newPrice} oldPrice={p.oldPrice}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    } else {
        <></>
    }
    
}