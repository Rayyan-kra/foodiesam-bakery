import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { cart, setCart } = useCart();
  const [error, setError] = useState("");
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const navigate = useNavigate();
  const { checkoutData } = useCheckout();

const placeOrder = async () => {
  if (!paymentMethod) {
    setError("Please select a payment method");
    return;
  }

  setError("");
  console.log("checkoutData:", checkoutData);
  console.log("cart:", cart);
  console.log("paymentMethod:", paymentMethod);

  const orderData = {
    phone: checkoutData.phone,
    items: cart,
    totalPrice: totalPrice,
    address: checkoutData.address,
    paymentMethod: paymentMethod,
  };

  const response = await fetch(
    "https://foodiesam-backend.onrender.com/api/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    },
  );

  const data = await response.json();

  if (response.ok) {
    setCart([]);
    navigate("/order-success");
  } else {
    setError(data.message);
  }
};

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Payment
        </h1>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
            Choose Payment Method
          </h2>

          <div className="mt-6 space-y-4">
            
            <button
              onClick={() => setPaymentMethod("cod")}
              className={`w-full rounded-lg border p-4 text-left ${
                paymentMethod === "cod"
                  ? "border-pink-600 bg-pink-50"
                  : "border-gray-300"
              }`}
            >
              💵 Cash On Delivery
            </button>
          </div>

          <p className="mt-2 min-h-[20px] text-sm text-red-500">{error}</p>

          <button
            onClick={placeOrder}
            className="mt-8 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
