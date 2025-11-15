import "./ProductTop.css";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom"
import ProductItemCard from "../ProductItemCard/ProductItemCard";

export default function ProductTop(){
    const [adev, setAdev] = useState(false);
    const {id} = useParams();
    const {products, addToCart} = useContext(ShopContext);
    const product = products.find((p) => Number(p.id) === Number(id));
    const [mainImage, setMainImage] = useState(product.image1);
    const filterByModelName = products.filter((p) => product.modelName === p.modelName);

    useEffect(() => {
        if(!product){
            setMainImage(product.image1);
        }
        setMainImage(product.image1);
    }, [id, product]);

    return(
        <div className="product-wrapper">
            <div className="product-top-mini-description-wrapper product-top-mini-description-wrapper-main">
                <div className="product-top-mini-description">
                    <div className="product-top-name product-top-name-main">
                        <h2>{product.name}</h2>
                        <p>{product.smallDescription}</p>
                    </div>
                </div>
            </div>
                <div className="product-top-content">
                    <div className="product-top-images">
                        <div className="product-top-main-image">
                            <img loading="eager" src={mainImage} alt="" />
                        </div>
                        <div className="product-top-sub-images">
                            <ul>
                                <li className={mainImage === product.image1 ? "active" : ""}><img loading="eager"  onMouseEnter={() => setMainImage(product.image1)} src={product.image1} alt="" /></li>
                                <li className={mainImage === product.image2 ? "active" : ""}><img loading="eager" className="" onMouseEnter={() => setMainImage(product.image2)} src={product.image2} alt="" /></li>
                                <li className={mainImage === product.image3 ? "active" : ""}><img loading="eager" className="" onMouseEnter={() => setMainImage(product.image3)} src={product.image3} alt="" /></li>
                                <li className={mainImage === product.image4 ? "active" : ""}><img loading="eager" className="" onMouseEnter={() => setMainImage(product.image4)} src={product.image4} alt="" /></li>
                                <li className={mainImage === product.image5 ? "active" : ""}><img loading="eager" className="" onMouseEnter={() => setMainImage(product.image5)} src={product.image5} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-top-mini-description-wrapper">
                        <div className="product-top-mini-description">
                            <div className="product-top-name">
                                <h2>{product.name}</h2>
                                <p>{product.smallDescription}</p>
                            </div>
                            <div className="product-top-price" >
                                <p>{product.newPrice} Lei</p>
                                <p>{product.oldPrice} Lei</p>
                            </div>
                            <div className="product-top-garantie">
                                <p>Garantie: 12 luni</p>
                                <p>Profita acum</p>
                            </div>
                            <p className="truck-fast"><i className="fa-solid fa-truck-fast"></i> Livrare in 2-3 zile</p>
                            <button className="add-to-cart" onClick={() => {addToCart(product.id); setAdev(!adev); setTimeout(() => {setAdev(adev)}, 100)}}>Adauga in cos</button>
                            <div style={{display: adev === false ? "none" : ""}} className="animation"><i className="fa-solid fa-plus"></i></div>
                        </div>
                    </div>
                </div>
                <div className="product-top-same-name">
                    <ul>
                        {filterByModelName.map((p) => (
                            <ProductItemCard key={p.id} image1={p.image1} id={p.id} color={p.color}/>
                        ))}
                    </ul>
                </div>
        </div>
    )
}