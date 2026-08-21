const CookieSection = () => {
  const features = [
    {
      title: "Freshly Baked",
      description:
        "Every order is prepared fresh so you get the best taste, texture and quality.",
    },
    {
      title: "Homemade Quality",
      description:
        "Made in small batches with personal care and trusted homemade recipes.",
    },
    {
      title: "Quality Ingredients",
      description:
        "We use carefully selected ingredients for better flavour and freshness.",
    },
    {
      title: "Made To Order",
      description:
        "Your order is prepared specially for your selected delivery date and time.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/products/Vintage Piping Cake.jpg"
              alt="Fresh bakery products"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-5 hidden w-56 overflow-hidden rounded-2xl border-8 border-white shadow-xl md:block">
            <img
              src="/products/Oats n jaggery Cookies.jpg"
              alt="Homemade cookies"
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            Why Foodiesam
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Homemade Baking,
            <span className="text-pink-600"> Made With Care.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            From simple everyday treats to celebration cakes, every order is
            prepared with attention to freshness, flavour and presentation.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-pink-500"></div>

                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex items-center gap-4 border-t border-gray-100 pt-7">
            <img
              src="/products/logo.png"
              alt="Foodiesam"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-gray-900">
                Freshly prepared in Lucknow
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Homemade bakery • Made to order
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieSection;
