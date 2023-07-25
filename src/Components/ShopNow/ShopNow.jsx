import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  const Shop = [
    {
      img: "https://m.media-amazon.com/images/I/31oGzYuN6mL._SX425_.jpg",
      name: "Kohler Malleco Pulldown Sink Tap",
      price: "₹10,999",
      brand: "Kohler",
      offer: "Offer 35%",
    },
    {
      img: "https://m.media-amazon.com/images/I/71kRoOGaCjL._SX425_.jpg",
      name: "VRPRIME Knife Holder",
      price: "₹799",
      brand: "VRPRIME",
      offer: "Offer 20%",
    },
    {
      img: "https://m.media-amazon.com/images/I/71xanavknUL._SX425_.jpg",
      name: "Amazon Brand - Solimo Cotton",
      price: "₹279",
      brand: "Amazon Brand",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/8175Bh8dsxL._SX466_.jpg",
      name: "Plantex Stainless Steel Triple",
      price: "₹1,039",
      brand: "Plantex",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/71ehzo0+0KL._SX466_.jpg",
      name: "16/2 Speaker Wire",
      price: "₹8662",
      brand: "Speaker",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/51CC5AZPcnL._SX425_.jpg",
      name: "Copper Wire",
      price: "₹399",
      brand: "Copper",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41tR8qQvKrL._SX425_.jpg",
      name: "Piergiacomi® Flush Cut",
      price: "₹640",
      brand: "Piergiacomi®",
      offer: "Offer 15%",
    },
    {
      img: "https://m.media-amazon.com/images/I/71Nysc3ANqL._SX522_.jpg",
      name: "TAZLYN Twist and tie Wire",
      price: "₹199",
      brand: "TAZLYN",
      offer: "Offer 3%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61x3n5emIvL._SX425_.jpg",
      name: "Generic Hi-Tech-S67",
      price: "₹2775",
      brand: "Generic",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/31o4p1wARuL._SX425_.jpg",
      name: "CarFrill Pedal Lock",
      price: "₹799",
      brand: "CarFrill",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61Tlp48CJ3L._SX425_.jpg",
      name: "Generic Locks Luggag",
      price: "₹1199",
      brand: "Generic",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/51eK+c0FUeL._SY450_.jpg",
      name: "R.J.VON - Univarsal Bike",
      price: "₹255",
      brand: "R.J.VON",
      offer: "Offer 15%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41qWMdgJzGS._SX300_SY300_QL70_FMwebp_.jpg",
      name: "Spartan Spectacular Gardening",
      price: "₹609",
      brand: "Spartan",
      offer: "Offer 25%",
    },
    {
      img: "https://m.media-amazon.com/images/I/81cRyEE2nFL._SX522_.jpg",
      name: "Sharpex 3 in 1 Multifunctional",
      price: "₹683",
      brand: "Sharpex",
      offer: "Offer 15%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41QZk6hbpVL._SX522_.jpg",
      name: "Wold Garten Hand Scraper",
      price: "₹350",
      brand: "Wold",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41dEPibtZyL._SX522_.jpg",
      name: "Kraft Seeds Trowel and Kraft",
      price: "₹848",
      brand: "Kraft",
      offer: "Offer 30%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61lFeSnkUtL._SX425_.jpg",
      name: "Dulux DIY Simply Refresh",
      price: "₹878",
      brand: "Dulux",
      offer: "Offer 28%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61fPc+TvGzL._SY450_.jpg",
      name: "Berger Bison Acrylic",
      price: "₹299",
      brand: "Bison",
      offer: "Offer 25%",
    },
    {
      img: "https://m.media-amazon.com/images/I/611oeJ1MHyL._SX425_.jpg",
      name: "Asian Paints ezyCR8",
      price: "₹698",
      brand: "Asian",
      offer: "Offer 18%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41fT2koDa9L._SX425_.jpg",
      name: "Admire Paints Classic Ultra",
      price: "₹331",
      brand: "Emulsion",
      offer: "Offer 21%",
    },
    {
      img: "https://m.media-amazon.com/images/I/81SxSJMe0tL._SX522_.jpg",
      name: "HIPPO - HDPE Fabric 85%",
      price: "₹745",
      brand: "HIPPO",
      offer: "Offer 20%",
    },
    {
      img: "https://m.media-amazon.com/images/I/31jFf1VKc2L.jpg",
      name: "Roofing Solutions",
      price: "₹8000",
      brand: "Generic",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/4115faueVpL._SX466_.jpg",
      name: "Tarang Steel,Coloured",
      price: "₹7599",
      brand: "Tarang",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/31yx7+HbYgL.jpg",
      name: "S.M.M. Sahul Hameed",
      price: "₹6489",
      brand: "Sahul",
      offer: "Offer 25%",
    },
    {
      img: "https://m.media-amazon.com/images/I/31krOOAAfyL.jpg",
      name: "Sakar Stainless Steel",
      price: "₹1749",
      brand: "Sakar",
      offer: "Offer 1%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41FcTz4ob4L._SX466_.jpg",
      name: "Taj Products Premium",
      price: "₹999",
      brand: "Taj",
      offer: "Offer 10%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61k0FeEuWHL._SX569_.jpg",
      name: "Soul Craft Altis Zinc",
      price: "₹2100",
      brand: "Soul Craft",
      offer: "Offer 5%",
    },
    {
      img: "https://m.media-amazon.com/images/I/81WyUgUH-9L._SX425_.jpg",
      name: "RAB Floor Spring Combo",
      price: "₹10,250",
      brand: "RAB",
      offer: "Offer 50%",
    },
    {
      img: "https://m.media-amazon.com/images/I/61gQPcwU2OL._SX522_.jpg",
      name: "MEC® Butterfly Wing",
      price: "₹1090",
      brand: "Butterfly",
      offer: "Offer 28%",
    },
    {
      img: "https://m.media-amazon.com/images/I/81W5UsdlmlL._SX425_.jpg",
      name: "Pure Source India",
      price: "₹399",
      brand: "CarFrill",
      offer: "Offer 31%",
    },
    {
      img: "https://m.media-amazon.com/images/I/91uyf0EDRYL._SX522_.jpg",
      name: "Anchor Fasteners",
      price: "₹249",
      brand: "Anchor",
      offer: "Offer 16%",
    },
    {
      img: "https://m.media-amazon.com/images/I/41ArgJ1tJ1L._SX466_.jpg",
      name: "Heavy Duty Concrete",
      price: "₹1296",
      brand: "Concrete",
      offer: "Offer 15%",
    },
  ];
  return (
    <div>
      <div className="MainDivOFHLDiv shadowforcartshop">
        <div className="HomeAndCarTBt">
          <Link to={"/"}>
            <div className="HomeLogoDiv">
              <img
                className="HomeLOgo"
                src="http://localhost:3000/static/media/home.5c4a069e2fa95a6c90d2.png"
                alt=""
              />
            </div>
          </Link>

          <Link className="LinkDec" to={"/"}>
            <div className="LogoAndText LogoAndText1">
              <img
                className="Logo Logo1"
                src="data:image/png;base64,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"
                alt=""
              />
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

      <div className="ShopNOWDiv padidingofshopNow">
        <span className="ShopNOW">SHOP NOW</span>
      </div>

      <div className="GridCenter2In2">
        {Shop.map((Buy) => (
          <div className="ImgANdiTemsDeatilsBra TotalItemInCl">
            <img className="ProdeuctItemOne ImdagInMEidaquery" src={Buy.img} alt="" />
            <div className="DetailsDIV">
              <span className="NameDetails NameDetailsMedia">{Buy.name}</span>
              <span className="PriceDetails PriceDetailsMedia">{Buy.price}</span>
              <span className="BrandDetails BrandDetailsMedia">{Buy.brand}</span>
              <span className="offerDetails offerDetailsMedia">{Buy.offer}</span>
            </div>
            <div className="BtinCARt BtinCARtMEDIa">
              <button className="BtFORcart BtFORcartMediaa">Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
