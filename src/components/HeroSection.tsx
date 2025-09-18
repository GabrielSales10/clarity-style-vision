import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-glasses.jpg';
import { useTypewriter, useParallax } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { displayedText: typewriterText } = useTypewriter("estilo e clareza", 150);
  const { ref: parallaxRef, offset } = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={parallaxRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src={heroImage}
          alt="Óculos premium de alta qualidade"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              
              
              <h1 className="text-hero animate-fade-in-up">
                Enxergue o mundo com
                <span className="block relative">
                  <span className="inline-block overflow-hidden">
                    <span 
                      className="inline-block border-r-2 border-white/60 animate-blink"
                      style={{ 
                        color: "#D32F2F",
                        width: `${(typewriterText.length / "estilo e clareza".length) * 100}%`,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {typewriterText}
                    </span>
                  </span>
                </span>
              </h1>
              
              <p className="text-premium-subtitle text-white/90 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                Descubra nossa coleção exclusiva de óculos e lentes premium. 
                Tecnologia avançada, design sofisticado e atendimento personalizado 
                para cuidar da sua visão com excelência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <Button size="lg" className="btn-hero group hover-glow"
                onClick={() => scrollToSection('#contato')}
                >
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" />
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-premium border-white text-black hover:bg-white hover:text-primary hover-lift"
              >
                Conheça nossos Produtos
              </Button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2 hover-glow cursor-default">
                <Eye className="w-5 h-5 text-accent animate-pulse-glow" />
                <span className="text-sm">Exames gratuitos</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow cursor-default">
                <Shield className="w-5 h-5 text-accent animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm">Garantia total</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow cursor-default">
                <Award className="w-5 h-5 text-accent animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <span className="text-sm">Marcas premium</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
