import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

const CTASection = () => {
  const whatsappNumber = "5511987654321";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta na Ótica Premium.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="section-premium bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      <div className="container-premium relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif-elegant font-bold mb-6">
            Pronto para enxergar o mundo
            <span className="block text-accent-light">com estilo e clareza?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Agende sua consulta gratuita hoje mesmo e descubra como podemos 
            transformar sua experiência visual com produtos premium e atendimento especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-white shadow-large hover:shadow-glow transition-all duration-300 group"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Agendar via WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora: (11) 3456-7890
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <MapPin className="w-6 h-6 text-accent mx-auto" />
              <h3 className="font-semibold">Localização</h3>
              <p className="text-primary-foreground/80 text-sm">
                Rua Augusta, 123<br />
                Consolação, São Paulo - SP
              </p>
            </div>
            
            <div className="space-y-2">
              <Clock className="w-6 h-6 text-accent mx-auto" />
              <h3 className="font-semibold">Horário de Funcionamento</h3>
              <p className="text-primary-foreground/80 text-sm">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
            
            <div className="space-y-2">
              <Phone className="w-6 h-6 text-accent mx-auto" />
              <h3 className="font-semibold">Contato Direto</h3>
              <p className="text-primary-foreground/80 text-sm">
                (11) 3456-7890<br />
                contato@oticapremium.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;