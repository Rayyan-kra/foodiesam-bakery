import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CakeSection = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cakes")
      .then((response) => response.json())
      .then((data) => {
        const featuredNames = [
          "Football White Vintage Cake",
          "Elegant White Vintage Cake",
          "White & Gold Vintage Cake",
          "Vintage Piping Cake",
          "Choco Banana Walnut Cake",
          "Almond Cake",
          "Lemon Cake Loaf",
          "Walnut & Raisin Cake",
        ];

        const featured = data.filter((cake) =>
          featuredNames.includes(cake.name),
        );

        setCakes(featured);
      });
  }, []);

  return (
    <section className="w-full bg-white px-6 py-24">
      {/* Heading */}
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
          Our Best Sellers
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Our Most Loved Bakes
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
          A handpicked collection of celebration cakes, loaf cakes and homemade
          treats prepared fresh for every order.
        </p>
      </div>

      {/* Product Cards */}
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cakes.map((cake) => (
          <div
            key={cake._id}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <Link to={`/cakes/${cake._id}`}>
              <div className="h-64 overflow-hidden bg-pink-50">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Details */}
            <div className="flex min-h-[240px] flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                Featured
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {cake.name}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {cake.description}
              </p>

              {/* Bottom */}
              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>

                  <p className="mt-1 text-2xl font-bold text-pink-600">
                    ₹{cake.price}
                  </p>
                </div>

                <Link
                  to={`/cakes/${cake._id}`}
                  className="rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-14 text-center">
        <Link
          to="/cakes"
          className="inline-block rounded-full border-2 border-pink-600 px-8 py-3 font-semibold text-pink-600 transition hover:bg-pink-600 hover:text-white"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default CakeSection;
