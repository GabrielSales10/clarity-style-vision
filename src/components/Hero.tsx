import { motion } from "framer-motion";
import Parallax from "./Parallax";

const words = "Enxergue o mundo com precisão".split(" ");

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Partículas simples com blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 size-24 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-20 size-32 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <Parallax strength={25} className="relative z-10 px-6 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block mr-2"
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto"
        >
          Lentes, armações e exames com tecnologia de ponta — conforto visual e estilo em um só lugar.
        </motion.p>

        <motion.a
          href="#produtos"
          className="mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 bg-primary text-primary-foreground shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver catálogo
        </motion.a>
      </Parallax>

      {/* Imagem hero com parallax leve (troque pela sua) */}
      <Parallax strength={-20} className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/hero-optica.jpg')] bg-cover bg-center opacity-30" />
      </Parallax>
    </section>
  );
}
