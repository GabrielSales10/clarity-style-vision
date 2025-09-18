import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Eye, Heart, ArrowRight } from 'lucide-react';
import storeImage from '@/assets/store-interior.jpg';

const Sobre = () => {
  const values = [
    {
      icon: Eye,
      title: 'Visão Clara',
      description: 'Comprometidos com a saúde visual e o bem-estar dos nossos clientes.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Produtos premium e atendimento de alta qualidade em todos os serviços.'
    },
    {
      icon: Heart,
      title: 'Cuidado Pessoal',
      description: 'Cada cliente é único e merece atenção personalizada e especializada.'
    },
    {
      icon: Users,
      title: 'Confiança',
      description: 'Relacionamentos duradouros baseados em transparência e profissionalismo.'
    }
  ];

  const timeline = [
    { year: '1985', event: 'Fundação da Ótica Premium na Av. Major Assis, 470' },
    { year: '1992', event: 'Primeira expansão e parcerias com marcas internacionais' },
    { year: '2000', event: 'Implementação de tecnologia digital nos exames' },
    { year: '2010', event: 'Certificação em lentes premium e multifocais' },
    { year: '2018', event: 'Renovação completa do espaço físico' },
    { year: '2023', event: 'Mais de 50.000 clientes atendidos com excelência' }
  ];

  const team = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Optometrista Chefe',
      experience: '25 anos de experiência',
      avatar: '👨‍⚕️'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Consultora de Estilo',
      experience: 'Especialista em armações premium',
      avatar: '👩‍💼'
    },
    {
      name: 'João Silva',
      role: 'Técnico em Ótica',
      experience: 'Expert em ajustes e reparos',
      avatar: '👨‍🔧'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-gray-dark text-primary-foreground">
          <div className="container-premium">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-hero mb-6">
                Nossa
                <span className="gradient-text block">História</span>
              </h1>
              <p className="text-xl leading-relaxed">
                Há 35 anos transformando a forma como as pessoas enxergam o mundo, 
                combinando tradição, inovação e excelência no atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Store */}
        <section className="section-premium">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-section-title">
                  Mais que uma ótica,
                  <span className="gradient-text block">uma experiência</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fundada em 1985, a Ótica Premium nasceu com o propósito de revolucionar 
                  o mercado óptico brasileiro, oferecendo produtos de alta qualidade e 
                  atendimento personalizado que supera as expectativas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo de três décadas, estabelecemos parcerias com as 
                  principais marcas mundiais e investimos continuamente em tecnologia 
                  e capacitação profissional para garantir os melhores resultados.
                </p>
                <Button className="btn-hero">
                  Conheça Nossa Loja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={storeImage}
                  alt="Interior da Ótica Premium"
                  className="w-full rounded-2xl shadow-large"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-premium bg-muted/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-section-title">
                Nossos
                <span className="gradient-text block">Valores</span>
              </h2>
              <p className="text-premium-subtitle max-w-2xl mx-auto">
                Princípios que guiam cada atendimento e definem nossa excelência no mercado óptico.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="card-premium text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-card-title">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-premium">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-section-title">
                Nossa
                <span className="gradient-text block">Trajetória</span>
              </h2>
              <p className="text-premium-subtitle max-w-2xl mx-auto">
                Marcos importantes que definiram nossa jornada de sucesso ao longo dos anos.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-hero"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-medium relative z-10">
                        <span className="text-white font-bold">{item.year}</span>
                      </div>
                      <div className="ml-8 card-premium p-6 flex-1">
                        <p className="text-foreground font-medium">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-premium bg-muted/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-section-title">
                Nossa
                <span className="gradient-text block">Equipe</span>
              </h2>
              <p className="text-premium-subtitle max-w-2xl mx-auto">
                Profissionais especializados e apaixonados por cuidar da sua visão com excelência.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="card-premium text-center">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-card-title">{member.name}</h3>
                    <p className="text-accent font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;