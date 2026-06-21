import React from 'react';
import { PhoneCall, Mail, MapPin, ExternalLink, CalendarDays, KeyRound, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export default function ContactSection({ onOpenSchedule }: ContactSectionProps) {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Av.+Paulista,+Bela+Vista,+São+Paulo+-+SP', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-law-dark relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-law-gold/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Mockup CONTATO Main Block card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl border border-law-gold/15 bg-law-card shadow-2xl min-h-[480px] grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left / Center Grid Column containing texts and coordinates */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 text-left flex flex-col justify-between space-y-8 relative z-10 w-full">
            
            {/* Header section blocks */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-law-navy flex items-center justify-center border border-law-gold/20 shadow-inner flex-shrink-0">
                  <PhoneCall 
                    size={20} 
                    className="text-law-gold text-gradient bg-clip-text text-transparent"
                    style={{ backgroundColor: '#47420c', color: '#968213' }}
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-law-gold uppercase tracking-[0.25em] block leading-none mb-1 font-semibold">
                    Atendimento Imediato
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                    Contato
                  </h2>
                </div>
              </div>
              
              <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-xl">
                Estamos prontos para ajudar você e sua empresa a resolver questões tributárias com a maior eficiência, agilidade técnica e segurança legal. Fale hoje mesmo diretamente com nossa banca.
              </p>
            </div>

            {/* Middle Section: Direct Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="contact-book-btn"
                onClick={onOpenSchedule}
                className="px-6 py-3 bg-gradient-to-r from-law-gold via-yellow-600 to-law-gold text-law-dark font-sans font-semibold tracking-wider uppercase text-xs rounded-lg hover:shadow-xl hover:shadow-law-gold/15 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <CalendarDays size={14} />
                <span>Agendar Consulta</span>
              </button>

              <a
                href="https://wa.me/556199810707"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-transparent border border-slate-700 hover:border-law-gold text-slate-300 hover:text-law-gold-light text-center font-sans font-semibold tracking-wider uppercase text-xs rounded-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Outras Formas de Contato</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Bottom Section: Address card with custom security notes */}
            <div className="pt-6 border-t border-slate-800/60 max-w-lg">
              <div className="flex items-start sm:items-center gap-2 text-xs text-slate-400">
                <KeyRound size={13} className="text-law-gold flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>Dados de contato protegidos por sigilo profissional sob estatuto da OAB.</span>
              </div>
            </div>

          </div>

          {/* Right Grid Column: Solid Black Background */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[480px] overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-center bg-black">
            
            {/* Elegant gold particle glow matching the black background luxury look */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-law-gold/10 rounded-full blur-3xl pointer-events-none" />

            {/* Foreground Content Info list */}
            <div className="relative z-10 p-6 sm:p-8 md:p-12 space-y-6 md:space-y-8 text-left h-full flex flex-col justify-center">
              
              {/* Phone item click actions */}
              <a
                href="tel:6199810707"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-law-navy/90 flex items-center justify-center text-law-gold border border-law-gold/20 group-hover:border-law-gold transition-colors duration-300 flex-shrink-0">
                  <PhoneCall size={16} />
                </div>
                <div className="min-w-0">
                  <span className="font-sans text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5 font-semibold">Telefone Comercial</span>
                  <p className="font-mono text-sm sm:text-base md:text-lg text-white group-hover:text-law-gold transition-colors font-medium">
                    (61) 9981-0707
                  </p>
                </div>
              </a>

              {/* Email item */}
              <a
                href="mailto:schmittcreditotributario@gmail.com"
                className="flex items-center gap-4 group cursor-pointer w-full min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-law-navy/90 flex items-center justify-center text-law-gold border border-law-gold/20 group-hover:border-law-gold transition-colors duration-300 flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-sans text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5 font-semibold">E-mail Corporativo</span>
                  <p 
                    className="font-sans text-xs sm:text-sm text-white group-hover:text-law-gold transition-colors font-medium select-all break-all"
                  >
                    schmittcreditotributario@gmail.com
                  </p>
                </div>
              </a>

              {/* Location mapping coordinate item */}
              <button
                onClick={handleMapClick}
                className="flex items-center gap-4 group text-left focus:outline-none cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-law-navy/90 flex items-center justify-center text-law-gold border border-law-gold/20 group-hover:border-law-gold transition-colors duration-300 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-sans text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5 font-semibold">Localização Física</span>
                  <div className="flex items-center gap-1.5 font-sans text-xs md:text-sm text-white group-hover:text-law-gold transition-colors font-medium">
                    <span>São Paulo - SP</span>
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </button>

              {/* Additional Office Hours */}
              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-6">
                <div className="w-10 h-10 rounded-lg bg-law-navy/30 flex items-center justify-center text-slate-500 border border-slate-800 flex-shrink-0">
                  <Globe size={16} />
                </div>
                <div>
                  <span className="font-sans text-[10px] text-slate-500 uppercase tracking-widest block mb-0.5 font-semibold">Horário de Funcionamento</span>
                  <p className="font-sans text-[11px] text-slate-300 leading-normal">
                    Segunda a Sexta, das 09h às 18h (Horário de Brasília)
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
