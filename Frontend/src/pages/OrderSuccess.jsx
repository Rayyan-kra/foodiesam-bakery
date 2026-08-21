import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
      <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
        <div className="text-6xl">🎉</div>

        <h1 className="mt-5 text-4xl font-bold text-gray-800">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for ordering from our bakery.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-lg bg-pink-600 px-8 py-3 font-semibold text-white hover:bg-pink-700"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
