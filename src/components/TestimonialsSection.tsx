import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Júlia Almeida',
      location: 'Fortaleza, CE',
      comment: 'Atendimento excepcional! A qualidade dos óculos é incrível e o exame foi muito detalhado. Recomendo para todos.',
      rating: 5,
    },
    {
      name: 'Alberto Martins',
      location: 'Fortaleza, CE',
      comment: 'Excelente variedade de marcas premium. A equipe me ajudou a encontrar o modelo perfeito para meu rosto.',
      rating: 5,
    },
    {
      name: 'Marcos Rocha',
      location: 'Fortaleza, CE',
      comment: 'Já sou cliente há anos. Sempre encontro as últimas tendências mais modernas e exclusivas, e o pós-venda é impecável.',
      rating: 5,
    },
  ];

  const brands = [
    'Ray-Ban', 'Oakley', 'Prada', 'Gucci', 'Tom Ford', 
    'Persol', 'Versace', 'Armani', 'Dior', 'Chanel'
  ];

  return (
    <section className="section-premium bg-background">
      <div className="container-premium">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className=" text-xl text-primary border-primary/20 bg-primary/5 hover-glow">
            Depoimentos
          </Badge>
          <h2 className="text-section-title">
            O que nossos 
            <span style={{ color: "#1976D2" }}> clientes dizem</span>
          </h2>
          <p className="text-premium-subtitle max-w-3xl mx-auto">
            Mais de 10.000 clientes satisfeitos confiam na Óticas Levy para 
            cuidar da sua visão com excelência e profissionalismo.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className="card-premium relative hover-lift">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="absolute top-4 right-4">
                      <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-foreground font-medium leading-relaxed">
                      "{testimonial.comment}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 hover:animate-pulse-glow">
                        <span className="font-semibold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                      </div>
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

export default TestimonialsSection;
