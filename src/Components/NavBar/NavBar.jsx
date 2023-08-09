import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Cart from "../Images/Cart.png";
// import Login from "../Images/Login.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="NavBarHome">
        <Link className="LinkDec" to={"/"}>
          <div className="LogoAndText">
            <img className="Logo" src={Logo} alt="" />
            <span className="CompanyName">HANDY HARDWARE</span>
          </div>
        </Link>
        <div className="InputAndImg">
          <input className="Serachbox" type="search" placeholder="Search" />
          <img
            className="SearchbarIcon"
            src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png"
            alt=""
          />
        </div>
        <div className="TwoBtinNav">
          <Link className="LinkForShops" to={"/ShopNow"}>
          <div className="LoginBtn">
            <span className="LoginBt">SHOP NOW</span>
            <img className="LoginImg" src="https://cdn-icons-png.flaticon.com/128/2430/2430422.png" alt="" />
          </div>
          </Link>
<Link className="LonkCLart" to={"Cart"}>
          <div className="CartBtn">
            <span className="CartBt">CART</span>
            <img className="CartImg" src={Cart} alt="" />
          </div>
          </Link>
        </div>
      </div>


      <Outlet />
    </div>
  );
};

export default NavBar;
