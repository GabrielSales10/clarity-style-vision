import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Eye, ShoppingBag } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import sunglassesImage from '@/assets/sunglasses-collection.jpg';
import prescriptionImage from '@/assets/prescription-glasses.jpg';
import contactLensesImage from '@/assets/contact-lenses-product.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: 'Armação Ray-Ban Premium',
      description: 'Modelo clássico com tecnologia de lentes antirreflexo avançada',
      image: prescriptionImage,
      price: 'R$ 899',
      installments: '12x R$ 74,92',
      badge: 'Bestseller',
      reviews: 4.9,
    },
    {
      title: 'Óculos de Sol Oakley',
      description: 'Proteção UV total com design esportivo e lentes polarizadas',
      image: sunglassesImage,
      price: 'R$ 1.299',
      installments: '12x R$ 108,25',
      badge: 'Premium',
      reviews: 4.8,
    },
    {
      title: 'Lentes de Contato Diárias',
      description: 'Conforto absoluto durante todo o dia com hidratação natural',
      image: contactLensesImage,
      price: 'R$ 159',
      installments: '3x R$ 53,00',
      badge: 'Novidade',
      reviews: 4.7,
    },
  ];

  return (
    <section className="section-premium bg-background">
      <div className="container-premium">
        <AnimatedSection className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 hover-glow">
            Produtos Premium
          </Badge>
          <h2 className="text-section-title">
            Coleção Exclusiva de 
            <span className="animated-gradient-text"> Óculos Premium</span>
          </h2>
          <p className="text-premium-subtitle max-w-3xl mx-auto">
            Descubra nossa seleção cuidadosamente curada de óculos das melhores marcas 
            mundiais, combinando tecnologia avançada com design sofisticado.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedSection 
              key={index}
              animation="scale"
              delay={index * 150}
            >
              <Card className="card-product hover-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground animate-bounce-in">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif-elegant text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform" 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.reviews} avaliações)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-primary group-hover:animate-pulse-glow">
                          {product.price}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ou {product.installments}
                        </p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="px-3 hover-glow">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="btn-premium hover-lift">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;