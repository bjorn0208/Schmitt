import { MessageSquare, Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Carlos Mendes",
      role: "CEO, Indústria Mendes",
      text: "O trabalho do Dr. Vianei foi essencial para recuperarmos valores extremamente significativos para nossa empresa. Profissional altamente qualificado, transparente e comprometido com o resultado.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1547037579-f0fc020ac3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Juliana Oliveira",
      role: "Diretora Financeira",
      text: "Excelente profissional! Conseguiu reverter uma autuação fiscal estadual abusiva com argumentos técnicos impecáveis, economizando milhões de reais e trazendo enorme tranquilidade para nossa diretoria.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Roberto Silva",
      role: "Empresário",
      text: "Atendimento impecável, clareza e soluções tributárias genuinamente inovadoras. Ele reestruturou toda a nossa carga societária, permitindo que crescêssemos muito mais rápido. Recomendo de olhos fechados.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-law-dark relative overflow-hidden">
      {/* Background Decors */}
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-law-gold/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mockup FEEDBACK block header */}
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
            <MessageSquare size={320} className="text-law-gold" />
          </div>

          {/* Left Column icon */}
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-law-navy flex items-center justify-center border border-law-gold/30 shadow-md">
            <MessageSquare className="w-10 h-10 text-law-gold" />
          </div>

          {/* Content Column */}
          <div className="flex-grow text-left space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-law-gold font-semibold block">
              Depoimentos de Sucesso
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Feedback
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              A maior satisfação de nossa banca de advocacia é testemunhar a saúde financeira, a economia legal de impostos e a blindagem bem-sucedida de nossos clientes e parceiros empresariais.
            </p>
          </div>
        </motion.div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ height: '297px' }}
              className="bg-law-card/40 border border-slate-800/80 hover:border-law-gold/15 rounded-xl p-6 md:p-8 flex flex-col justify-between relative group hover:bg-law-card transition-all duration-300 shadow-md"
            >
              {/* Quote Mark background */}
              <div className="absolute top-6 right-6 text-slate-800/50 group-hover:text-law-gold/10 transition-colors duration-300">
                <Quote size={40} className="stroke-[1.5]" />
              </div>

              {/* Feedback quote body block */}
              <div className="space-y-4 text-left">
                {/* 5 Stars metrics */}
                <div style={{ color: '#eaa818' }} className="flex items-center gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Client detailed row layout */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/60">
                <div 
                  style={{ width: '50px', height: '50px' }} 
                  className="rounded-full overflow-hidden border border-law-gold/25 flex-shrink-0"
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    referrerPolicy="no-referrer"
                    style={{ height: '50px' }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-semibold text-sm text-white group-hover:text-law-gold-light transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-[10px] text-slate-400 tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
