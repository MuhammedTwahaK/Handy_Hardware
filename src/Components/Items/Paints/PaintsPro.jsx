import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../../Context/shop-context";

const PaintsPro = (props) => {
  const { id, img, Title, Price, Brand, Offer, Cate } = props.data;
  const { addToCart, CartItem } = useContext(ShopContext);
  const cartItemAmount = CartItem[id];
  while (Cate == "Paints") {
    return (
      <div>
        <div className="CartITEmFlex">
          <div className="ImgANdiTemsDeatilsBra ColorForClick">
            <div className="LINKLINK" to={"/KitchenAccessories"}>
              <div className="Img1">
                <img className="ProdeuctItemOne" src={img} alt="" />
              </div>
              <div className="DetailsDIV">
                <span className="NameDetails">{Title}</span>
                <span className="PriceDetails">₹ {Price}</span>
                <span className="BrandDetails">{Brand}</span>
                <span className="offerDetails">{Offer}</span>
              </div>
            </div>
            <div className="BtinCARt">
              <div className="BtinCARt">
                <button className="BtFORcart" onClick={() => addToCart(id)}>
                  Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PaintsPro;
