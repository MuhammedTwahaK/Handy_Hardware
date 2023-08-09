import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {ShopContext} from '../../../Context/shop-context'

const Prodects = (props) => {
    const {id, img, Title, Price, Brand, Offer, Cate} =props.data;
    const { addToCart, CartItem } = useContext(ShopContext);

    const cartItemAmount = CartItem[id]
    while (Cate=="Kichen"){

  return (
    <div className='CartITEmFlex'>
        <div className="ImgANdiTemsDeatilsBra ColorForClick">
                    <Link className="LINKLINK" to={"/KitchenAccessories"}>
                      <div className="Img1">
                        <img
                          className="ProdeuctItemOne"
                          src={img}
                          alt=""
                        />
                      </div>
                      <div className="DetailsDIV">
                        <span className="NameDetails">
                          {Title}
                        </span>
                        <span className="PriceDetails">₹ {Price}</span>
                        <span className="BrandDetails">{Brand}</span>
                        <span className="offerDetails">{Offer}</span>
                      </div>
                    </Link>
                    <div className="BtinCARt">

                        <div className="BtinCARt">
                          <button className="BtFORcart" onClick={()=>addToCart(id)}>Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                        </div>

                    </div>
                  </div>
    </div>
  
  )
}

}


export default Prodects