import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Mouse } from 'lucide-react';
import Logo from './Logo';

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isDismissing, setIsDismissing] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    // 1. Lock body scrolling on mount
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 2. Wheel event handler for desktop
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 10 && !isDismissing) {
        triggerDismiss();
      }
    };

    // 3. Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null || isDismissing) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY.current - currentY;

      // If user swipes up (difference is positive and significant)
      if (diffY > 30) {
        triggerDismiss();
      }
    };

    // 4. Keyboard event handler (space, arrow down, page down)
    const handleKeyDown = (e: KeyboardEvent) => {
      const lockKeys = ['Space', 'ArrowDown', 'PageDown'];
      if ((e.code === 'Space' || e.code === 'ArrowDown' || e.code === 'PageDown') && !isDismissing) {
        e.preventDefault();
        triggerDismiss();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDismissing]);

  const triggerDismiss = () => {
    setIsDismissing(true);
  };

  const handleAnimationComplete = () => {
    // 5. Unlock scroll when the intro page slides away completely
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isDismissing && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh',
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1] // Custom refined cubic-bezier for elegant transition
            }
          }}
          onAnimationComplete={handleAnimationComplete}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-between py-16 px-6 select-none"
        >
          {/* Subtle gold elegant radial spotlight overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
          
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

          {/* Top Brand Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center font-sans text-[10px] text-law-gold uppercase tracking-[0.3em] font-light"
          >
            Escritório de Advocacia de Alto Padrão
          </motion.div>

          {/* Central Logo Container */}
          <div className="flex flex-col items-center justify-center flex-1 max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8 flex items-center justify-center"
            >
              {/* Premium backglow pulsing element */}
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-law-gold/15 blur-[80px] pointer-events-none animate-pulse duration-[4s]" />
              
              {/* Elegant floating container */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative p-8 rounded-2xl bg-gradient-to-b from-neutral-950/20 to-black/10 border border-slate-900/40 backdrop-blur-xs flex items-center justify-center"
              >
                <Logo size={220} className="filter drop-shadow-[0_16px_32px_rgba(212,175,55,0.22)]" />
              </motion.div>
            </motion.div>

            {/* Typography brand names with high fidelity custom animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-3"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[0.12em] text-white">
                VIANEI SCHMITT
              </h2>
              
              {/* Gold Divider mark */}
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-law-gold to-transparent mx-auto" />
              
              <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.25em] text-law-gold uppercase">
                Advocacia Tributária
              </p>
            </motion.div>
          </div>

          {/* Bottom Interactive Scroll Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center justify-center text-center space-y-4 cursor-pointer"
            onClick={triggerDismiss}
          >
            <div className="flex items-center gap-1.5 font-sans text-[10px] sm:text-xs text-slate-400 group uppercase tracking-widest hover:text-law-gold transition-colors">
              <span className="animate-bounce duration-[1.5s]">
                <Mouse size={14} className="text-law-gold inline mr-1" />
              </span>
              <span>Gire o scroll ou deslize para entrar</span>
            </div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-slate-950/80 border border-slate-800/80 hover:border-law-gold flex items-center justify-center text-law-gold transition-colors"
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
