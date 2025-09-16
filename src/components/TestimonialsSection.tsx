import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Executiva',
      content: 'Atendimento excepcional! Encontrei o óculos perfeito e o exame foi muito detalhado. Recomendo a todos que buscam qualidade premium.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Designer',
      content: 'Variedade incrível de marcas e modelos. A equipe é super profissional e me ajudou a escolher um óculos que combina perfeitamente comigo.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Médica',
      content: 'Já sou cliente há anos. A qualidade dos produtos e o pós-venda são excepcionais. Sempre indico para meus pacientes.',
      rating: 5,
      avatar: '👩‍⚕️',
    },
  ];

  const brands = [
    'Ray-Ban', 'Oakley', 'Prada', 'Gucci', 'Tom Ford', 
    'Persol', 'Versace', 'Armani', 'Dior', 'Chanel'
  ];

  return (
    <section className="section-premium">
      <div className="container-premium">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            O que nossos clientes
            <span className="gradient-text block">dizem sobre nós</span>
          </h2>
          <p className="text-premium-subtitle max-w-2xl mx-auto">
            Milhares de clientes satisfeitos confiam na nossa expertise e qualidade premium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-premium text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-4xl mb-2">{testimonial.avatar}</div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Brands */}
        <div className="text-center">
          <h3 className="text-2xl font-serif-elegant font-semibold mb-8 text-foreground">
            Marcas Parceiras Premium
          </h3>
          
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="text-lg font-medium text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              E muitas outras marcas exclusivas disponíveis em nossa loja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;