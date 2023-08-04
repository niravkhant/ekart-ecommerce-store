import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/contexs";
const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            // console.log(res);
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            // console.log(res);
            setCategories(res);
        });
    };
    return (
        <>
            <div>
                <Banner />
                <div className="main-content">
                    <div className="layout">
                        <Category categories={categories} />
                        <Products products={products} headingText="Popular Products" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
