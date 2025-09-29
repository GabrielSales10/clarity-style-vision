import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Award, Eye, Heart, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import storeImage from '@/assets/store-interior.jpg';
import storeVideo from '@/assets/otica.mp4';

const AboutSection = () => {
  const values = [
    {
      icon: Eye,
      title: 'Visão Clara',
      description:
        'Comprometidos com a saúde visual e o bem-estar dos nossos clientes.',
    },
    {
      icon: Award,
      title: 'Excelência',
      description:
        'Produtos e atendimento de alta qualidade em todos os serviços.',
    },
    {
      icon: Heart,
      title: 'Cuidado Pessoal',
      description:
        'Cada cliente é único e merece atenção personalizada e especializada.',
    },
    {
      icon: Users,
      title: 'Confiança',
      description:
        'Relacionamentos duradouros baseados em transparência e profissionalismo.',
    },
  ];

  const timeline = [
    { year: '1995', event: 'Fundação da Óticas Levy na Av. Major Assis, 470' },
    { year: '1992', event: 'Primeira expansão e parcerias com marcas internacionais' },
    { year: '2000', event: 'Implementação de tecnologia digital nos exames' },
    { year: '2010', event: 'Certificação em lentes premium e multifocais' },
    { year: '2018', event: 'Renovação completa do espaço físico' },
    { year: '2024', event: 'Mais de 50.000 clientes atendidos com excelência' },
  ];

  return (
    <section id="sobre" className="section-premium bg-muted/20">
      <div className="container-premium">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-xl text-primary border-primary/20 bg-primary/5 hover-glow"
          >
            Sobre Nós
          </Badge>
          <h2 className="text-section-title">
            Mais que uma ótica,
            <span style={{ color: '#1976D2' }}> uma experiência</span>
          </h2>
          <p className="text-premium-subtitle max-w-3xl mx-auto">
            Há 15 anos transformando a forma como as pessoas enxergam o mundo,
            combinando tradição, inovação e excelência no atendimento.
          </p>
        </AnimatedSection>

        {/* Mission & Store */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h3 className="font-serif-elegant text-2xl font-semibold">
                Quem somos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nas Óticas Levy, unimos tecnologia e acolhimento para cuidar da
                sua visão com excelência. Nossa missão é oferecer soluções
                visuais precisas, com designs atuais e preços justos.
              </p>

              <h3 className="font-serif-elegant text-2xl font-semibold">
                Nossos diferenciais
              </h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed">
                <li>Atendimento humanizado</li>
                <li>Exame de vista computadorizado diariamente</li>
                <li>Montagem e ajuste rápidos</li>
                <li>Garantia real</li>
              </ul>

              <h3 className="font-serif-elegant text-2xl font-semibold">
                Frase de confiança
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                “Ver bem muda tudo: sua produtividade, seu conforto e sua
                autoestima.”
              </p>
              <Button className="btn-premium hover-glow">
                <ArrowRight className="w-5 h-5 mr-2" />
                Conheça Nossa Loja
              </Button>
            </div>

            <AnimatedSection animation="scale" delay={200}>
              <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-large bg-black">
                {/* Fundo desfocado (preenche as laterais) */}
                <video
                  src={storeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 pointer-events-none"
                />
            
                {/* Vídeo principal (vertical) */}
                <video
                  src={storeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 m-auto h-full object-contain z-10 rounded-2xl"
                />
              </div>
            </AnimatedSection>


          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="text-center mb-16">
            <h3 className="font-serif-elegant text-2xl font-semibold mb-4">
              Nossos Valores
            </h3>
            <p className="text-premium-subtitle max-w-2xl mx-auto">
              Princípios que guiam cada atendimento e definem nossa excelência
              no mercado óptico.
            </p>
          </div>

          {/* grid com linhas de altura igual */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scale"
                  delay={index * 100}
                >
                  {/* card ocupa 100% da altura da linha */}
                  <Card className="card-premium text-center group hover-lift h-full">
                    {/* conteúdo centralizado verticalmente */}
                    <CardContent className="h-full flex flex-col items-center justify-center p-8 gap-4">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 hover:animate-pulse-glow">
                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h4 className="font-serif-elegant text-lg font-semibold group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>

                      {/* área com altura mínima para padronizar entre cards */}
                      <p className="text-muted-foreground text-sm leading-relaxed text-balance min-h-[64px]">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h3 className="font-serif-elegant text-2xl font-semibold mb-4">
              Nossa Trajetória
            </h3>
            <p className="text-premium-subtitle max-w-2xl mx-auto">
              Marcos importantes que definiram nossa jornada de sucesso ao longo
              dos anos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/20" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-left"
                    delay={index * 100}
                  >
                    <div className="relative flex items-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-variant rounded-full flex items-center justify-center shadow-elegant relative z-10 group-hover:animate-pulse-glow transition-all duration-500">
                        <span className="text-primary-foreground font-bold text-sm">
                          {item.year}
                        </span>
                      </div>
                      <div className="ml-8 card-premium p-6 flex-1 group-hover:shadow-elegant transition-all duration-500">
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
