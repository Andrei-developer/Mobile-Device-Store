import "./FilterBar.css";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


export default function FilterBar(){

    const {links, setLink, open, setOpen, setProductOpen, setSearch} = useContext(ShopContext);

    return(
        <div className="filter-bar" style={{display: open ? "flex" : "none"}}>
            <ul>
                <li><Link className={"filter-link " + (links === "apple" ? "active" : "")} to="/apple" onClick={() => (setLink("apple"), setOpen(false), setProductOpen(true), setSearch(""))} >Apple</Link></li>
                <li><Link className={"filter-link " + (links === "samsung" ? "active" : "")} to="/samsung" onClick={() => (setLink("samsung"), setOpen(false), setProductOpen(true), setSearch(""))} >Samsung</Link></li>
                <li><Link className={"filter-link " + (links === "iphone" ? "active" : "")} to="/iphone" onClick={() => (setLink("iphone"), setOpen(false), setProductOpen(true), setSearch(""))} >iPhone</Link></li>
                <li><Link className={"filter-link " + (links === "ipad" ? "active" : "")} to="/ipad" onClick={() => (setLink("ipad"), setOpen(false), setProductOpen(true), setSearch(""))} >iPad</Link></li>
                <li><Link className={"filter-link " + (links === "macbook" ? "active" : "")} to="/macbook" onClick={() => (setLink("macbook"), setOpen(false), setProductOpen(true), setSearch(""))} >MacBook</Link></li>
                <li><Link className={"filter-link " + (links === "apple watch" ? "active" : "")} to="/apple_watch" onClick={() => (setLink("apple watch"), setOpen(false), setProductOpen(true), setSearch(""))} >Apple Watch</Link></li>
                <li><Link className={"filter-link " + (links === "samsung galaxy" ? "active" : "")} to="/samsung_galaxy" onClick={() => (setLink("samsung galaxy"), setOpen(false), setProductOpen(true), setSearch(""))} >Samsung Galaxy</Link></li>
            </ul>
        </div>
    )
}