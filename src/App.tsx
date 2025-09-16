import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import RouteTransition from "@/components/RouteTransition";
import { useEffect } from "react";

const queryClient = new QueryClient();

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }, [pathname]);

  return null;
}

/**
 * Wrapper para aplicar transição em cada rota.
 * Ex.: <Route path="/sobre" element={withTransition(<Sobre />)} />
 */
const withTransition = (el: React.ReactNode) => (
  <RouteTransition>{el}</RouteTransition>
);

function RouterView() {
  const location = useLocation();
  return (
    <>
      <ScrollProgressBar />
      <a id="topo" className="sr-only">Topo</a>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={withTransition(<Index />)} />
          <Route path="/sobre" element={withTransition(<Sobre />)} />
          {/* Você pode criar páginas dedicadas depois */}
          <Route path="/produtos" element={withTransition(<Index />)} />
          <Route path="/servicos" element={withTransition(<Index />)} />
          <Route path="/blog" element={withTransition(<Index />)} />
          <Route path="/contato" element={withTransition(<Contato />)} />
          <Route path="*" element={withTransition(<NotFound />)} />
        </Routes>
      </AnimatePresence>

      <footer className="border-t mt-10">
        <div className="container-premium h-16 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ótica Premium
          </span>
          <a href="#topo" className="link-underline">Topo</a>
        </div>
      </footer>

      <ScrollToTopOnRouteChange />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
