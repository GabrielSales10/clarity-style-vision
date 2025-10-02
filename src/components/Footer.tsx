import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import logoImage from '@/assets/logo-oticas-levy.png';
import logoGami from '@/assets/logo-gami.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/5585991320090?text=Olá! Gostaria de agendar uma consulta na Óticas Levy.', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://www.instagram.com/otica_levy/', label: 'Instagram' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const services = [
    'Exame/Refração',
    'Ajuste e Manutenção',
    'Garantia & Pós-venda',
    'Lentes Personalizadas',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-premium">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  {/* <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center"> */}
                    {/* <span className="text-white font-bold text-xl">O</span> */}
                  {/* </div> */}
                  <div>
                    <h3 className="font-serif-elegant text-2xl font-bold">Óticas Levy</h3>
                    <p className="text-xs text-primary-foreground/70">Sua melhor visão está aqui!</p>
                  </div> 
                  {/* <img
                    src={logoImage}
                    alt="Óticas Levy - Sua melhor visão está aqui!"
                    className="h-24 w-auto"
                  /> */}
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Agende seu exame de vista computadorizado. Leva menos de 1 minuto.
                </p>
              </div>
              
              {/* Social Links */}
              {/* <div>
                <h4 className="font-semibold mb-3">Siga-nos</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-semibold mb-3">Siga-nos</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/80 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80 text-sm">
                      Av. Major Assis, 470<br />
                      Jardim Iracema, Fortaleza - CE<br />
                      CEP: 60345-150
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80 text-sm">(85) 3284-3058</p>
                    <p className="text-primary-foreground/80 text-sm">(85) 99132-0090</p>
                  </div>
                </div>
                
                {/* <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-primary-foreground/80 text-sm">
                    contato@oticapremium.com.br
                  </p>
                </div> */}
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80 text-sm">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 13h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
       <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            {/* ESQUERDA */}
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {currentYear} Óticas Levy. Todos os direitos reservados.
            </p>
        
            {/* CENTRO */}
            <a
              href="https://wa.me/5585986739137"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 mx-auto text-primary-foreground/70 hover:text-accent text-sm transition-colors"
            >
              <img 
                src="/logo-gami.png" // caminho real da logo
                alt="Logo GAMI"
                className="h-6 w-auto"
              />
              <span>Site produzido por GAMI</span>
            </a>
        
            {/* DIREITA */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              {/* <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">
                Termos de Uso
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;