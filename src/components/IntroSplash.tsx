import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Mouse } from 'lucide-react';
import headerLogo from '../assets/images/header-logo.png';
import Logo from './Logo';

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isDismissing, setIsDismissing] = useState(false);
  const [videoError, setVideoError] = useState(false);
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
          className="fixed inset-0 z-[100] bg-[#040a18] flex flex-col items-center justify-between py-16 px-6 select-none"
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

          {/* Central Logo Container - Beautiful horizontal layout matching the uploaded logo exactly */}
          <div className="flex flex-col items-center justify-center flex-1 max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left w-full px-4"
            >
              {/* Premium backglow pulsing element */}
              <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-law-gold/10 blur-[100px] pointer-events-none animate-pulse duration-[5s] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Left Side: Floating Gold Monogram Shield Logo or Rotating Video */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative flex-shrink-0 flex items-center justify-center z-10"
              >
                {/* Left Side: Rotating Video */}
                <img 
                  src={headerLogo}
                  alt="Logo"
                  className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] object-contain filter drop-shadow-[0_12px_24px_rgba(212,175,55,0.25)] rounded-lg"
                />
              </motion.div>

              {/* Right Side: Elegant brand typography with Grings & Schmitt name and spaced gold subtitle */}
              <div className="flex flex-col justify-center select-text z-10 space-y-1.5 md:space-y-3">
                <motion.h2
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.06em] text-white whitespace-nowrap"
                >
                  GRINGS & SCHMITT
                </motion.h2>
                
                {/* Elegant subtle gold divider line (on mobile it centers, on desktop it aligns left) */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-[1px] bg-gradient-to-r from-law-gold/40 via-law-gold to-transparent max-w-[280px] md:max-w-none mx-auto md:mx-0"
                />
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.22em] sm:tracking-[0.28em] text-law-gold uppercase whitespace-nowrap"
                >
                  CONSULTORIA TRIBUTÁRIA
                </motion.p>
              </div>
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
