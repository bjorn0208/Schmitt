import { useState } from 'react';
import { Briefcase, Landmark, ShieldCheck, Scale, Receipt, RefreshCcw, FileText, ChevronRight, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onOpenSchedule: (serviceName?: string) => void;
}

export default function Services({ onOpenSchedule }: ServicesProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const servicesData = [
    {
      title: "Planejamento Tributário",
      icon: <Calculator className="w-6 h-6 text-law-gold" />,
      brief: "Análise estratégica de regimes para redução lícita de carga fiscal.",
      details: "Estudo minucioso das operações da empresa para identificar e aplicar alternativas de estruturação jurídica e regimes tributários que resultem na menor carga de tributos federais, estaduais e municipais, totalmente dentro da lei.",
      benefits: ["Redução de impostos recorrentes", "Prevenção de contingências fiscais", "Modelagem societária customizada"]
    },
    {
      title: "Recuperação de Tributos",
      icon: <Receipt className="w-6 h-6 text-law-gold" />,
      brief: "Auditoria contábil dos últimos 5 anos para reaver impostos indevidos.",
      details: "Identificação, quantificação e compensação de tributos federais (PIS, COFINS, IRPJ, CSLL) e estaduais (ICMS) pagos a maior ou indevidamente nos últimos 60 meses, gerando injeção direta de liquidez no caixa corporativo.",
      benefits: ["Auditoria eletrônica de notas fiscais", "Compensações seguras e homologadas", "Aumento imediato de margem de lucro"]
    },
    {
      title: "Defesa em Autos de Infração",
      icon: <ShieldCheck className="w-6 h-6 text-law-gold" />,
      brief: "Defesas técnicas administrativas contra cobranças e multas do Fisco.",
      details: "Elaboração de impugnações de alta complexidade técnica perante conselhos fiscais (DRF, CARF e ritos estaduais/municipais), combatendo autuações abusivas, aplicando teses consolidadas para anular cobranças e multas confiscatórias.",
      benefits: ["Análise de nulidades formais", "Acompanhamento em tribunais administrativos", "Redução ou cancelamento do débito cobrado"]
    },
    {
      title: "Consultoria Tributária",
      icon: <FileText className="w-6 h-6 text-law-gold" />,
      brief: "Emissão de pareceres, relatórios de riscos e teses preventivas.",
      details: "Esclarecimento de dúvidas sobre tributos diretos e indiretos, elaboração de pareceres formais para embasamento de tomadas de decisão de alto impacto, interpretações de novas legislações e suporte diário às equipes fiscais internas.",
      benefits: ["Conformidade tributária permanente", "Mitigação de riscos em decisões de negócios", "Análise de leis de incentivos fiscais"]
    },
    {
      title: "Reestruturação Empresarial",
      icon: <RefreshCcw className="w-6 h-6 text-law-gold" />,
      brief: "Otimização tributária em fusões, cisões e holdings patrimoniais.",
      details: "Otimização de estruturas de grupos empresariais, fusões, cisões, incorporações e planejamento sucessório familiar (Holdings) para mitigar impactos de ITCMD, ITBI, imposto de renda e taxas operacionais.",
      benefits: ["Proteção e blindagem de patrimônio", "Transição societária simplificada", "Otimização de fluxos de dividendos"]
    },
    {
      title: "Contencioso Tributário",
      icon: <Scale className="w-6 h-6 text-law-gold" />,
      brief: "Representação judicial em defesas e execuções fiscais federais e estaduais.",
      details: "Atuação combativa em juízo através de Execuções Fiscais, Ações Anulatórias de Débitos Fiscais, Mandados de Segurança Preventivos, visando evitar penhora de faturamento, garantir emissão de certidões (CND) e reaver garantias idôneas.",
      benefits: ["Garantias judiciais inteligentes", "Prevenção de bloqueio em contas bancárias", "Sustentação oral em tribunais superiores"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-law-dark relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-law-gold/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mockup matching SERVIÇOS OFERECIDOS block header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          style={{ backgroundColor: '#060b15' }}
          className="relative overflow-hidden rounded-2xl border border-law-gold/15 p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12"
        >
          {/* Subtle Logo Watermark */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 pointer-events-none hidden lg:flex items-center justify-center">
            <Briefcase size={320} className="text-law-gold" />
          </div>

          {/* Left Column icon */}
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-law-navy flex items-center justify-center border border-law-gold/30 shadow-md">
            <Briefcase className="w-10 h-10 text-law-gold" />
          </div>

          {/* Content Column */}
          <div className="flex-grow text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-law-gold font-semibold block">
              Nossas Especialidades
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Serviços Oferecidos
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Atuação jurídica tributária altamente estratégica, customizada e tecnicamente rigorosa, abrangendo todas as esferas de defesa e otimização fiscal empresarial.
            </p>
          </div>
        </motion.div>

        {/* Services Grid matching style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const isExpanded = selectedIdx === idx;
            return (
              <motion.div
                key={service.title}
                layout="position"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-xl border transition-all duration-300 p-6 flex flex-col text-left ${
                  isExpanded
                    ? 'border-law-gold/40 bg-law-navy shadow-xl lg:col-span-2 lg:row-span-1'
                    : 'border-slate-800/80 bg-law-card/45 hover:bg-law-card hover:border-law-gold/20 hover:shadow-lg'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-law-navy flex items-center justify-center border border-law-gold/20">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-law-gold-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-law-gold mt-0.5">
                      Direito Tributário
                    </p>
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed mb-6 font-light">
                  {service.brief}
                </p>

                {/* Fully Expanded Details Drawer for exceptional UI polish */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mb-6 space-y-4 pt-4 border-t border-slate-800"
                    >
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {service.details}
                      </p>
                      <div>
                        <span className="font-mono text-[10px] text-law-gold font-medium uppercase tracking-wider block mb-2">
                          Principais Benefícios:
                        </span>
                        <ul className="space-y-1.5 pl-1">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                              <span className="w-1 text-law-gold select-none mt-1">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action CTA row */}
                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-slate-800/50">
                  <button
                    onClick={() => setSelectedIdx(isExpanded ? null : idx)}
                    className="text-xs font-mono text-slate-400 hover:text-law-gold tracking-wider transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{isExpanded ? "Recolher Info" : "Saber Mais Detalhes"}</span>
                  </button>

                  <button
                    onClick={() => onOpenSchedule(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-sans font-medium text-law-gold hover:text-law-gold-light tracking-wider uppercase cursor-pointer"
                  >
                    <span>Agendar</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
