import "./Header.scss";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../utils/contexs";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);
    const navigate = useNavigate();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 300) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`header-main ${scrolled ? "stickey-header" : ""}`}>
                <div className="header-containt">
                    <ul className="nav-left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="header-logo">
                        <h1 onClick={() => navigate("/")}>Nirav E Store</h1>
                    </div>
                    <div className="nav-right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />

                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </div>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
