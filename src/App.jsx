import "./App.css"
import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";

import Header from "./Components/Header/Header"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Category from "./Pages/Category"
import LoginSignup from "./Pages/LoginSignup"
import Pay from "./Pages/Pay"
import Product from "./Pages/Product"
import Footer from "./Components/Footer/Footer"
import SearchResult from "./Components/SearchResult/SearchResult"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Termeni from "./Pages/Termeni"
import Politica from "./Pages/Politica"
import Intrebari from "./Pages/Intrebari"

export default function App(){

    const { search } = useContext(ShopContext);

    return(
        <div className="app">
            <Header/>
            <SearchResult/>
             <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/telefoane" element={<Category  category="Telefoane" title="Telefoane" categoryId={1} />} />
                <Route path="/tableta" element={<Category  category="Tableta" title="Tableta"/>} categoryId={2} />
                <Route path="/laptop" element={<Category  category="Laptop" title="Laptop"/>}  categoryId={3}/>
                <Route path="/smart_watch" element={<Category  category="Smart Watch" title="Smart Watch"/>} categoryId={4} />
                <Route path="/apple" element={<Category  category="Apple" title="Apple"/>} categoryId={5} />
                <Route path="/samsung" element={<Category  category="Samsung" title="Samsung"/>} categoryId={6} />
                <Route path="/iphone" element={<Category  category="iPhone" title="iPhone"/>} categoryId={7} />
                <Route path="/ipad" element={<Category  category="iPad" title="iPad"/>} categoryId={8} />
                <Route path="/macbook" element={<Category  category="MacBook" title="MacBook"/>} categoryId={9} />
                <Route path="/apple_watch" element={<Category  category="Apple Watch" title="Apple Watch"/>} categoryId={10} />
                <Route path="/samsung_galaxy" element={<Category  category="Samsung Galaxy" title="Samsung Galaxy"/>} categoryId={11} />
                <Route path="/loginsignup" element={<LoginSignup />} />
                <Route path="/contact"  element={<Contact open={search === "" ? "flex" : "none"}/>} />
                <Route path="/about" element={<About open={search === "" ? "flex" : "none"}/>} />
                <Route path="/termeni" element={<Termeni open={search === "" ? "flex" : "none"}/>} />
                <Route path="/politica" element={<Politica open={search === "" ? "flex" : "none"}/>} />
                <Route path="/intrebari" element={<Intrebari open={search === "" ? "flex" : "none"}/>} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/product" element={<Product />} >
                    <Route path=":id" element={<Product />} />
                </Route>
            </Routes> 
            <Footer />
        </div>
    )
}