import React from "react";
import Home from "../Images/home.png";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const Lockes = () => {
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

        <Link className="LinkDec KItchenBackYellow" to={"/Lockes"}>
          <span className="ItemOne TextColorChangetoblck">
            LOCKES & ACCESSORIES
          </span>
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
          src="https://yaleonline.in/cdn/shop/products/5_21b88d47-a027-42ae-8361-c5eeed0ee5d7.jpg?v=1682082829&width=1946"
          alt=""
        />

        <div className="ggd">
          <div className="ShopNOWDiv">
            <span className="ShopNOW">SHOP NOW</span>
          </div>
          <div className="KitechItemsTotal">
            <div className="DetailsOfKItech">
              <div className="KitechnDivD">
                <span className="KitchenTExt">Lockes & Accessories</span>
              </div>
              {/* <div className='IT'> */}
              <div className="ProductDivds">
                <div className="LAstLEfsft">
                  <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/Lockes"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src="https://m.media-amazon.com/images/I/61x3n5emIvL._SX425_.jpg"
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">Generic Hi-Tech-S67</span>
                        <span className="PriceDetails">₹2775</span>
                        <span className="BrandDetails">Generic</span>
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
                  <Link className="LINKLINK" to={"/CarFrill"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/31o4p1wARuL._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">CarFrill Pedal Lock</span>
                      <span className="PriceDetails">₹799</span>
                      <span className="BrandDetails">CarFrill</span>
                      <span className="offerDetails">Offer 10%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Generic"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/61Tlp48CJ3L._SX425_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">Generic Locks Luggage</span>
                      <span className="PriceDetails">₹1199</span>
                      <span className="BrandDetails">Generic</span>
                      <span className="offerDetails">Offer 5%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                <div className="ImgANdiTemsDeatilsBra">
                  <Link className="LINKLINK" to={"/Rjvon"}>
                    <img
                      className="ProdeuctItemOne"
                      src="https://m.media-amazon.com/images/I/51eK+c0FUeL._SY450_.jpg"
                      alt=""
                    />
                    <div className="DetailsDIV">
                      <span className="NameDetails">
                        R.J.VON - Univarsal Bike
                      </span>
                      <span className="PriceDetails">₹255</span>
                      <span className="BrandDetails">R.J.VON</span>
                      <span className="offerDetails">Offer 15%</span>
                    </div>
                  </Link>
                  <div className="BtinCARt">
                    <button className="BtFORcart">Cart</button>
                  </div>
                </div>

                {/* <div className='DiscriptionSide'>
  <div className="FLomng">
<span className='LongDIS'>The Generic Hi-Tech-S67 is a versatile and affordable smartphone that offers a range of features for everyday use. As a generic device, it combines functionality with cost-effectiveness, making it an attractive option for budget-conscious consumers.

The Hi-Tech-S67 is equipped with a moderate-sized display, usually ranging from 5 to 6 inches, providing a clear and vibrant viewing experience for multimedia and apps. Its user-friendly interface allows for smooth navigation and multitasking, ensuring a satisfactory user experience.

Under the hood, the Hi-Tech-S67 is powered by a capable processor, often accompanied by sufficient RAM to handle everyday tasks, such as web browsing, social media, and light gaming. While not suitable for heavy gaming or resource-intensive applications, it performs well for general use.

The device usually features a dual-camera setup, with a primary lens for regular photography and a secondary lens for depth sensing. This allows users to capture decent photos and achieve bokeh effects in portrait shots.

With regard to connectivity, the Hi-Tech-S67 typically supports standard options like Wi-Fi, Bluetooth, and 4G LTE, ensuring seamless connectivity on the go.

The smartphone's storage capacity varies, but it often includes expandable storage via a microSD card slot, providing extra space for photos, videos, and apps.

Overall, the Generic Hi-Tech-S67 is a practical smartphone choice for those seeking basic functionality at an affordable price. It is well-suited for casual users, students, or as a backup device, offering decent performance and essential features without breaking the bank.</span>
</div>
</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lockes;
