import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Tazlyn = () => {
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
        <Link className="LinkDec KItchenBackYellow" to={"/Wires"}>
          {" "}
          <span className="ItemOne TextColorChangetoblck">
            WIRES & WIRE PRODUCTS
          </span>
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
          src="https://wallpapercave.com/wp/wp7462860.jpg"
          alt=""
        />

        <div className="ggd">
          <div className="ShopNOWDiv">
            <span className="ShopNOW">SHOP NOW</span>
          </div>

          <div className="KitechItemsTotal">
            <div className="DetailsOfKItech">
              <div className="KitechnDivD">
                <span className="KitchenTExt">Wires & Wire Products</span>
              </div>
              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Wires"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/71ehzo0+0KL._SX466_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">16/2 Speaker Wire</span>
                      <span className="PriceDetails">₹8662</span>
                      <span className="BrandDetails">Speaker</span>
                      <span className="offerDetails">Offer 10%</span>
                    </div>
                  </Link>

                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Copper"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/51CC5AZPcnL._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">Copper Wire</span>
                      <span className="PriceDetails">₹399</span>
                      <span className="BrandDetails">Copper</span>
                      <span className="offerDetails">Offer 5%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Piergiacomi"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/41tR8qQvKrL._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        Piergiacomi® Flush Cut
                      </span>
                      <span className="PriceDetails">₹640</span>
                      <span className="BrandDetails">Piergiacomi®</span>
                      <span className="offerDetails">Offer 15%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>
                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Tazlyn"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/71Nysc3ANqL._SX522_.jpg"
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">
                          TAZLYN Twist and tie Wire
                        </span>
                        <span className="PriceDetails">₹199</span>
                        <span className="BrandDetails">TAZLYN</span>
                        <span className="offerDetails">Offer 3%</span>
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
              </div>

              {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>TAZLYN Twist and Tie Wire is a versatile and practical wire solution designed for various applications around the home, garden, and beyond. This innovative wire combines the flexibility of twist ties with the strength and durability of traditional wire, making it an indispensable tool for organization and fastening tasks.

The TAZLYN Twist and Tie Wire features a unique design that allows it to be easily twisted and secured in place, providing a reliable hold for different objects. The wire is often coated with a soft and pliable material, ensuring a gentle grip on delicate items while remaining sturdy enough for more robust applications.

One of the main advantages of TAZLYN Twist and Tie Wire is its adaptability. It can be utilized for a wide range of purposes, such as bundling cables, organizing gardening tools, securing plants to support stakes, or even crafting creative DIY projects. Its ability to be quickly adjusted and repositioned makes it ideal for temporary or changing setups.

The wire's weather-resistant properties make it suitable for outdoor use, enduring various environmental conditions without compromising its functionality. Its durability ensures that it can be reused multiple times, making it a sustainable and cost-effective solution.

Whether you're a gardener, DIY enthusiast, or just need an efficient way to organize and secure items, TAZLYN Twist and Tie Wire provides a reliable and convenient solution. Its flexibility, strength, and reusable nature make it a go-to wire for a wide range of everyday tasks, simplifying your projects and helping you stay organized with ease.</span>
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

export default Tazlyn;
