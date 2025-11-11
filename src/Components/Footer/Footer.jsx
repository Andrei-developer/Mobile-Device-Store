import "./Footer.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    const {setOpen, setSearch, setProductOpen} = useContext(ShopContext);
    return(
        <div className="footer">
        <ul onClick={() => {setProductOpen(false); window.scrollTo(0,0)}} className="footer-links">
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">Despre noi</Link></li>
            <li><Link to="/termeni">Termeni si conditii</Link></li>
            <li><Link to="/politica">Politica</Link></li>
            <li><Link to="/intrebari">Intrebari Frecvente</Link></li>
        </ul>
        <ul className="footer-links footer-icons">
            <li><a href="tel:+40712345678"><i className="fa-solid fa-phone"></i></a></li>
            <li><a href="mailto:"><i className="fa-solid fa-envelope"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
        </ul>
        <Link to="/" className="logo" onClick={() => (setOpen(false), setSearch(""), setProductOpen(true), window.scrollTo(0,0))}><img src="https://images.andrew-code.com/logo.png" alt="" /></Link>
        <p>&#169; EVOX {year}</p>
        </div>
    )
}