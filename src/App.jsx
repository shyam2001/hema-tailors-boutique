export default function HemaTailorsWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-pink-50 px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
          Hema Tailors & Boutique
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
          Expert ladies tailoring, blouse stitching, boutique services, sarees,
          cosmetics, and fashion essentials in Vrindavan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/918273780151"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl shadow-lg transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+918273780151"
            className="border border-pink-600 text-pink-700 px-6 py-3 rounded-2xl hover:bg-pink-100 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/hema-owner.jpg"
            alt="Hemlata Sharma - Hema Tailors & Boutique"
            className="rounded-3xl shadow-xl w-full max-w-sm mx-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-pink-700">About Us</h2>
          <p className="mt-5 text-gray-700 leading-7">
            Welcome to Hema Tailors & Boutique, where traditional craftsmanship
            meets modern fashion. Led by Hemlata Sharma since 1998, we provide
            professional ladies tailoring and boutique services with a focus on
            perfect fitting, quality stitching, and customer satisfaction.
          </p>

          <p className="mt-4 text-gray-700 leading-7">
            We specialize in customized blouse stitching, ladies suits,
            alterations, designer wear, sarees, cosmetics, and other related
            fashion products on demand.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-pink-700">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Blouse Stitching',
                desc: 'Customized blouse stitching with stylish and comfortable fitting.',
              },
              {
                title: 'Ladies Tailoring',
                desc: 'Professional tailoring for suits, dresses, and daily wear.',
              },
              {
                title: 'Boutique Collection',
                desc: 'Designer outfits and fashionable boutique wear for every occasion.',
              },
              {
                title: 'Sarees',
                desc: 'Beautiful sarees available on demand for festive and special events.',
              },
              {
                title: 'Cosmetics',
                desc: 'Selected beauty and cosmetic products available for customers.',
              },
              {
                title: 'Alteration Services',
                desc: 'Fast and reliable fitting and alteration services.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-pink-700">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-pink-700">
          Why Customers Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10 text-center">
          {[
            'Since 1998 Experience',
            'Perfect Fitting',
            'Affordable Pricing',
            'Friendly Customer Service',
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-3xl p-6 bg-pink-50 shadow-sm"
            >
              <p className="font-semibold text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-pink-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Contact Hema Tailors & Boutique</h2>

        <div className="mt-6 space-y-3 text-lg">
          <p>📞 +91 82737 80151</p>
          <p>📍 Vrindavan, Uttar Pradesh</p>
          <p>🕒 Open All Days</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/918273780151"
            target="_blank"
            className="bg-white text-pink-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+918273780151"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-pink-600 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © 2026 Hema Tailors & Boutique. All rights reserved.
      </footer>
    </div>
  );
}
