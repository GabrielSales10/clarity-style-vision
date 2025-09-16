import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="produtos" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold">Coleção em destaque</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="group overflow-hidden rounded-2xl border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`/products/p-${i}.jpg`}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium">Armação {i}</p>
                  <p className="text-sm text-muted-foreground">Acetato leve • Hastes flexíveis</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Parallax strength={18} className="py-16 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-semibold">Exames e serviços especializados</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Avaliação computadorizada, ajuste de armações e consultoria de lentes com profissionais credenciados.
            </p>
          </Reveal>
        </div>
      </Parallax>
    </>
  );
}
