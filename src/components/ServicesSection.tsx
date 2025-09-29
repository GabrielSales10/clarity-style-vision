import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Award, Stethoscope, Settings, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import eyeExamImage from '@/assets/eye-exam-service.jpg';
import adjustmentImage from '@/assets/glasses-adjustment-service.jpg';
import consultationImage from '@/assets/consultation-service.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: 'Exame/Refração “Gratuito”',
      description: '',
      icon: Stethoscope,
      image: eyeExamImage,
      features: ['Teste de acuidade', 'Medição de DNP', 'Orientação completa'],
      duration: '45 min',
      price: 'Gratuito',
    },
    {
      title: 'Ajuste e Manutenção',
      description: '',
      icon: Settings,
      image: adjustmentImage,
      features: ['Aperto de hastes', 'Alinhamento', 'Troca de plaquetas.'],
      duration: '15 min',
      price: 'R$ 25',
    },
    {
      title: 'Garantia & Pós-venda',
      description: '',
      icon: Users,
      image: consultationImage,
      features: ['Cobertura contra defeitos de fabricação', 'Suporte ágil.', 'Recomendações'],
      duration: '30 min',
      price: 'Cortesia',
    },
    {
      title: 'Lentes Personalizadas',
      description: '',
      icon: Users,
      image: consultationImage,
      features: ['Anti-reflexo', 'Blue control', 'Transitions', 'Progressivas sob medida.'],
      duration: '30 min',
      price: 'Cortesia',
    },
  ];

  return (
    <section className="section-premium bg-muted/20">
      <div className="container-premium">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-xl text-primary border-primary/20 bg-primary/5 hover-glow">
            Serviços
          </Badge>
          <h2 className="text-section-title">
            Cuidado completo para
            <span style={{ color: "#1976D2" }}> sua visão</span>
          </h2>
          <p className="text-premium-subtitle max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados, desde exames 
            detalhados até ajustes precisos, sempre com tecnologia de ponta.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={index * 200}
            >
              <Card className="card-premium text-center group hover-lift">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 hover:animate-pulse-glow">
                        <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-serif-elegant text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm hover:text-primary transition-colors">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 animate-pulse"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* <div className="flex justify-center">
                        <Button className="btn-premium hover-glow">
                          Saiba Mais
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
