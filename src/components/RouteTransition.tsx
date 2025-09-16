import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function RouteTransition({ children }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-h-[calc(100dvh-64px)]"
    >
      {children}
    </motion.main>
  );
}
