import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import mapaImage from '@/assets/mapa.png';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const whatsappNumber = "5585991320090";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta na Óticas Levy.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: [
        'Av. Major Assis, 470',
        'Jardim Iracema, Fortaleza - CE',
        'CEP: 60345-150'
      ]
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: [
        'Fixo: (85) 3284-3058',
        'WhatsApp: (85) 99132-0090',
        '                        '
      ]
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: [
        'contato@oticaslevy.com.br',
        'vendas@oticaslevy.com.br',
        'suporte@oticaslevy.com.br'
      ]
    },
    {
      icon: Clock,
      title: 'Horário',
      content: [
        'Segunda a Sexta: 9h às 18h',
        'Sábado: 9h às 14h',
        'Domingo: Fechado'
      ]
    }
  ];

  return (
    <section id="contato" className="section-premium bg-background">
      <div className="container-premium">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-xl text-primary border-primary/20 bg-primary/5 hover-glow">
            Entre em Contato
          </Badge>
          <h2 className="text-section-title">
            Estamos prontos para
            <span style={{ color: '#1976D2' }}> atendê-lo</span>
          </h2>
          <p className="text-premium-subtitle max-w-3xl mx-auto">
            Entre em contato conosco através dos canais abaixo ou visite nossa loja 
            para uma experiência completa com nossa equipe especializada.
          </p>
        </AnimatedSection>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <AnimatedSection 
                key={index}
                animation="scale"
                delay={index * 100}
              >
                <Card className="card-premium text-center group hover-lift">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500 hover:animate-pulse-glow">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-serif-elegant text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                      {info.content.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Map */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-left">
            <Card className="card-premium hover-lift">
              <CardHeader>
                <CardTitle className="font-serif-elegant text-2xl">
                  Nossa Localização
                </CardTitle>
                <p className="text-muted-foreground">
                  Visite nossa loja para uma experiência completa.
                </p>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center group hover:bg-muted/30 transition-colors duration-500">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-500" />
                    <div>
                      <h3 className="font-serif-elegant text-lg font-semibold">Óticas Levy</h3>
                      <p className="text-muted-foreground">
                        Av. Major Assis, 470<br />
                        Jardim Iracema, Fortaleza - CE
                      </p>
                      {/* <img 
                        src={mapaImage}
                        alt="Fundo Google Maps"
                        className="absolute inset-0 w-full h-full object-contain opacity-80 pointer-events-none"
                      /> */}
                      <Button 
                        variant="outline" 
                        className="mt-4 hover-glow"
                        onClick={() => window.open('https://maps.google.com/?q=Rua+Major+Assis+470+Fortaleza+CE', '_blank')}
                      >
                        Abrir no Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Como Chegar:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Metrô: Estação Consolação (Linha Verde)</li>
                    <li>• Ônibus: Diversas linhas param na Av. Major Assis, 470</li>
                    <li>• Carro: Estacionamento conveniado disponível</li>
                  </ul>
                </div> */}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;