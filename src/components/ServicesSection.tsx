import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Settings, User, Stethoscope } from 'lucide-react';
import eyeExamImage from '@/assets/eye-exam-service.jpg';
import adjustmentImage from '@/assets/glasses-adjustment-service.jpg';
import consultationImage from '@/assets/consultation-service.jpg';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Exames de Vista',
      description: 'Diagnóstico completo da sua saúde visual com equipamentos de última geração.',
      icon: Eye,
      image: eyeExamImage,
      features: ['Exame completo gratuito', 'Tecnologia digital', 'Relatório detalhado'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Ajustes Precisos',
      description: 'Serviços técnicos especializados para o perfeito conforto dos seus óculos.',
      icon: Settings,
      image: adjustmentImage,
      features: ['Ajustes personalizados', 'Reparos especializados', 'Manutenção preventiva'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Consultoria Personalizada',
      description: 'Atendimento exclusivo para escolher a armação ideal para seu rosto e estilo.',
      icon: User,
      image: consultationImage,
      features: ['Análise facial', 'Consultoria de estilo', 'Atendimento VIP'],
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section className="section-premium">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Serviços
            <span className="gradient-text block">Especializados</span>
          </h2>
          <p className="text-premium-subtitle max-w-2xl mx-auto">
            Atendimento completo com profissionais qualificados e tecnologia avançada 
            para cuidar da sua visão com a máxima excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="card-product group overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-soft`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-card-title">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="w-full group/btn hover:bg-accent/5">
                    Agendar Serviço
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-hero">
            Ver Todos os Serviços
            <Stethoscope className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;