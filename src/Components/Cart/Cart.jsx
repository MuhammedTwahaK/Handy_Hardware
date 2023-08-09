// import React , {useContext} from 'react'
// import { Hardware } from '../../Prodect'
// import {CartItems} from '../Cart/Cart-Items'
// import {ShopContext} from '../../Context/shop-context'
// import { Link } from 'react-router-dom'

// const Cart = () => {
//   const { CartItem, getCartTotalAmount,saveitem } = useContext(ShopContext);
//   const totalAmount = getCartTotalAmount()
//   return (
//     <div>
// <div>
//   <center><h1>Your Cart Items</h1></center>
//  </div>
//  <div className='CArTItems'>
//  {Hardware.map((product)=>{
//    if (CartItem [product.id] !== 0){
//     return <CartItems data={product}/>;
//    }
//  })}

//  </div>

// <div className="CheckOut">
// <h4 className='TotaLAmtlr'>Total: ₹ {totalAmount}</h4>

// <button className='ContinueBTNShop'>Continue Shopping</button>

// </div>

//       </div>
//   )
// }

// export default Cart

import React, { useContext, useState } from "react";
import { Hardware } from "../../Prodect";
import { CartItems } from "../Cart/Cart-Items";
import { ShopContext } from "../../Context/shop-context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { CartItem, getCartTotalAmount, saveitem, removeFromCart } =
    useContext(ShopContext); // Added `removeFromCart` from the context
  const totalAmount = getCartTotalAmount();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setInvoiceNumber((prevInvoiceNumber) => prevInvoiceNumber + 1);
  };

  const hideModal = () => {
    setModalVisible(false);
  };


  const currentDate = new Date();
  const invoiceDate = currentDate.toLocaleDateString();
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [userData, setUserData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Save the userData array in the localStorage
    localStorage.setItem("userDetails", JSON.stringify(userData));
    // Proceed with the checkout process
    // ...
  };

  const handleShareWhatsApp = () => {
    const message =
      `You have received a service order :\n\n================================\nOrder Details\n================================\n\n` +
      `Name: ${userData.Firstname}\n` +
      `Name2:${userData.Lastname}\n` +
      `Address: ${userData.Address}\n` +
      `Email: ${userData.Email}\n` +
      `Phone Number: ${userData.Phone}\n\n` +
      "Booked services \n\n";

    const message2 = `\n\nTotal Amount: Rs. ${totalAmount}\n`;

    const servicesDetails = Hardware.filter(
      (product) => CartItem[product.id] !== 0
    )
      .map((product) => `${product.Title}: ${product.Price}`)
      .join("\n");

    const fullMessage = `${message}${servicesDetails}${message2}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=919544234425&text=${encodedMessage}`;

    window.open(whatsappURL);
  };

  return (
    <div>
      <div>
        <center>
          <h1>Your Cart Items</h1>
        </center>
      </div>
      <div className="totalcartitemalignt">
        <div className="CArTItems">
          {Hardware.map((product) => {
            if (CartItem[product.id] !== 0) {
              return (
                <CartItems
                  key={product.id} // Assuming `product.id` is a unique identifier for each product
                  data={product}
                  quantity={CartItem[product.id]} // Pass the quantity to the `CartItems` component
                  onRemove={() => handleRemoveFromCart(product.id)} // Pass the remove function
                />
              );
            }
          })}
        </div>

        <div className="ClssForLoginPut">
          <div className="forPUtPAgeHHN">
            <div class="form">
              <p class="title">Details </p>

              <div className="flex">
                <label>
                  <input
                    required=""
                    placeholder=""
                    type="text"
                    class="input"
                    onChange={handleInputChange2}
                    value={userData.Firstname}
                    name="Firstname"
                  />
                  <span>Firstname</span>
                </label>

                <label>
                  <input
                    required=""
                    placeholder=""
                    type="text"
                    class="input"
                    onChange={handleInputChange2}
                    value={userData.Lastname}
                    name="Lastname"
                  />
                  <span>Lastname</span>
                </label>
              </div>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="email"
                  class="input"
                  onChange={handleInputChange2}
                  value={userData.Email}
                  name="Email"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  class="input"
                  onChange={handleInputChange2}
                  value={userData.Phone}
                  name="Phone"
                />
                <span>Phone Number</span>
              </label>
              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  class="input"
                  onChange={handleInputChange2}
                  value={userData.Address}
                  name="Address"
                />
                <span>Address</span>
              </label>

              <button class="submit" onClick={showModal}>
                Submit
              </button>

              {isModalVisible && (
                <div className="modal">
                  <div className="modal-content">
                    <div className="buttondiv">
                      <button className="dd" onClick={hideModal}>
                        X
                      </button>
                    </div>

                    <div className="mailid">
                      <div className="dateandinvoiceNumb">

                    <small className="billname">Invoice Date : {invoiceDate}</small>
                      <small className="billname">Invoice Number : H{invoiceNumber}</small>
                      </div>

                      <p className="PopUPDAtesTEXt">
                        Name : {userData.Firstname} {userData.Lastname}
                      </p>
                      <p className="PopUPDAtesTEXt">Email : {userData.Email}</p>
                      <p className="PopUPDAtesTEXt">
                        Phone Number : {userData.Phone}
                      </p>
                      <p className="PopUPDAtesTEXt">
                        Address : {userData.Address}
                      </p>

                      <div className="Tabledata">
                        <table className="PrintTable">
                          <thead className="TableHead">
                            <tr className="TableHeadRow">
                              <th className="TableHeadData1">Services</th>
                              <th className="TableHeadData2 TableRowData121">Brand</th>
                              <th className="TableHeadData2">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Hardware.map((product) => {
                              if (CartItem[product.id] !== 0) {
                                return (
                                  <tr key={product.id}>
                                    <td className="TableRowData1">
                                      {product.Title}
                                    </td>
                                    <td className="TableRowData1 TableRowData121">
                                  {product.Brand}
                                </td>
                                    <td className="TableRowData1">
                                      {product.Price}/-
                                    </td>
                                  </tr>
                                );
                              }
                              return null;
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="BuyBtnLINk">
                      <input
                        onClick={() => {
                          handleShareWhatsApp();
                        }}
                        className="signin"
                        type="button"
                        value="Buy"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="CheckOut">
        <h4 className="TotaLAmtlr">Total: ₹ {totalAmount}</h4>
        {/* Assuming '/shopping-page' is the path to your shopping page */}
        {/* <button className='ContinueBTNShop'>Continue Shopping</button> */}
      </div>
    </div>
  );
};

export default Cart;
