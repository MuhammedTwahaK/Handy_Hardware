import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Home from "../Images/home.png";

const Copper = () => {
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

                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Copper"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/51CC5AZPcnL._SX425_.jpg"
                          alt=""
                        />
                      </div>
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

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Tazlyn"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/71Nysc3ANqL._SX522_.jpg"
                      alt=""
                    />
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
              </div>

              {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>Copper wire is a type of electrical conductor widely used for transmitting electrical signals, power, and data in various applications. It is prized for its excellent electrical conductivity, low resistance, and overall durability, making it a popular choice in the electrical and electronics industry.

Copper's high conductivity allows it to efficiently carry electrical current, minimizing energy loss and heat generation during transmission. This property makes copper wire highly efficient and reliable, especially in applications where maintaining signal integrity is crucial.

Due to its malleability, copper wire is easy to bend and shape, making it ideal for intricate wiring installations. It can be readily soldered, crimped, or connected using various methods, ensuring a secure and stable electrical connection.

Copper wire is available in different gauges, with the gauge number indicating its thickness. Thicker wires (lower gauge numbers) have less resistance and can handle higher currents, suitable for heavy-duty applications like power distribution, industrial machinery, and large-scale electrical installations. Thinner wires (higher gauge numbers) are commonly used in electronics, telecommunications, and smaller appliances.

In addition to its excellent electrical properties, copper wire is also resistant to corrosion and has a long lifespan, ensuring reliable performance over time. It is a versatile material that finds applications in everything from household wiring, electrical motors, and transformers to telecommunications cables, audio systems, and electronics.

Overall, copper wire's exceptional conductivity, flexibility, and durability make it a fundamental component in modern electrical systems and an essential material for transmitting power and data efficiently and safely.</span>
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

export default Copper;
