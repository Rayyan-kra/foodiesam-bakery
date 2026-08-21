import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";

function Checkout() {
  const navigate = useNavigate();
  const { setCheckoutData } = useCheckout();
  const [errors, setErrors] = useState({});
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
const continueToOtp = () => {
  const newErrors = {};

  if (!address.name.trim()) {
    newErrors.name = "Please enter your full name";
  }

  if (!address.phone.trim()) {
    newErrors.phone = "Please enter your phone number";
  } else if (!/^[0-9]{10}$/.test(address.phone)) {
    newErrors.phone = "Enter a valid 10-digit phone number";
  }

  if (!address.address.trim()) {
    newErrors.address = "Please enter your complete address";
  } else if (address.address.trim().length < 10) {
    newErrors.address = "Please enter a more complete address";
  }

  if (!address.city.trim()) {
    newErrors.city = "Please enter your city";
  }

  if (!address.pincode.trim()) {
    newErrors.pincode = "Please enter your pincode";
  } else if (!/^[0-9]{6}$/.test(address.pincode)) {
    newErrors.pincode = "Enter a valid 6-digit pincode";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setCheckoutData((previous) => ({
    ...previous,
    address: address,
  }));

  navigate("/verify-otp");
};
  

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold text-gray-800">
          Checkout
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Enter your delivery details
        </p>

        {/* Address Form */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Delivery Address</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                value={address.name}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    name: e.target.value,
                  })
                }
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-600"
                }`}
              />

              <p className="mt-1 min-h-[20px] text-sm text-red-500">
                {errors.name || ""}
              </p>
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={address.phone}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    phone: e.target.value,
                  })
                }
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-600"
                }`}
              />

              <p className="mt-1 min-h-[20px] text-sm text-red-500">
                {errors.phone || ""}
              </p>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <textarea
                placeholder="Enter your complete address"
                rows="4"
                value={address.address}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    address: e.target.value,
                  })
                }
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.address
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-600"
                }`}
              />

              <p className="mt-1 min-h-[20px] text-sm text-red-500">
                {errors.address || ""}
              </p>
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                placeholder="Enter city"
                value={address.city}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    city: e.target.value,
                  })
                }
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.city
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-600"
                }`}
              />

              <p className="mt-1 min-h-[20px] text-sm text-red-500">
                {errors.city || ""}
              </p>
            </div>

            {/* Pincode */}
            <div>
              <input
                type="text"
                placeholder="Enter pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    pincode: e.target.value,
                  })
                }
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.pincode
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-600"
                }`}
              />

              <p className="mt-1 min-h-[20px] text-sm text-red-500">
                {errors.pincode || ""}
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={continueToOtp}
            className="mt-8 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
