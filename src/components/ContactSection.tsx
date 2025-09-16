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

  const whatsappNumber = "5511987654321";
  const whatsappMessage = "Olá! Gostaria de entrar em contato com a Óticas Levy.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: [
        'Rua Augusta, 123',
        'Consolação, São Paulo - SP',
        'CEP: 01305-000'
      ]
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: [
        'Fixo: (11) 3456-7890',
        'WhatsApp: (11) 98765-4321',
        'Emergência: (11) 99999-0000'
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
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 hover-glow">
            Entre em Contato
          </Badge>
          <h2 className="text-section-title">
            Estamos Prontos para
            <span className="animated-gradient-text"> Atendê-lo</span>
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

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-right">
            <Card className="card-premium hover-lift">
              <CardHeader>
                <CardTitle className="font-serif-elegant text-2xl">
                  Envie sua Mensagem
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulta">Agendamento de Consulta</SelectItem>
                        <SelectItem value="produtos">Informações sobre Produtos</SelectItem>
                        <SelectItem value="servicos">Dúvidas sobre Serviços</SelectItem>
                        <SelectItem value="sugestao">Sugestões</SelectItem>
                        <SelectItem value="reclamacao">Reclamações</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Descreva como podemos ajudá-lo..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-premium flex-1 hover-glow">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      className="hover-glow"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection animation="fade-left">
            <Card className="card-premium hover-lift">
              <CardHeader>
                <CardTitle className="font-serif-elegant text-2xl">
                  Nossa Localização
                </CardTitle>
                <p className="text-muted-foreground">
                  Visite nossa loja no coração de São Paulo para uma experiência completa.
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center group hover:bg-muted/30 transition-colors duration-500">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-500" />
                    <div>
                      <h3 className="font-serif-elegant text-lg font-semibold">Óticas Levy</h3>
                      <p className="text-muted-foreground">
                        Rua Augusta, 123<br />
                        Consolação, São Paulo - SP
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4 hover-glow"
                        onClick={() => window.open('https://maps.google.com/?q=Rua+Augusta+123+São+Paulo+SP', '_blank')}
                      >
                        Abrir no Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Como Chegar:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Metrô: Estação Consolação (Linha Verde)</li>
                    <li>• Ônibus: Diversas linhas param na Rua Augusta</li>
                    <li>• Carro: Estacionamento conveniado disponível</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;