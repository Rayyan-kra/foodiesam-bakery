import { createContext, useContext, useEffect, useState } from "react";
const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
 const [checkoutData, setCheckoutData] = useState(() => {
   const savedCheckout = localStorage.getItem("checkoutData");

   return savedCheckout
     ? JSON.parse(savedCheckout)
     : {
         address: null,
         phone: "",
       };
 });
  useEffect(() => {
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
  }, [checkoutData]);
  return (
    <CheckoutContext.Provider
      value={{
        checkoutData,
        setCheckoutData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext);
}
