import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import headerLogo from '../assets/images/header-logo.png';

interface HeroProps {
  onOpenSchedule: () => void;
}

export default function Hero({ onOpenSchedule }: HeroProps) {
  const scrollToAbout = () => {
    const el = document.getElementById('sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-black"
    >
      {/* Background Image Container with gradient overlay */}
      <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none z-0 select-none overflow-hidden opacity-30">
        <img
          src={headerLogo}
          alt="GS Monogram Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10" />
      </div>

      {/* Absolute Decorative Background Overlays for rich contrast & readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black to-transparent z-0" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent z-0" />
      
      {/* Subtle spotlight effect for black ambient look */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-law-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-180px)]">
          
          {/* Left Column: Main persuasive titles */}
          <div className="lg:col-span-12 max-w-3xl flex flex-col justify-center space-y-6 md:space-y-8 text-left">
            <div>
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-law-dark/85 backdrop-blur-md border border-law-gold/30 text-law-gold text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4"
              >
                <ShieldCheck size={14} />
                <span>Advocacia Tributária de Alta Performance</span>
              </motion.div>

              {/* Outstanding Main Titles */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6.5xl text-white leading-tight tracking-tight drop-shadow-md"
              >
                Defendendo Seus Direitos. <br />
                <span className="relative inline-block text-gradient bg-gradient-to-r from-law-gold via-yellow-300 to-law-gold-light bg-clip-text text-transparent italic font-serif font-normal">
                  Protegendo Seu Patrimônio.
                </span>
              </motion.h1>
            </div>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl font-sans font-light leading-relaxed border-l-2 border-law-gold/45 pl-4 drop-shadow-sm"
            >
              Assessoria jurídica tributária estratégica para empresas e pessoas físicas com foco em segurança jurídica, ética e economia tributária de resultados mensuráveis.
            </motion.p>

            {/* Micro Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-4 pb-3 border-y border-slate-700/50 max-w-lg bg-law-dark/40 backdrop-blur-xs px-3 rounded-lg"
            >
              <div>
                <span className="font-display font-medium text-lg sm:text-2xl text-law-gold block">15+ Anos</span>
                <span className="font-sans text-[10px] uppercase text-slate-300 tracking-wider">De Experiência</span>
              </div>
              <div>
                <span className="font-display font-medium text-lg sm:text-2xl text-law-gold block">R$ 50M+</span>
                <span className="font-sans text-[10px] uppercase text-slate-300 tracking-wider">Recuperados</span>
              </div>
              <div>
                <span className="font-display font-medium text-lg sm:text-2xl text-law-gold block">98%</span>
                <span className="font-sans text-[10px] uppercase text-slate-300 tracking-wider">Salvo Conduto</span>
              </div>
            </motion.div>

            {/* General Lead Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <button
                id="hero-book-btn"
                onClick={onOpenSchedule}
                className="group px-7 py-3.5 bg-gradient-to-r from-law-gold via-yellow-600 to-law-gold text-law-dark font-sans font-semibold tracking-wider uppercase text-xs rounded-lg hover:shadow-xl hover:shadow-law-gold/15 hover:-translate-y-0.5 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Consulta</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-about-btn"
                onClick={scrollToAbout}
                style={{ backgroundColor: '#060b15' }}
                className="group px-7 py-3.5 backdrop-blur-md border border-slate-700 hover:border-law-gold text-white hover:text-law-gold-light font-sans font-semibold tracking-wider uppercase text-xs rounded-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Saiba Mais</span>
                <ArrowRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
