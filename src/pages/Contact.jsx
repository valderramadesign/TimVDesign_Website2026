import { useState } from "react";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16 md:pt-20">
      <section className="min-h-[80vh] bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left */}
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Contact</p>
              <h1
                className="font-medium tracking-tight leading-tight mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.025em" }}
              >
                Let's work together.
              </h1>
              <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-sm">
                I take on a limited number of projects each year to stay focused and do my best work. If you have something interesting, get in touch.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:valderramadesign@gmail.com"
                  className="text-sm text-black hover:text-gray-500 transition-colors"
                >
                  valderramadesign@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/tvalderrama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="flex flex-col gap-4 py-12">
                  <p className="text-2xl font-medium tracking-tight">Thanks for reaching out.</p>
                  <p className="text-gray-500 text-base">I'll be in touch within a couple of days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 py-3 text-sm text-black placeholder-gray-400 focus:border-black transition-colors outline-none bg-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 py-3 text-sm text-black placeholder-gray-400 focus:border-black transition-colors outline-none bg-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 py-3 text-sm text-black placeholder-gray-400 focus:border-black transition-colors outline-none bg-transparent"
                      placeholder="Where you work"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border-b border-gray-200 py-3 text-sm text-black placeholder-gray-400 focus:border-black transition-colors outline-none bg-transparent resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 text-sm font-medium bg-black text-white px-8 py-4 hover:opacity-70 transition-opacity duration-200"
                    >
                      Send message
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
