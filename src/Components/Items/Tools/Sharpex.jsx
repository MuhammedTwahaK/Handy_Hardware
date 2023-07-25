import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Sharpex = () => {
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
        <Link className="LinkDec" to={"/KitchenAccessories"}>
          <span className="ItemOne">KITCHEN ACCESSORIES</span>
        </Link>
        <Link className="LinkDec" to={"/Wires"}>
          {" "}
          <span className="ItemOne">WIRES & WIRE PRODUCTS</span>
        </Link>

        <Link className="LinkDec" to={"/Lockes"}>
          <span className="ItemOne">LOCKES & ACCESSORIES</span>
        </Link>

        <Link className="LinkDec KItchenBackYellow" to={"/Tools"}>
          <span className="ItemOne TextColorChangetoblck">TOOLS & AGRECO</span>
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
          src="https://wallpaperaccess.com/full/1880034.jpg"
          alt=""
        />

        <div className="ggd">
          <div className="ShopNOWDiv">
            <span className="ShopNOW">SHOP NOW</span>
          </div>
          <div className="KitechItemsTotal">
            <div className="DetailsOfKItech">
              <div className="KitechnDivD">
                <span className="KitchenTExt">Tools & Agreco</span>
              </div>
              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Tools"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/41qWMdgJzGS._SX300_SY300_QL70_FMwebp_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Spartan Spectacular Gardening
                      </span>
                      <span className="PriceDetails">₹609</span>
                      <span className="BrandDetails">Spartan</span>
                      <span className="offerDetails">Offer 25%</span>
                    </div>
                  </Link>

                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Sharpex"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/81cRyEE2nFL._SX522_.jpg"
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">
                          Sharpex 3 in 1 Multifunctional
                        </span>
                        <span className="PriceDetails">₹683</span>
                        <span className="BrandDetails">Sharpex</span>
                        <span className="offerDetails">Offer 15%</span>
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
                  <Link className="LINKLINK" to={"/Wold"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/41QZk6hbpVL._SX522_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Wold Garten Hand Scraper
                      </span>
                      <span className="PriceDetails">₹350</span>
                      <span className="BrandDetails">Wold</span>
                      <span className="offerDetails">Offer 10%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Kraft"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/41dEPibtZyL._SX522_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Kraft Seeds Trowel and Kraft
                      </span>
                      <span className="PriceDetails">₹848</span>
                      <span className="BrandDetails">Kraft</span>
                      <span className="offerDetails">Offer 30%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>
              </div>

              {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>The Sharpex 3 in 1 Multifunctional is a versatile and efficient gardening tool designed to simplify and enhance the gardening experience. This innovative device combines three essential functions into a single, compact unit, making it a must-have for gardening enthusiasts and professionals alike.

Firstly, the Sharpex 3 in 1 serves as a powerful electric leaf blower, capable of quickly and effortlessly clearing leaves, debris, and grass clippings from lawns, driveways, and garden paths. Its high-speed airflow ensures thorough cleaning, saving both time and effort.

Secondly, this tool seamlessly transforms into a reliable electric vacuum, effortlessly sucking up and collecting garden waste. Its strong suction power efficiently gathers leaves and other lightweight materials, reducing them to manageable mulch for composting or disposal.

Lastly, the Sharpex 3 in 1 doubles as a shredder, equipped with sharp blades that effectively break down branches and twigs into fine mulch. This mulch can be used to enrich the soil or as a protective ground cover in flowerbeds, conserving moisture and suppressing weed growth.

The device features a user-friendly design, with adjustable settings and a comfortable grip, ensuring ease of use and maneuverability. Its lightweight and portable nature make it convenient to carry around the garden, enabling users to reach tight corners and tricky spots.

In conclusion, the Sharpex 3 in 1 Multifunctional is an indispensable gardening tool that streamlines the leaf cleaning, vacuuming, and shredding processes. Its versatility and efficiency make it a time-saving and eco-friendly solution for maintaining a neat and healthy garden environment.</span>
</div>
</div> */}

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharpex;
