import "./Banner.scss";
import BannerImg1 from "../../../assets/banner-img.png";
import Cart from "../../Cart/Cart";
const Banner = () => {
    return (
        <>
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus blanditiis vero laudantium
                            atque, tempore ad debitis voluptatum reiciendis. Consequuntur nam cum hic. Quisquam consequatur quas
                            hic quam atque voluptates?
                        </p>
                        <div className="ctas">
                            <div className="banner-ctas">Read More</div>
                            <div className="banner-ctas v2">Shop Now</div>
                        </div>
                    </div>
                    <div className="img">
                        <img id="hero-banner" src={BannerImg1} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
