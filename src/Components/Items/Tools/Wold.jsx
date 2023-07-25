import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Wold = () => {
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

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Sharpex"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/81cRyEE2nFL._SX522_.jpg"
                      alt=""
                    />
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
                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Wold"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/41QZk6hbpVL._SX522_.jpg"
                          alt=""
                        />
                      </div>
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
<span className='LongDIS'>The WOLF-Garten Hand Scraper is a premium and indispensable gardening tool designed to facilitate various tasks in the garden. With its exceptional craftsmanship and ergonomic design, this hand scraper has become a favorite among gardening enthusiasts and professionals alike.

The hand scraper features a sturdy and sharp stainless steel blade that efficiently removes tough weeds, moss, and debris from the soil surface and between paving stones. Its robust construction ensures longevity and durability, making it suitable for heavy-duty use without compromising on performance.

The tool's innovative push-pull motion allows users to clear weeds and debris effectively with minimal effort. The sharp blade glides smoothly through the soil, cutting weeds at the roots, preventing re-growth, and promoting a healthier garden environment.

The WOLF-Garten Hand Scraper's handle is designed with comfort in mind, featuring a soft-grip and ergonomic shape that reduces hand fatigue during prolonged use. Additionally, the handle is compatible with other WOLF-Garten tools, allowing for easy interchangeability and versatility within the WOLF-Garten gardening system.

Furthermore, the hand scraper's compact size and lightweight design make it convenient to carry around the garden, making it suitable for various gardening tasks and hard-to-reach areas.

In conclusion, the WOLF-Garten Hand Scraper is a top-tier gardening tool that combines efficiency, durability, and comfort. Its sharp blade and ergonomic design make it an essential companion for any gardener seeking to maintain a pristine and weed-free outdoor space with ease and precision.</span>
</div>
</div>

</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wold;
