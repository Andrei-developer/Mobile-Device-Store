import "./SearchInput.css"
import { useContext } from "react";
import {ShopContext} from "../../Context/ShopContext";

export default function SearchInput(){
    const { search, searchItem } = useContext(ShopContext);
    return(
        <div className="search-input-container">
            <i className="fa-solid fa-magnifying-glass" ></i>
            <input type="text" placeholder="Cauta..." value={search} onChange={(e) => searchItem(e)} />
        </div>
        
    )
}