import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutContext";

function OtpVerify() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const { setCheckoutData } = useCheckout();
  const [error,setError]= useState({});
  const [message,setMessage]= useState("");
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async () => {
    if (sending) return;

     const newError = {};

     if (!email) {
       newError.email = "Please enter the Email";
     } else if (!email.endsWith("@gmail.com")) {
       newError.email = "Please enter a valid Email";
     }

     setError(newError);

     if (Object.keys(newError).length > 0) return;

     setSending(true);

     try{
    const response = await fetch("https://foodiesam-backend.onrender.com/api/auth/send-otp",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:email,
      }),
    });

    const data = await response.json();
   
    if (response.ok) {
      setMessage("OTP send successfully");
      setOtpSent(true);
    } else {
      alert(data.message);
    }}
    finally{
      setSending(false);
    }
  };

  const verifyOtp = async () => {
    const response = await fetch("https://foodiesam-backend.onrender.com/api/auth/verify-otp",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
        }),
      },
    );

    const data = await response.json();

    if (response.ok) {
      setCheckoutData((previous) => ({
        ...previous,
        email:email,
      }));
      navigate("/payment");
    } else {
      setError({
        ...error,
        otp: data.message,
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Verify Email
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Verify your Email before placing the order
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-600"
        />
        <p className="mt-1 min-h-[20px] text-sm text-red-500">{error.email}</p>

        {!otpSent ? (
          <button
            onClick={sendOtp}
            disabled={sending}
            className="mt-5 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >
            {sending ? "Sending..." : "Send OTP"}
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-8 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-pink-600"
            />
            <p className="mt-1 min-h-[20px] text-sm text-red-500">
              {error.otp}
            </p>

            <button
              onClick={verifyOtp}
              className="mt-5 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
            >
              Verify OTP
            </button>
          </>
        )}
        {message && (
          <p className="mt-3 text-center text-sm text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}

export default OtpVerify;
