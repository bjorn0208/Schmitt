import { User } from 'lucide-react';
import { motion } from 'motion/react';
import lawyerAbout from '../assets/images/lawyer_about_1781823037092.jpg';

export default function ProfileSection() {
  return (
    <section id="sobre" className="py-20 bg-law-dark relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-law-gold/3 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mockup QUEM É VIANEI SCHMITT block header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-law-gold/15 bg-law-card p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12"
        >
          {/* Subtle Logo Watermark */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none hidden lg:flex items-center justify-center">
            <User size={320} className="text-law-gold" />
          </div>

          {/* Left Column icon */}
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-law-navy flex items-center justify-center border border-law-gold/30 shadow-md">
            <User className="w-10 h-10 text-law-gold" />
          </div>

          {/* Content Column */}
          <div className="flex-grow text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-law-gold font-semibold block">
              Sócio Titular
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Quem é Vianei Schmitt
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Fundador do escritório Vianei Schmitt Advocacia Tributária, atuo estrategicamente na área jurídica desde 2010. Graduado em Direito pela UNIC - Universidade de Cuiabá em 2009, consolidei uma sólida reputação profissional na defesa do patrimônio corporativo contra excessivas imposições fiscais e arbitrariedades autuadas.
            </p>
          </div>
        </motion.div>

        {/* Mockup layout featuring Vianei's portrait, custom shield, and details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12 text-left">
          
          {/* Column 1: Bio & Credentials */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <span className="text-law-gold text-xs font-mono uppercase tracking-widest block">Sobre o Fundador</span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-white leading-tight">
                Advocacia Estratégica, Rigor Técnico e Soluções Sob Medida
              </h3>
              <p className="font-sans text-slate-300 text-sm md:text-base leading-relaxed font-light">
                Advogado atuante de forma contínua e dedicada desde 2010, graduado em Direito pela UNIC - Universidade de Cuiabá em 2009. Com sólida experiência profissional, atua com excelência jurídica na defesa dos direitos de empresas e pessoas físicas. Referência em soluções estratégicas preventivas, conformidade regulatória, planejamento fiscal inteligente e contencioso administrativo e judicial de alto impacto socioeconômico. No coração de cada tese jurídica está o compromisso com a justiça constitucional e a proteção ao patrimônio dos nossos clientes.
              </p>
            </div>

            {/* Professional Signature block */}
            <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-base text-law-gold-light leading-relaxed">
                  "O verdadeiro planejamento tributário não busca atalhos, busca justiça constitucional."
                </p>
                <div className="font-display font-medium text-xs uppercase text-slate-400 tracking-wider mt-2">
                  — Dr. Vianei Schmitt, OAB/MT
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Professional Image Column */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-xl border border-law-gold/15 pointer-events-none transform -translate-x-2 -translate-y-2" />
              
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-800 bg-law-navy aspect-[3/4]">
                <img
                  src={lawyerAbout}
                  alt="Dr. Vianei Schmitt - Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                />
                
                {/* Elegant gold corner lines overlay */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-law-gold rounded-tr" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-law-gold rounded-bl" />
                <div className="absolute inset-0 bg-gradient-to-t from-law-dark via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
