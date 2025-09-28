import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "5585991320090";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta na Óticas Levy.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-large text-sm whitespace-nowrap animate-fade-in">
          Agende sua consulta!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-large hover:shadow-glow hover:scale-110 transition-all duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Pulse Animation Ring */}
      {/* <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div> */}
    </div>
  );
};

export default WhatsAppButton;