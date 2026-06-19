import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Send, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate standard save or store
    const subscribers = localStorage.getItem('vianei_subscribers');
    const subList = subscribers ? JSON.parse(subscribers) : [];
    subList.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('vianei_subscribers', JSON.stringify(subList));

    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-law-dark border-t border-slate-800/80 pt-16 pb-8 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Column 1: Detailed brand logo identity */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border border-law-gold/30 bg-law-navy group-hover:scale-105 transition-transform">
                <Logo size={28} />
              </div>
              <div>
                <h3 className="font-display font-medium text-base tracking-wider text-white group-hover:text-law-gold transition-colors">
                  VIANEI SCHMITT
                </h3>
                <p className="text-[8px] tracking-[0.18em] text-law-gold uppercase font-medium">
                  Advocacia Tributária
                </p>
              </div>
            </button>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light font-sans max-w-sm">
              Excelência em assessoria jurídica tributária estratégica com focado absoluto em resultados reais, conduta ética incorruptível e relacionamentos de confiança mútua e duradoura.
            </p>

            {/* Social media connections info list */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-law-gold hover:text-law-gold flex items-center justify-center text-slate-400 transition-all duration-300 bg-law-navy/30"
              >
                <Facebook size={14} className="fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-law-gold hover:text-law-gold flex items-center justify-center text-slate-400 transition-all duration-300 bg-law-navy/30"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700/80 hover:border-law-gold hover:text-law-gold flex items-center justify-center text-slate-400 transition-all duration-300 bg-law-navy/30"
              >
                <Linkedin size={14} className="fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation link groups */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-[0.15em]">
              Navegação
            </h4>
            <div className="flex flex-col space-y-2">
              <button onClick={() => handleScrollTo('home')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Home
              </button>
              <button onClick={() => handleScrollTo('sobre')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Sobre Dr. Vianei
              </button>
              <button onClick={() => handleScrollTo('sobre-o-que-e')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Pra Quem É
              </button>
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Serviços Oferecidos
              </button>
              <button onClick={() => handleScrollTo('blog')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Feedback & Casos
              </button>
              <button onClick={() => handleScrollTo('contato')} className="text-left text-xs text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Contato Direto
              </button>
            </div>
          </div>

          {/* Column 3: Tax Areas categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-[0.15em]">
              Serviços
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Planejamento Tributário preventivo
              </button>
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Recuperação de Tributos Federais e Estaduais
              </button>
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Defesa em Autos de Infração Municipal ou Estadual
              </button>
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Reestruturação Societária & Planejamento Sucessório
              </button>
              <button onClick={() => handleScrollTo('servicos')} className="text-left text-slate-400 hover:text-law-gold transition-colors cursor-pointer">
                Contencioso Tributário administrativo e judicial
              </button>
            </div>
          </div>

          {/* Column 4: Newsletter opt-in */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-medium text-xs text-white uppercase tracking-[0.15em]">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-normal font-light">
              Receba conteúdos exclusivos de boletins fiscais, alterações na legislação e teses tributárias.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-law-navy/80 border border-slate-800 rounded-lg py-2.5 pl-3 pr-10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-law-gold transition"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-law-gold/90 hover:bg-law-gold text-law-dark rounded transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {success && (
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 animate-pulse mt-1">
                  <ShieldCheck size={12} />
                  <span>Inscrição confirmada com sucesso!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright line layout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p>© {currentYear} Vianei Schmitt Advocacia Tributária. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#privacidade" className="hover:text-law-gold transition-colors block">
              Política de Privacidade
            </a>
            <a href="#termos" className="hover:text-law-gold transition-colors block">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
