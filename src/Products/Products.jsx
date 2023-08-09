
import React from "react";
import Quotes from "../Quotes/Quotes";
import { Link } from "react-router-dom";

const Products = () => {
  
  return (
    <div>
      <div className="PRODUCTCATEGORIESDIV">
        <span className="PRODUCTCATEGORIES">PRODUCT CATEGORIES</span>
      </div>

      <div className="FourItems1Div">
        <div className="FourItems1">
          <Link className="LinkInPRoIMg" to={"/KitchenAccessories"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">KITCHEN ACCESSORIES</span>
              </div>

              <div className="ImgmHoVER">
                <div className="IMgOne bg-one"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Wires"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">WIRES & WIRE PRODUCTS</span>
              </div>

              <div className="ImgmHoVER">
                <div className="IMgOne bg-two"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Lockes"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">LOCKES & ACCESSORIES</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-three"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Tools"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">TOOLS & AGRECO</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-four"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="FourItems2Div">
        <div className="FourItems1">
          <Link className="LinkInPRoIMg" to={"/Paints"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">PAINTS & RELATED ITEMS</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-five"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Roofing"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">ROOFING SHEETS</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-six"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Glass"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">GLASS & DOOR FITTINGS</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-seven"></div>
              </div>
            </div>
          </Link>
          <Link className="LinkInPRoIMg" to={"/Fastners"}>
            <div>
              <div className="ItemsBtnOne">
                <span className="ItemsName">FASTNERS & BOLTS</span>
              </div>
              <div className="ImgmHoVER">
                <div className="IMgOne bg-eight"></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Quotes />
    </div>
  );
};

export default Products;
