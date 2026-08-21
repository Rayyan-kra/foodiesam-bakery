import { BrowserRouter, Routes, Route } from "react-router-dom";
import CakeDetails from "./pages/CakeDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import OtpVerify from "./pages/OtpVerify";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import { CheckoutProvider } from "./context/CheckoutContext";

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/cakes/:id" element={<CakeDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/verify-otp" element={<OtpVerify />} />
          </Routes>
        </BrowserRouter>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
