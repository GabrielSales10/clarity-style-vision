import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
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
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Reset form
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-gray-dark text-primary-foreground">
          <div className="container-premium">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-hero mb-6">
                Entre em
                <span className="gradient-text block">Contato</span>
              </h1>
              <p className="text-xl leading-relaxed">
                Estamos prontos para atendê-lo! Entre em contato conosco através 
                dos canais abaixo ou visite nossa loja para uma experiência completa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-premium">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title">Localização</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Av. Major Assis, 470<br />
                    Jardim Iracema, Fortaleza - CE<br />
                    CEP: 60345-150
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title">Telefones</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fixo: (85) 3284-3058<br />
                    WhatsApp: (85) 99132-0090<br />
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title">E-mail</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    contato@oticapremium.com.br<br />
                    vendas@oticapremium.com.br<br />
                    suporte@oticapremium.com.br
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-card-title">Horário</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 14h<br />
                    Domingo: Fechado
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form & Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-section-title text-2xl">
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
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
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
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="btn-hero flex-1">
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        className="btn-outline-premium"
                        onClick={() => window.open(whatsappUrl, '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-section-title text-2xl">
                    Nossa Localização
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Visite nossa loja para uma experiência completa.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="w-16 h-16 text-accent mx-auto" />
                      <div>
                        <h3 className="font-semibold text-lg">Óticas Levy</h3>
                        <p className="text-muted-foreground">
                          Av. Major Assis, 470<br />
                          Jardim Iracema, Fortaleza - CE
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => window.open('https://maps.google.com/?q=Rua+Major+Assis+470+Fortaleza+CE', '_blank')}
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
                      <li>• Ônibus: Diversas linhas param na Av. Major Assis, 470</li>
                      <li>• Carro: Estacionamento conveniado disponível</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;