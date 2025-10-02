"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-card text-card-foreground p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-border">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                <Link to="/privacy-policy" className="underline text-primary-red hover:text-primary-red-dark">
                  política de privacidade
                </Link>.
              </p>
              <Button
                onClick={handleAccept}
                className="bg-primary-red hover:bg-primary-red-dark text-white rounded-lg px-6 flex-shrink-0"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;