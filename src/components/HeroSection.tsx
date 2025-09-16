import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-glasses.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Óculos premium de alta qualidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Premium desde 1985</span>
              </div>
              
              <h1 className="text-hero">
                Enxergue o mundo com
                <span className="gradient-text block">
                  estilo e clareza
                </span>
              </h1>
              
              <p className="text-premium-subtitle text-white/90 max-w-xl">
                Descubra nossa coleção exclusiva de óculos e lentes premium. 
                Tecnologia avançada, design sofisticado e atendimento personalizado 
                para cuidar da sua visão com excelência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-premium border-white text-white hover:bg-white hover:text-primary"
              >
                Conheça nossos Produtos
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-accent" />
                <span className="text-sm">Exames gratuitos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">Garantia total</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm">Marcas premium</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;