import React from "react";
import Home from "../Images/home.png";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const KitchenAccessories = () => {
  return (
    <div>
      <div className="MainDivOFHLDiv">
        <div className="HomeAndCarTBt">
          <Link to={"/"}>
            <div className="HomeLogoDiv">
              <img className="HomeLOgo" src={Home} alt="" />
            </div>
          </Link>

          <Link className="LinkDec" to={"/"}>
            <div className="LogoAndText LogoAndText1">
              <img className="Logo Logo1" src={Logo} alt="" />
              <span className="CompanyName CompanyName1">HANDY HARDWARE</span>
            </div>
          </Link>

          <div className="CarTLOgoDiv">
            <img
              className="CarTLOgo"
              src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="SecondNv">
        <Link className="LinkDec KItchenBackYellow" to={"/KitchenAccessories"}>
          <span className="ItemOne TextColorChangetoblck">
            KITCHEN ACCESSORIES
          </span>
        </Link>

        <Link className="LinkDec" to={"/Wires"}>
          {" "}
          <span className="ItemOne">WIRES & WIRE PRODUCTS</span>
        </Link>

        <Link className="LinkDec" to={"/Lockes"}>
          <span className="ItemOne">LOCKES & ACCESSORIES</span>
        </Link>

        <Link className="LinkDec" to={"/Tools"}>
          <span className="ItemOne">TOOLS & AGRECO</span>
        </Link>

        <Link className="LinkDec" to={"/Paints"}>
          <span className="ItemOne">PAINTS & RELATED ITEMS</span>
        </Link>

        <Link className="LinkDec" to={"/Roofing"}>
          <span className="ItemOne">ROOFING SHEETS</span>
        </Link>

        <Link className="LinkDec" to={"/Glass"}>
          <span className="ItemOne">GLASS & DOOR FITTINGS</span>
        </Link>

        <Link className="LinkDec" to={"/Fastners"}>
          <span className="ItemOne">FASTNERS & BOLTS</span>
        </Link>
      </div>

      <div>
        <img
          className="BGGHNBHGH"
          src="https://wallpapershome.com/images/wallpapers/kitchen-3840x2160-living-room-house-classic-elegant-decoration-4364.jpg"
          alt=""
        />

        <div className="ggd">
          <div className="ShopNOWDiv">
            <span className="ShopNOW">SHOP NOW</span>
          </div>

          <div className="KitechItemsTotal">
            <div className="DetailsOfKItech">
              <div className="KitechnDivD">
                <span className="KitchenTExt">Kitchen Accessories</span>
              </div>
              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/KitchenAccessories"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/31oGzYuN6mL._SX425_.jpg"
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">
                          Kohler Malleco Pulldown Sink Tap
                        </span>
                        <span className="PriceDetails">₹10,999</span>
                        <span className="BrandDetails">Kohler</span>
                        <span className="offerDetails">Offer 35%</span>
                      </div>
                    </Link>

                    <div className="BtinCARt">
                      <button className="BtFORcart">Cart</button>
                    </div>
                  </div>

                  <div className="BootStrapCoded">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button widthofBtn dispsdu"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Details
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div className="Dipsal">
                              <span>• Elegant, durable, efficient.</span>
                            </div>
                            <div className="Dipsal">
                              <span>• Functional design.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button widthofBtn dispsdu"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Rating
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <div className="Dipsal">
                              <img
                                className="Staret"
                                src="https://img.freepik.com/premium-vector/3d-rating-stars-icon-review-product_165488-2841.jpg?w=2000"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Vrprime"}>
                    <div className="Img1">
                      <img
                        className="ProdeuctItemOne"
                        src="https://m.media-amazon.com/images/I/71kRoOGaCjL._SX425_.jpg"
                        alt=""
                      />
                    </div>
                    <div className="DetailsDIV">
                      <span className="NameDetails">VRPRIME Knife Holder</span>
                      <span className="PriceDetails">₹799</span>
                      <span className="BrandDetails">VRPRIME</span>
                      <span className="offerDetails">Offer 20%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Amazon"}>
                    <div className="Img1">
                      <img
                        className="ProdeuctItemOne"
                        src="https://m.media-amazon.com/images/I/71xanavknUL._SX425_.jpg"
                        alt=""
                      />
                    </div>
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Amazon Brand - Solimo Cotton
                      </span>
                      <span className="PriceDetails">₹279</span>
                      <span className="BrandDetails">Amazon Brand</span>
                      <span className="offerDetails">Offer 5%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Plantex"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/8175Bh8dsxL._SX466_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Plantex Stainless Steel Triple
                      </span>
                      <span className="PriceDetails">₹1039</span>
                      <span className="BrandDetails">Plantex</span>
                      <span className="offerDetails">Offer 10%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>
              </div>

              {/* <div className='DiscriptionSide'> */}
              {/* <div className="FLomng">
<span className='LongDIS'>The Kohler Malleco Pull-down Sink Tap is a top-notch kitchen faucet that seamlessly combines aesthetics and functionality. With its sleek and contemporary design, it adds a touch of elegance to any kitchen setting, complementing various decor styles effortlessly.
The standout feature of the Malleco faucet is its pull-down sprayer, offering unrivaled versatility and convenience. The sprayer can be easily extended and maneuvered, providing a wide range of motion to reach all corners of the sink and effectively tackle various kitchen tasks. Whether it's rinsing vegetables, washing dishes, or filling up large pots, this faucet makes it a breeze.
Designed with a single-handle operation, the Malleco faucet ensures easy and precise control over water temperature and flow rate. This user-friendly design allows for effortless adjustments with one hand, catering to busy multitaskers in the kitchen.
Durability and reliability are paramount in kitchen fixtures, and the Kohler Malleco doesn't disappoint. It boasts high-quality construction, featuring a ceramic disc valve that guarantees a smooth and drip-free performance over extended periods. The faucet's robust materials also ensure resistance to corrosion and wear, even with frequent use.
Installation is straightforward, compatible with standard single or three-hole sink configurations. Some models may offer a deck plate option to cover additional holes if needed, ensuring a seamless fit with your sink setup.
In conclusion, the Kohler Malleco Pull-down Sink Tap is a top-of-the-line kitchen faucet that exudes both style and practicality. Elevate your kitchen experience with this elegant and high-performance faucet that simplifies everyday tasks and enhances the overall aesthetics of your kitchen space.</span>
</div> */}

              {/* </div> */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenAccessories;
