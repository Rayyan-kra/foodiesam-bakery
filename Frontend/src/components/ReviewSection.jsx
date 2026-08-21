const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      review:
        "The cake was fresh, beautifully decorated and tasted amazing. Everyone at the celebration loved it.",
      rating: 5,
      image: "/products/Elegant white vintage cake.jpg",
    },
    {
      id: 2,
      name: "Rahul Verma",
      review:
        "The cookies were fresh, perfectly baked and packed very nicely. Definitely ordering again.",
      rating: 5,
      image: "/products/Oats n jaggery Cookies.jpg",
    },
    {
      id: 3,
      name: "Priya Singh",
      review:
        "The birthday cake looked beautiful and tasted even better. Delivery was also right on time.",
      rating: 5,
      image: "/products/Vintage Piping Cake.jpg",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold tracking-widest text-pink-600">
            CUSTOMER LOVE
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800 md:text-5xl">
            Loved By Our Customers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Freshly baked products, beautiful presentation and memorable
            flavours made for every special moment.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={review.image}
                  alt="Bakery product"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Review Content */}
              <div className="p-7">
                {/* Stars */}
                <div className="text-lg text-yellow-400">
                  {"★".repeat(review.rating)}
                </div>

                {/* Quote */}
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  “{review.review}”
                </p>

                {/* Customer */}
                <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-lg font-bold text-pink-600">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">{review.name}</h3>

                    <p className="text-sm text-gray-500">Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-gray-700">
            Made with love. Baked with care. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
