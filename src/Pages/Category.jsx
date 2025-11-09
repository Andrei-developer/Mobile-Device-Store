import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import Item from '../Components/Item/Item';
export default function Category(props){

const {categories, products, search} = useContext(ShopContext);

const productId = categories.find((ctgry) => (ctgry.category === props.category));
const filterProducts = products.filter((prdcts) => (prdcts.category === Number(productId.id) || (prdcts.categoryModel === Number(productId.id)) || (prdcts.categoryBrand === Number(productId.id))));

if(search === ""){
    return(
        <div>
            <div className="shop">
                <div className="shop-container">
                    {filterProducts.map((p) => {
                        if(Number(p.id) !== 111)
                            return(
                                <Item key={p.id} id={p.id} image={p.image1} name={p.name} newPrice={p.newPrice} oldPrice={p.oldPrice}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}else{
    return(
        <></>
    )
}
}