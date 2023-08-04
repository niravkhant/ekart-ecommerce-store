import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-2.webp";
import { useContext } from "react";
import { Context } from "../../../utils/contexs";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    return (
        <div className="cart-products">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={import.meta.env.VITE_DEV_URL + item.attributes.images.data[0].attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
                        </div>
                        <div className="text">
                            <span>Qty: {item.attributes.quantity}</span>
                            {/* <span>x</span> */}
                            {/* <span>{item.attributes.price}=</span> */}
                            <span>Price: &#8377;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
