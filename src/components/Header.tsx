import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenSchedule: () => void;
}

export default function Header({ onOpenSchedule }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active highlights
      const sections = ['home', 'sobre', 'servicos', 'blog', 'contato'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-law-dark/95 backdrop-blur-md border-b border-law-gold/10 py-3 shadow-lg'
          : 'bg-law-dark/90 backdrop-blur-md border-b border-law-gold/5 py-3 md:bg-transparent md:border-b-0 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Text brand only */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left focus:outline-none group cursor-pointer min-w-0"
          >
            <h1 className="font-display font-bold text-sm sm:text-base md:text-lg leading-none tracking-wider text-white group-hover:text-law-gold-light transition-colors whitespace-nowrap">
              VIANEI SCHMITT
            </h1>
            <p className="font-sans text-[8px] sm:text-[9px] font-medium tracking-[0.15em] sm:tracking-[0.2em] text-law-gold uppercase whitespace-nowrap mt-1">
              Advocacia Tributária
            </p>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-sans text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer relative py-1 ${
                  activeSection === link.id
                    ? 'text-law-gold'
                    : 'text-slate-300 hover:text-law-gold-light'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-law-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-law-gold focus:outline-none p-2 cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[68px] z-50 bg-law-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out border-t border-law-navy-light/50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6 flex flex-col h-full bg-gradient-to-b from-law-navy to-law-dark">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left font-display text-lg tracking-wide uppercase py-2 border-b border-slate-800 flex items-center justify-between cursor-pointer ${
                activeSection === link.id ? 'text-law-gold' : 'text-slate-300'
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-law-gold" />}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
