import { useState } from "react";
import Reveal from "@/components/Reveal";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { width, height } = useWindowSize();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: enviar para seu backend/email
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      {sent && <Confetti width={width} height={height} numberOfPieces={180} recycle={false} />}
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold">Fale conosco</h1>
      </Reveal>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <Reveal>
          <input className="w-full rounded-xl border px-4 py-3" placeholder="Nome" required />
        </Reveal>
        <Reveal delay={0.05}>
          <input className="w-full rounded-xl border px-4 py-3" type="email" placeholder="Email" required />
        </Reveal>
        <Reveal delay={0.1}>
          <textarea className="w-full rounded-xl border px-4 py-3 min-h-32" placeholder="Mensagem" required />
        </Reveal>
        <Reveal delay={0.15}>
          <button className="rounded-xl bg-primary text-primary-foreground px-6 py-3 hover:shadow-lg transition-transform hover:-translate-y-0.5">
            Enviar
          </button>
        </Reveal>
      </form>
    </section>
  );
}
