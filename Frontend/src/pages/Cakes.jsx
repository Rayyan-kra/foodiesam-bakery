import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cakes() {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://foodiesam-backend.onrender.com/api/cakes")
      .then((response) => response.json())
      .then((data) => {
        setCakes(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-16">
      {/* Heading */}
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-medium text-pink-600">OUR SPECIAL COLLECTION</p>

        <h1 className="mt-2 text-4xl font-bold text-gray-800 md:text-5xl">
          Our Products
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Freshly baked cakes, cookies, biscuits, loaf cakes and more.
        </p>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm"
            >
              {/* Fake Image */}
              <div className="h-56 animate-pulse bg-pink-100"></div>

              {/* Fake Details */}
              <div className="p-5">
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

                <div className="mt-4 h-7 w-20 animate-pulse rounded bg-pink-100"></div>

                <div className="mt-5 h-12 w-full animate-pulse rounded-lg bg-pink-100"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Real Cake Cards */}
      {!loading && (
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cakes.map((cake) => (
            <div
              key={cake._id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden bg-pink-100">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition duration-300"
                />
              </div>

              {/* Details */}
              <div className="flex min-h-[185px] flex-col p-5">
                <h2 className="text-xl font-bold text-gray-800">{cake.name}</h2>

                <p className="mt-3 text-2xl font-bold text-pink-600">
                  ₹{cake.price}
                </p>

                <Link
                  to={`/cakes/${cake._id}`}
                  className="mt-auto block w-full rounded-lg bg-pink-600 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cakes;
