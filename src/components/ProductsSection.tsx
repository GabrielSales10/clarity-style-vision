import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Glasses, Sun, Contact, Wrench } from 'lucide-react';
import sunglassesImage from '@/assets/sunglasses-collection.jpg';
import prescriptionImage from '@/assets/prescription-glasses.jpg';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Óculos de Grau',
      description: 'Armações elegantes com lentes de alta precisão para todas as necessidades visuais.',
      icon: Glasses,
      image: prescriptionImage,
      features: ['Lentes antirreflexo', 'Proteção UV', 'Multifocais disponíveis'],
    },
    {
      id: 2,
      title: 'Óculos de Sol',
      description: 'Proteção total com estilo. Coleção exclusiva das melhores marcas mundiais.',
      icon: Sun,
      image: sunglassesImage,
      features: ['Proteção UV 100%', 'Lentes polarizadas', 'Designs exclusivos'],
    },
    {
      id: 3,
      title: 'Lentes de Contato',
      description: 'Liberdade visual com conforto absoluto. Diversas opções para seu estilo de vida.',
      icon: Contact,
      features: ['Lentes diárias', 'Multifocais', 'Coloridas e cosméticas'],
    },
    {
      id: 4,
      title: 'Serviços Especializados',
      description: 'Atendimento completo com profissionais qualificados e equipamentos modernos.',
      icon: Wrench,
      features: ['Exames de vista', 'Ajustes precisos', 'Consultoria personalizada'],
    },
  ];

  return (
    <section className="section-premium bg-muted/30">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Produtos e Serviços
            <span className="gradient-text block">Premium</span>
          </h2>
          <p className="text-premium-subtitle max-w-2xl mx-auto">
            Oferecemos uma linha completa de produtos ópticos e serviços especializados 
            para cuidar da sua visão com a máxima qualidade e sofisticação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="card-product group">
                <div className="relative overflow-hidden">
                  {product.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-soft">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-card-title">{product.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="w-full group/btn hover:bg-accent/5">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-hero">
            Ver Todos os Produtos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;