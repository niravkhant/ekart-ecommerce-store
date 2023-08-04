import "./SingleProduct.scss";
import { FaCartPlus, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/contexs";

const SingleProduct = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart } = useContext(Context);

    if (!data) return;
    const product = data.data[0].attributes;

    const increment = () => {
        setQuantity(quantity + 1);
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="single-product-main">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={import.meta.env.VITE_DEV_URL + product.images.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(data.data[0], quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider"></span>

                        <div className="info-item">
                            <span className="text-bold">
                                Category:&nbsp;
                                <span> {product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
