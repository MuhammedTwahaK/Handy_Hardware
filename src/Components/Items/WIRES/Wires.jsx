import React from "react";
import Home from "../Images/home.png";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import WirePro from "./WirePro";
import {Hardware} from "../../../Prodect"



const Wires = () => {
  return (
    <div>
      {/* <div className="MainDivOFHLDiv">
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
      </div> */}

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




              {
                        Hardware.map((product)=>(
                          <WirePro data={product}/>
                        ))
                      }




              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="LAstLEfsft">
                  {/* <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Wires"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/71ehzo0+0KL._SX466_.jpg"
                          alt=""
                        />
                      </div>
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
                  </div> */}



                  {/* <div className="BootStrapCoded">
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
                  </div> */}



                </div>

                {/* <div className="ImgANdiTemsDeatilsBra">
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
                </div> */}

                {/* <div className="ImgANdiTemsDeatilsBra">
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
                </div> */}

                {/* <div className="ImgANdiTemsDeatilsBra">
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
                </div> */}
              </div>

              {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>16/2 speaker wire refers to a specific type of electrical wire commonly used for connecting speakers to audio equipment. The "16" indicates the wire gauge or thickness, while the "2" indicates that there are two conductors within the wire, typically color-coded for easy identification.

The wire gauge is crucial in determining the wire's ability to handle electrical current and its resistance. In this case, the 16-gauge wire is commonly used for short to medium-length speaker connections in home audio setups or small-scale sound systems. It strikes a balance between performance and cost-effectiveness.

The 16/2 speaker wire is often made from copper, known for its excellent conductivity, low resistance, and durability. Copper is a popular choice because it efficiently carries the electrical signals between the amplifier and the speakers, ensuring minimal signal loss and high-quality audio transmission.

When setting up speakers, it's essential to consider the length of the wire run. For short distances, like within a room or between nearby devices, the 16/2 speaker wire is more than sufficient to deliver clear and accurate sound. However, for longer runs, thicker wires with lower gauge numbers may be required to maintain signal integrity over greater distances.

In conclusion, the 16/2 speaker wire is a versatile and commonly used choice for connecting speakers in various audio setups. Its 16-gauge thickness and two-conductor design offer a reliable and cost-effective solution for short to medium-length speaker connections, delivering quality sound performance for your home entertainment needs.</span>
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

export default Wires;
