import { Link } from "react-router-dom";
import bakeryVideo from "../assets/bakery-video.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={bakeryVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Foodiesam Homemade Bakery
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Freshly Baked
            <span className="block text-pink-400">For Every Occasion</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
            Homemade cakes, cookies, muffins and bakery treats prepared fresh
            with care for celebrations and everyday moments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/cakes"
              className="rounded-lg bg-pink-600 px-7 py-3 font-semibold text-white transition hover:bg-pink-700"
            >
              View Products
            </Link>

            <a
              href="#contact"
              className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
