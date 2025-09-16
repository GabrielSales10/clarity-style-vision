import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Transição de página (fade + slide)
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 },
};
const pageTransition = { duration: 0.35, ease: "easeOut" };

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-[70vh]"
    >
      {children}
    </motion.main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
          <Route
            path="/produtos"
            element={
              <Page>
                <Products />
              </Page>
            }
          />
          <Route
            path="/servicos"
            element={
              <Page>
                <Services />
              </Page>
            }
          />
          <Route
            path="/sobre"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/contato"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
