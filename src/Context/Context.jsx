import {useState, useEffect} from 'react';
import { ShopContext } from './ShopContext';

export default function Context({children}){

    const[categories, setCategories] = useState([]);
    const[products, setProducts] = useState([]);
    const[reviews, setReviews] = useState([]);
    const[search, setSearch] = useState("");

    const getDefaultCart = () => {
        let cart = {};
        for(let i = 1; i <= products.length; i++){
            cart[i] = 0;
        }
        return cart;
    };

    const [cartItems, setCartItems] = useState({});
    
    const addToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1,
  }));
};

    const removeToCart = (itemId) => {
  setCartItems((prev) => ({
    ...prev,
    [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
  }));
};

const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalItems += cartItems[item];
        }
    }
    return totalItems;
}

const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            const product = products.find((p) => Number(p.id) === Number(item));
            if (product) {
                totalAmount += product.newPrice * cartItems[item];
            }
        }
    }
    return totalAmount.toFixed(3);
}

useEffect(() => {
  setCartItems(getDefaultCart());
}, [products]);


    useEffect(() => {
        const fetchData = async () => {

            try {
                const [resCategories, resProducts, resReviews]= await Promise.all([
                    fetch(`https://mobile-api-bo3f.onrender.com/categories`,{
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                    }),
                    fetch(`https://mobile-api-bo3f.onrender.com/products`,{
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                    }),
                    fetch(`https://mobile-api-bo3f.onrender.com/reviews`,{
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                    }),
                ]);

                const [ categoriesData, productsData, reviewsData ] = await Promise.all([
                    resCategories.json(),
                    resProducts.json(),
                    resReviews.json()
                ]);

                setCategories(categoriesData);
                setProducts(productsData);
                setReviews(reviewsData);

                
            }catch(error) {
                throw new Error(error),
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const searchItem = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const findProduct = () => {
        return products.filter((e) => e.name.toLowerCase().includes(search) || e.description.toLowerCase().includes(search));
    }

    const [links, setLink] = useState("");
    const [open, setOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(true);
    const [showAllSpecs, setShowAllSpecs] = useState(false);
    const [newProductOpen, setNewProductOpen] = useState(true);

    const ContextValue = { getDefaultCart, setNewProductOpen, newProductOpen, cartItems, getTotalAmount, getTotalCartItems, removeToCart, addToCart, categories, products, reviews, setSearch, search, searchItem, findProduct, setLink, links, open, setOpen, productOpen, setProductOpen, showAllSpecs, setShowAllSpecs };
    
    localStorage.setItem("variabile", JSON.stringify(ContextValue));
    
    return(
        <ShopContext.Provider value={ContextValue}>
            {children}
        </ShopContext.Provider>
    )
}