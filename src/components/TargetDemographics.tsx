import { Users, Building2, UserCheck, ShieldAlert, TrendingDown, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function TargetDemographics() {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 text-law-gold" />,
      title: "Empresas & Startups",
      description: "Recuperação tributária ativa, redução de carga fiscal setorial, conformidade fiscal rígida e proteção contra as sanções impostas pela Receita Federal, Estadual ou Municipal.",
      bullets: ["Setor Industrial & Comercial", "Empresas de Serviços", "Pequeno, Médio e Grande Porte"]
    },
    {
      icon: <UserCheck className="w-8 h-8 text-law-gold" />,
      title: "Pessoas Físicas",
      description: "Defesa patrimonial inteligente, blindagem de bens familiares, planejamento de sucessão familiar (Holdings) e defesas técnicas em autos contra fraudes ou sonegação impostas indiretamente.",
      bullets: ["Sócios & Acionistas", "Profissionais Liberais", "Grandes Patrimônios"]
    }
  ];

  return (
    <section id="sobre-o-que-e" className="py-20 bg-law-dark relative overflow-hidden">
      {/* Background Decors */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-law-gold/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner matching the mockup's "PRA QUEM É" card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          style={{ backgroundColor: '#060b15' }}
          className="relative overflow-hidden rounded-2xl border border-law-gold/15 p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Subtle logo watermark in right side background using CSS absolute positioning */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none hidden lg:flex items-center justify-center">
            <Users size={320} className="text-law-gold" />
          </div>

          {/* Left Column icon frame */}
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-law-navy flex items-center justify-center border border-law-gold/30 shadow-md">
            <Users className="w-10 h-10 text-law-gold" />
          </div>

          {/* Content Column */}
          <div className="flex-grow text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-law-gold font-semibold block">
              Público Alvo
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Pra Quem É
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Empresas de todos os portes e pessoas físicas que buscam segurança jurídica total, economia tributária inteligente e soluções estratégicas personalizadas para superar desafios fiscais, auditorias invasivas e litígios judiciais severos.
            </p>
          </div>
        </motion.div>

        {/* Detailed Segment Grid for Richer Layout Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-law-card/50 hover:bg-law-card border border-slate-800/80 hover:border-law-gold/20 rounded-xl p-6 md:p-8 transition-all duration-300 group shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-law-dark rounded-xl border border-slate-700/60 group-hover:border-law-gold/30 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display font-semibold text-lg md:text-xl text-white group-hover:text-law-gold-light transition-colors">
                  {card.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light text-left">
                {card.description}
              </p>

              {/* Bullets stack */}
              <div className="border-t border-slate-800/80 pt-4 space-y-2">
                {card.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-law-gold/80" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
