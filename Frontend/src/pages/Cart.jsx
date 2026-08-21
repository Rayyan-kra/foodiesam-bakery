import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-16">
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Your Cart
      </h1>

      <div className="mx-auto mt-10 max-w-4xl">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="mb-4 flex items-center justify-between rounded-xl bg-white p-5 shadow"
            >
              <div className="flex items-center gap-5">
                <div className="h-24 w-24 overflow-hidden rounded-xl bg-pink-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-gray-600">Weight: {item.weight} KG</p>

                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">
                    Delivery Date: {item.deliveryDate}
                  </p>

                  <p className="text-gray-600">
                    Delivery Time: {item.deliveryTime}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold text-pink-600">₹{item.price}</p>

                <button
                  onClick={() => {
                    setCart(cart.filter((_, cartIndex) => cartIndex !== index));
                  }}
                  className="mt-2 text-sm font-semibold text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {/* Total + Checkout */}
        {cart.length > 0 && (
          <div className="mt-8 rounded-xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Total</h2>

              <p className="text-2xl font-bold text-pink-600">₹{totalPrice}</p>
            </div>

            <Link
              to="/checkout"
              className="mt-5 block w-full rounded-lg bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700"
            >
              Proceed To Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
