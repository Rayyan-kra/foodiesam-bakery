const ContactSection = () => {
  return (
    <section className="w-full bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Planning a celebration or looking for something special? Get in
            touch with us for custom cakes, bakery orders and enquiries.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-14 grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-5">
          {/* Left Side */}
          <div className="relative bg-gray-950 p-8 text-white lg:col-span-2 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              Foodiesam
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Let's make something delicious.
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Have a custom order, celebration or question in mind? Reach out
              and we'll be happy to help.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="text-lg">⌖</span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <p className="mt-1 font-medium text-gray-200">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span>☎</span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <a
                    href="tel:+918604727019"
                    className="mt-1 block font-medium text-gray-200 transition hover:text-pink-400"
                  >
                    +91 86047 27019
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span>✉</span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <a
                    href="mailto:Yamaanm007@gmail.com"
                    className="mt-1 block break-all font-medium text-gray-200 transition hover:text-pink-400"
                  >
                    Yamaanm007@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Small bottom message */}
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-gray-500">
                For custom cakes, please mention your preferred design, occasion
                and delivery date in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:col-span-3 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Send a Message
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              How can we help?
            </h3>

            <form className="mt-8">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-pink-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-pink-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Custom cake, order enquiry..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you're looking for..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-pink-500 focus:bg-white"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-pink-600 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-lg"
              >
                Send Message
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                We'll get back to you as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
