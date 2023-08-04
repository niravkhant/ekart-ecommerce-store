import Newsletter from "./Newsletter/Newsletter";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <Newsletter />
            <div className="footer-main">
                <div className="footer-contain">
                    <div className="col1">
                        <div className="title">About</div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut recusandae officiis facere repellat
                            dolorum incidunt ullam vitae expedita vero.
                        </div>
                    </div>

                    <div className="col2">
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                                Street W High Court Rd, Dharampeth, Ramdaspeth, Nagpur, Maharastra, Pin-440010, India
                            </div>
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">0712 664 9999</div>
                        </div>
                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">store@niravestore.com</div>
                        </div>
                    </div>
                    <div className="col3">
                        <div className="title">Categories</div>
                        <span className="text">Headphones</span>
                        <span className="text">Smart Watch</span>
                        <span className="text">Bluetooth Speakers</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theatre</span>
                        <span className="text">Projector</span>
                    </div>
                    <div className="col4">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Tearm & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">© 2023 All rights reserved | Designed by{" Nirav Khant "}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
