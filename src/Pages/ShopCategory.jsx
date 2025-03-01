import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_products } = useContext(ShopContext);

    console.log("Props Category:", props.category);
    console.log("All Products:", all_products);

    if (!all_products) {
        console.error("all_products is undefined! Check if ShopContextProvider is wrapping the component.");
        return <p>Loading products...</p>;
    }

    if (!Array.isArray(all_products)) {
        console.error("all_products is not an array! Check all_product.js structure.");
        return <p>Error loading products.</p>;
    }

    const filteredProducts = all_products.filter((item) => item.category === props.category);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {filteredProducts.length}</span> out of {all_products.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort By <img src={dropdown_icon} alt="Sort Dropdown" />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Item 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
