import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();
const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setcartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map((item) => (subTotal += item.attributes.price * item.attributes.quantity));
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setcartItems(items);
    };
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setcartItems(items);
    };
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if ((type = "dec")) {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setcartItems(items);
    };

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                cartItems,
                setcartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
