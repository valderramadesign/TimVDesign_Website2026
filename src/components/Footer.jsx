import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16 md:mb-24">
          {/* Left: tagline + CTA */}
          <div>
            <p className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-8">
              Let's build something<br />that matters.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Say hello
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right: newsletter */}
          <div>
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Newsletter</p>
            <p className="text-base text-gray-300 mb-6">
              Occasional thoughts on design, craft, and shipping products people love.
            </p>
            {submitted ? (
              <p className="text-sm text-gray-400">You're in. Talk soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-transparent border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-white transition-colors duration-200 outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {year} Tomas Valderrama. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link to="/work" className="text-sm text-gray-500 hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
