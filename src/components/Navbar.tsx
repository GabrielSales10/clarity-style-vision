import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "backdrop-blur bg-background/70 border-b" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="font-semibold text-xl">
          Ótica<span className="text-primary">Vision</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  clsx(
                    "transition relative px-1 py-0.5",
                    "hover:opacity-80",
                    isActive && "text-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {/* sublinhado animado */}
                    <motion.span
                      layoutId="activeLink"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ borderRadius: 9999 }}
                      animate={{ backgroundColor: isActive ? "currentColor" : "transparent" }}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer com morph */}
        <button
          aria-label="Abrir menu"
          className="relative h-8 w-8 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                className="absolute inset-0 before:absolute before:inset-x-1 before:top-3 before:h-0.5 before:bg-foreground after:absolute after:inset-x-1 after:bottom-3 after:h-0.5 after:bg-foreground"
                style={{ clipPath: "path('M0,0 L100,0 100,100 0,100Z')" }}
              />
            ) : (
              <motion.span
                key="burger"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute inset-0 before:absolute before:inset-x-1 before:top-3 before:h-0.5 before:bg-foreground after:absolute after:inset-x-1 after:bottom-3 after:h-0.5 after:bg-foreground"
              />
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b"
          >
            <ul className="mx-auto max-w-6xl p-4 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg hover:opacity-80"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
