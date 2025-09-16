import { useState, useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

function Burger({ open }: { open: boolean }) {
  // Ícone morfando hamburguer <-> X
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d={open ? "M6 6 L18 18" : "M3 6 H21"}
        initial={false}
        animate={{ d: open ? "M6 6 L18 18" : "M3 6 H21" }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d={open ? "M18 6 L6 18" : "M3 12 H21"}
        initial={false}
        animate={{ d: open ? "M18 6 L6 18" : "M3 12 H21" }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d={open ? "M12 12 L12 12" : "M3 18 H21"}
        initial={false}
        animate={{ d: open ? "M12 12 L12 12" : "M3 18 H21" }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = useMemo(
    () => (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to)),
    [pathname]
  );

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container-premium h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl font-serif-elegant">
          Ótica <span className="gradient-text">Premium</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="relative link-underline"
              data-active={isActive(l.to)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t"
          >
            <ul className="container-premium py-2 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block px-3 py-2 rounded-lg link-underline",
                      isActive(l.to) && "bg-secondary"
                    )}
                    data-active={isActive(l.to)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
