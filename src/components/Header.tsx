 import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from '@/assets/logo-oticas-levy.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* HEADER FIXO */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('#inicio')}
            >
              <img
                src={logoImage}
                alt="Óticas Levy - Sua melhor visão está aqui!"
                className="h-10 md:h-14 w-auto"
              />
            </div>

            {/* Navegação desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-accent font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Botões desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/5585991320090?text=Olá! Gostaria de agendar uma consulta na Óticas Levy.', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                className="btn-hero"
                onClick={() => scrollToSection('#contato')}
              >
                Agende sua Consulta
              </Button>
            </div>

            {/* Botão menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 z-40 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="container-premium py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-accent font-medium py-2 transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://wa.me/5585991320090?text=Olá! Gostaria de agendar uma consulta na Óticas Levy.', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    className="btn-hero"
                    onClick={() => scrollToSection('#contato')}
                  >
                    Agende sua Consulta
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer para não cortar conteúdo */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;
