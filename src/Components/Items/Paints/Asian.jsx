import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Asian = () => {
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

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Berger"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/61fPc+TvGzL._SY450_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">Berger Bison Acrylic</span>
                      <span className="PriceDetails">₹299</span>
                      <span className="BrandDetails">Bison</span>
                      <span className="offerDetails">Offer 25%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>
                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Asian"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/611oeJ1MHyL._SX425_.jpg"
                          alt=""
                        />
                      </div>
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
<span className='LongDIS'>Asian Paints ezyCR8 is a revolutionary range of innovative and easy-to-use DIY (Do-It-Yourself) solutions offered by Asian Paints, a leading paint manufacturer. This product line is designed to empower homeowners and DIY enthusiasts with convenient tools and products for various home improvement and decoration projects.

The Asian Paints ezyCR8 range includes a wide array of products that cater to different needs. One of the key highlights of this range is the ezyCR8 TruCare Wall Putty, a high-quality wall putty that provides a smooth base for painting and helps in filling minor surface imperfections. It ensures a flawless and professional finish to walls, making it an essential component of any painting project.

Another popular product in the ezyCR8 series is the ezyCR8 Apcolite Premium Emulsion, a premium-quality paint that offers a durable and washable finish on interior walls. Available in a wide range of attractive shades, it allows homeowners to create beautiful and long-lasting interiors with ease.

The ezyCR8 Stencil Kits are perfect for those looking to add artistic and decorative elements to their walls and furniture. These stencil kits come with various designs and patterns, making it simple to create eye-catching accents and designs on walls and other surfaces.

Additionally, the Asian Paints ezyCR8 range includes products like wood polish, crack filler, epoxy putty, and more, all geared towards making home improvement projects effortless and enjoyable for DIYers.

Overall, Asian Paints ezyCR8 brings the convenience of professional-grade products to the hands of homeowners and DIY enthusiasts, empowering them to transform their living spaces with ease and creativity. With its user-friendly approach and high-quality offerings, ezyCR8 has become a go-to choice for those seeking efficient and stylish DIY solutions for their home.</span>
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

export default Asian;
