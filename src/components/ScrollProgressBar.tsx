import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      aria-hidden="true"
    />
  );
}
