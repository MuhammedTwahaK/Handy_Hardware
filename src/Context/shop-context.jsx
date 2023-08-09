// import { useEffect } from "react";
// import React, { createContext, useState } from "react";
// import { Hardware } from "../Prodect";
// import { CartItems } from "../Components/Cart/Cart-Items";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < Hardware.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const saveToLocalStorage = () => {
//   let Lsave = [];
//   for (const item in CartItems) {
//     if (CartItems[item] > 0) {
//       let itemInfo = Hardware.find((product) => product.id === Number(item));
//       Lsave.push(itemInfo);
//     }
//   }
//   return Lsave;
// };

// const Newcart = saveToLocalStorage();

// useEffect(() => {
//   localStorage.setItem("MyCart", JSON.stringify(Newcart));
// }, [CartItems]);

// export const ShopContextProvider = (props) => {
//   const [CartItem, setCartItem] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };
//   const removeFromCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getCartTotalAmount = () => {
//     let totalAmount = 0;
//     for (const item in CartItem) {
//       if (CartItem[item] > 0) {
//         let itemInfo = Hardware.find((product) => product.id === Number(item));
//         totalAmount += CartItem[item] * itemInfo.Price;
//       }
//     }
//     return totalAmount;
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   const contextValue = {
//     CartItem,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getCartTotalAmount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };



















// import { useEffect, createContext, useState } from "react";
// import { Hardware } from "../Prodect";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < Hardware.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const saveToLocalStorage = (CartItem) => {
//   let Lsave = [];
//   for (const item in CartItem) {
//     if (CartItem[item] > 0) {
//       let itemInfo = Hardware.find((product) => product.id === Number(item));
//       Lsave.push(itemInfo);
//     }
//   }
//   return Lsave;
// };

// export const ShopContextProvider = (props) => {
//   const [CartItem, setCartItem] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getCartTotalAmount = () => {
//     let totalAmount = 0;
//     for (const item in CartItem) {
//       if (CartItem[item] > 0) {
//         let itemInfo = Hardware.find((product) => product.id === Number(item));
//         totalAmount += CartItem[item] * itemInfo.Price;
//       }
//     }
//     return totalAmount;
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   useEffect(() => {
//     const Newcart = saveToLocalStorage(CartItem);
//     localStorage.setItem("MyCart", JSON.stringify(Newcart));
//   }, [CartItem]);

//   const contextValue = {
//     CartItem,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getCartTotalAmount,

//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };




import React, { useEffect, createContext, useState } from "react";
import { Hardware } from "../Prodect";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of Hardware) {
    cart[product.id] = 0;
  }
  return cart;
};

const getSavedCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("MyCart");
  return savedCart ? JSON.parse(savedCart) : getDefaultCart();
};

const saveToLocalStorage = (cartItem) => {
  localStorage.setItem("MyCart", JSON.stringify(cartItem));
};

export const ShopContextProvider = (props) => {
  const [CartItem, setCartItem] = useState(getSavedCartFromLocalStorage());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in CartItem) {
      if (CartItem[item] > 0) {
        let itemInfo = Hardware.find((product) => product.id === Number(item));
        totalAmount += CartItem[item] * itemInfo.Price;
      }
    }
    return totalAmount;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  useEffect(() => {
    saveToLocalStorage(CartItem);
  }, [CartItem]);

  const contextValue = {
    CartItem,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getCartTotalAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
















