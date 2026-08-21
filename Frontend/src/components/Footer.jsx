import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/products/logo.png"
                alt="Foodiesam Logo"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold">Foodiesam</h2>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-pink-400">
                  Homemade Bakery
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Freshly baked cakes, cookies, muffins and homemade treats crafted
              with care for everyday moments and special celebrations.
            </p>

            <Link
              to="/cakes"
              className="mt-7 inline-block rounded-full bg-pink-600 px-7 py-3 text-sm font-semibold transition hover:bg-pink-700"
            >
              Explore Products
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">
              <Link to="/" className="w-fit transition hover:text-white">
                Home
              </Link>

              <Link to="/cakes" className="w-fit transition hover:text-white">
                Products
              </Link>

              <Link to="/cart" className="w-fit transition hover:text-white">
                Cart
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Our Bakery
            </h3>

            <div className="mt-6 space-y-4 text-gray-400">
              <p>Celebration Cakes</p>
              <p>Loaf Cakes</p>
              <p>Cookies & Biscuits</p>
              <p>Muffins</p>
              <p>Custom Orders</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Contact
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-1 text-gray-300">Lucknow, Uttar Pradesh</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>

                <a
                  href="tel:+918604727019"
                  className="mt-1 block text-gray-300 transition hover:text-pink-400"
                >
                  +91 86047 27019
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:samraancooking@gmail.com"
                  className="mt-1 block break-all text-gray-300 transition hover:text-pink-400"
                >
                  Yamaanm007@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Foodiesam. All rights reserved.</p>

          <p>Handmade with care in Lucknow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
