import "./SearchResult.css";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import Item from "../Item/Item";

export default function SearchResult() {

    const {search, findProduct} = useContext(ShopContext);

    const filtreaza = findProduct();
    
    if(search.length === 0){
        return(
            <div className="no-results">
            </div>
        )
    }

    if(filtreaza.length === 0){
        return(
            <div className="no-results">
                <h1>product not found</h1>
            </div>
        )
    }

    return(
            <div className="shop">
                <div className="shop-container">
                        {filtreaza.map((p) => (
                            <Item key={p.id} id={p.id} image={p.image1} name={p.name} newPrice={p.newPrice} oldPrice={p.oldPrice}/>
                        ))
                    }
                </div>
            </div>
    )
}