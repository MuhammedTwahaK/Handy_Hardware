import React , {useContext} from 'react'
import { Link } from 'react-router-dom';
import {ShopContext} from '../../Context/shop-context'

export const CartItems = (props) => {
    const {id, img, Title, Price, Brand, Offer} =props.data;
    const { CartItem, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='CarTIteMs'>
      <div className="PadiiingDivforaliing">
        <div className="LINKLINK CArtItemsOutPutLikn" to={"/KitchenAccessories"}>
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
                        <span className="PriceDetails">{Price}</span>
                        <span className="BrandDetails">{Brand}</span>
                        <span className="offerDetails">{Offer}</span>
                      </div>

                      <div className="CounterHandler">
                        <button className='plusandminesbtbn' onClick={()=>removeFromCart(id)}> - </button>
                        <input className='InputoutCounts' value={CartItem [id]} onChange={(e)=>updateCartItemCount(Number(e.target.value) , id)} />
                        <button className='plusandminesbtbn' onClick={()=>addToCart(id)}> + </button>
                      </div>
                    </div>
                    </div>
    </div>
  )
}




