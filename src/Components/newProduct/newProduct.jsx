import "./newProduct.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function NewProduct(){
    const { search, setProductOpen, setSearch } = useContext(ShopContext);
    return(
        <div className="new-product-section" style={search !== "" ? {display: "none"} : {display: "block"}}>
            <div className="new-product">
                <div className="new-product-container">
                    <img src="https://images.andrew-code.com/iphone_17_pro.png" alt="" />
                    <div className="new-product-text">
                        <h2>Noul</h2>
                        <h1>iPhone 17 Pro</h1>
                        <h3>La doar <span>5.999</span> Lei</h3>
                        <Link to="/product/111" className="new-product-link" onClick={() => (setProductOpen(false), setSearch(""), window.scrollTo(0,0))}>Vezi Acum <i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}