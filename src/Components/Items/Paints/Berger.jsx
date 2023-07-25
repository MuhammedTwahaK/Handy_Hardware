import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Berger = () => {
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

        <Link className="LinkDec" to={"/Tools"}>
          <span className="ItemOne">TOOLS & AGRECO</span>
        </Link>

        <Link className="LinkDec KItchenBackYellow" to={"/Paints"}>
          <span className="ItemOne TextColorChangetoblck">
            PAINTS & RELATED ITEMS
          </span>
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
          src="https://img.freepik.com/premium-photo/vertical-colored-boxes-wall-square-pieces-as-background-wallpaper-creative-base-design-stripes_27525-17517.jpg?w=2000"
          alt=""
        />

        <div className="ggd">
          <div className="ShopNOWDiv">
            <span className="ShopNOW">SHOP NOW</span>
          </div>
          <div className="KitechItemsTotal">
            <div className="DetailsOfKItech">
              <div className="KitechnDivD">
                <span className="KitchenTExt">Paints & Related Items</span>
              </div>
              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Paints"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/61lFeSnkUtL._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Dulux DIY Simply Refresh
                      </span>
                      <span className="PriceDetails">₹878</span>
                      <span className="BrandDetails">Dulux</span>
                      <span className="offerDetails">Offer 28%</span>
                    </div>
                  </Link>

                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Berger"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/61fPc+TvGzL._SY450_.jpg"
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">
                          Berger Bison Acrylic
                        </span>
                        <span className="PriceDetails">₹299</span>
                        <span className="BrandDetails">Bison</span>
                        <span className="offerDetails">Offer 25%</span>
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
                  <Link className="LINKLINK" to={"/Asian"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/611oeJ1MHyL._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">Asian Paints ezyCR8</span>
                      <span className="PriceDetails">₹693</span>
                      <span className="BrandDetails">Asian</span>
                      <span className="offerDetails">Offer 18%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Emulsion"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/41fT2koDa9L._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Admire Paints Classic Ultra
                      </span>
                      <span className="PriceDetails">₹331</span>
                      <span className="BrandDetails">Emulsion</span>
                      <span className="offerDetails">Offer 21%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>
              </div>

              {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>Berger Bison Acrylic is a premium quality interior emulsion paint offered by Berger Paints, a leading name in the paint industry. This acrylic-based paint is specifically designed to provide a smooth, durable, and long-lasting finish on interior walls and ceilings.

The key feature of Berger Bison Acrylic is its advanced water-based acrylic technology, which ensures excellent adhesion to various surfaces and resistance to cracking, peeling, and fading. It offers a high degree of washability, making it easy to clean and maintain the painted surfaces, keeping them looking fresh and vibrant for years.

The paint is available in a wide range of attractive shades, allowing homeowners and professionals to select the perfect color to match their interior decor preferences. Whether it's a modern and contemporary look or a classic and traditional ambiance, Berger Bison Acrylic offers versatile options to suit various styles.

Berger Bison Acrylic is known for its smooth application, providing an even and consistent coverage with each coat. It dries quickly, reducing downtime during painting projects and enabling faster completion of interior renovation work.

Additionally, this paint is formulated with low volatile organic compounds (VOCs), contributing to better indoor air quality and making it a more environmentally friendly choice.

Overall, Berger Bison Acrylic stands out as a reliable and high-performance interior emulsion paint. Its advanced technology, color options, and ease of application make it an ideal choice for achieving a beautiful and durable finish on interior walls and ceilings, enhancing the aesthetics and ambiance of any living space.</span>
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

export default Berger;
