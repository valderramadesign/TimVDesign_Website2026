import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isHome
    ? scrolled ? "bg-black" : "bg-transparent"
    : "bg-white border-b border-gray-200";

  const textColor = isHome ? "text-white" : "text-black";
  const logoColor = isHome ? "text-white" : "text-black";

  const links = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`font-semibold text-base tracking-tight transition-opacity hover:opacity-60 ${logoColor}`}
          >
            Tomas Valderrama
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-opacity hover:opacity-60 ${textColor} ${
                  location.pathname.startsWith(to) ? "opacity-100" : "opacity-70"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 ${textColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-white text-4xl font-medium tracking-tight hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-16 text-gray-500 text-sm">valderramadesign@gmail.com</p>
      </div>
    </>
  );
}
