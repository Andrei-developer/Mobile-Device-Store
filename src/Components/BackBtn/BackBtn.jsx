import "./BackBtn.css";
import { useNavigate } from "react-router-dom";
import{ useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function BackBtn() {
    const {setOpen, setSearch, setProductOpen, setNewProductOpen} = useContext(ShopContext);
    const navigate = useNavigate();
    return(
        <div className="back-btn-container">
            <button className="back-btn" onClick={() => (navigate('/'), setOpen(false), setSearch(""), setProductOpen(true), setNewProductOpen(true))}><i class="fa-solid fa-chevron-left"></i> Inapoi</button>
        </div>
    )
}