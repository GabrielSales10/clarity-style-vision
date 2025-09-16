import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function Root() {
  React.useEffect(() => {
    let rafId = 0;
    let lenis: any;

    (async () => {
      // importa só no client
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, smoothTouch: false });

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      // lenis não tem dispose, só deixa GC limpar
    };
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
