import "./Header.css"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput/SearchInput"
import FilterBar from "../FilterBar/FilterBar"
import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import NewProduct from "../newProduct/newProduct"

export default function Header(){
    const {open, setOpen, setSearch, productOpen, setProductOpen, getTotalCartItems, setNewProductOpen} = useContext(ShopContext);
    return(
        <div className="header">
                <div className="logo-input-filters">
                    <Link to="/" onClick={() => (setOpen(false), setSearch(""), setProductOpen(true), setNewProductOpen(true))}>
                    <img loading="eager" src="https://images.andrew-code.com/logo.png" alt=""/>
                    </Link>
                    <SearchInput/>
                    <div className="filters-cart">
                        <button onClick={() => setOpen(!open)}><i className="fa-solid fa-filter"></i></button> 
                        <Link className="cart-icon" to="/cart" onClick={() => (setOpen(false), setSearch(""), setProductOpen(false))} ><i className="fa-solid fa-cart-shopping"></i></Link>
                        <p>{getTotalCartItems()}</p>
                        <div className="user" onClick={() => (setOpen(false), setSearch(""), setProductOpen(false))}>
                            <Link to="/loginsignup" ><i className="fa-solid fa-user"></i></Link>
                        </div>
                    </div>
                </div>
                <FilterBar/>
                <div className="header-filters-container" style={productOpen === true ? {display: "flex"} : {display: "none"}}>
                    <div className="header-4-filters">
                    <ul>
                        <li>
                            <Link to="/telefoane" onClick={() => (setOpen(false), setSearch(""), setNewProductOpen(false))}>
                                <div className="main-category">
                                    <img loading="eager" src="https://images.andrew-code.com/images4/image1.avif" alt="" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/tableta" onClick={() => (setOpen(false), setSearch(""), setNewProductOpen(false))}>
                                <div className="main-category">
                                    <img loading="eager" src="https://images.andrew-code.com/images56/image1.jpg" alt="" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/laptop" onClick={() => (setOpen(false), setSearch(""), setNewProductOpen(false))}>
                                <div className="main-category">
                                    <img loading="eager" src="https://images.andrew-code.com/images67/image1.webp" alt="" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/smart_watch" onClick={() => (setOpen(false), setSearch(""), setNewProductOpen(false))}>
                                <div className="main-category">
                                    <img loading="eager" src="https://images.andrew-code.com/images80/image2.webp" alt="" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <NewProduct />
                </div>
            </div>
    )
}