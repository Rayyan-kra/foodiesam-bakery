import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function CakeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [errors, setErrors] = useState({});

  const [cake, setCake] = useState(null);
  const [weight, setWeight] = useState(0.5);
  const [quantity, setQuantity] = useState(1);

  const { setCart } = useCart();

  useEffect(() => {
    fetch(`https://foodiesam-backend.onrender.com/api/cakes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCake(data);
      });
  }, [id]);

  if (!cake) {
    return <h2>Loading...</h2>;
  }

  const price = cake.price * (weight / 0.5) * quantity;

const addToCart = () => {
  const newErrors ={};
 if (!deliveryDate) {
   newErrors.deliveryDate = "Please select delivery date";
 }

 if (!deliveryTime) {
   newErrors.deliveryTime = "Please select delivery time";
 }

  setErrors(newErrors);
  if(Object.keys(newErrors).length > 0) return;

  const item = {
    id: cake._id,
    name: cake.name,
    image: cake.image,
    weight: weight,
    quantity: quantity,
    deliveryDate: deliveryDate,
    deliveryTime: deliveryTime,
    price: price,
  };

  // PASTE IT HERE
  setCart((previousCart) => {
    const alreadyExists = previousCart.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.weight === item.weight &&
        cartItem.deliveryDate === item.deliveryDate &&
        cartItem.deliveryTime === item.deliveryTime,
    );

    if (alreadyExists) {
      return previousCart;
    }

    return [...previousCart, item];
  });

  navigate("/cart");
};
const getMinDeliveryDate = () => {
  const now = new Date();

  now.setHours(now.getHours() + 24);

  return now.toISOString().split("T")[0];
};

const minDeliveryDate = getMinDeliveryDate();

const deliverySlots = [
  { label: "10:00 AM - 12:00 PM", hour: 10 },
  { label: "12:00 PM - 2:00 PM", hour: 12 },
  { label: "2:00 PM - 4:00 PM", hour: 14 },
  { label: "4:00 PM - 6:00 PM", hour: 16 },
  { label: "6:00 PM - 8:00 PM", hour: 18 },
];

const isSlotDisabled = (slotHour) => {
  if (!deliveryDate) return false;

  const selected = new Date(deliveryDate);
  selected.setHours(slotHour, 0, 0, 0);

  const minimumDelivery = new Date();
  minimumDelivery.setHours(minimumDelivery.getHours() + 24);

  return selected < minimumDelivery;
};

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2">
        {/* Cake Image */}
        <div className="h-96 overflow-hidden rounded-2xl bg-pink-100">
          <img
            src={cake.image}
            alt={cake.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cake Details */}
        <div className="flex flex-col justify-center">
          <p className="font-medium text-pink-600">FRESHLY BAKED</p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">{cake.name}</h1>

          <div className="mt-3 text-yellow-500">⭐⭐⭐⭐⭐</div>

          <p className="mt-5 leading-relaxed text-gray-600">
            Delicious freshly baked {cake.name.toLowerCase()} made with premium
            ingredients and lots of love.
          </p>

          {/* Weight */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-800">Select Weight</h3>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setWeight(0.5)}
                className={`rounded-lg border px-5 py-3 ${
                  weight === 0.5
                    ? "border-pink-600 bg-pink-600 text-white"
                    : "border-gray-300 hover:border-pink-600"
                }`}
              >
                0.5 KG
              </button>

              <button
                onClick={() => setWeight(1)}
                className={`rounded-lg border px-5 py-3 ${
                  weight === 1
                    ? "border-pink-600 bg-pink-600 text-white"
                    : "border-gray-300 hover:border-pink-600"
                }`}
              >
                1 KG
              </button>

              <button
                onClick={() => setWeight(1.5)}
                className={`rounded-lg border px-5 py-3 ${
                  weight === 1.5
                    ? "border-pink-600 bg-pink-600 text-white"
                    : "border-gray-300 hover:border-pink-600"
                }`}
              >
                1.5 KG
              </button>

              <button
                onClick={() => setWeight(2)}
                className={`rounded-lg border px-5 py-3 ${
                  weight === 2
                    ? "border-pink-600 bg-pink-600 text-white"
                    : "border-gray-300 hover:border-pink-600"
                }`}
              >
                2 KG
              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-800">Quantity</h3>

            <div className="flex w-fit items-center rounded-lg border border-gray-300">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-5 py-3 text-xl hover:bg-gray-100"
              >
                −
              </button>

              <span className="px-5 text-lg font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-3 text-xl hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Delivery Date */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-800">Delivery Date</h3>

            <input
              type="date"
              value={deliveryDate}
              min={minDeliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3"
            />
            <p className="mt-1 min-h-[20px] text-sm text-red-500">
              {errors.deliveryDate}
            </p>
          </div>

          {/* Delivery Time */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-800">Delivery Time</h3>

            <select
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-3"
            >
              <option value="">Select Time</option>

              {deliverySlots.map((slot) => (
                <option
                  key={slot.label}
                  value={slot.label}
                  disabled={isSlotDisabled(slot.hour)}
                >
                  {slot.label}
                </option>
              ))}
            </select>
            <p className="mt-1 min-h-[20px] text-sm text-red-500">
              {errors.deliveryTime}
            </p>
          </div>

          {/* Price */}
          <p className="mt-8 text-3xl font-bold text-pink-600">₹{price}</p>

          {/* Add To Cart */}
          <button
            onClick={addToCart}
            className="mt-8 rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CakeDetails;
