import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Preloader from "./components/Preloader.jsx";
import Cursor from "./components/Cursor.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner({ preloaderDone }) {
  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <Nav />
      <div
        className={preloaderDone ? "content-revealed" : ""}
        style={{ opacity: preloaderDone ? undefined : 0 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      <Cursor />
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <AppInner preloaderDone={preloaderDone} />
    </BrowserRouter>
  );
}
