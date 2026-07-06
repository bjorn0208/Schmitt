import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o planejamento tributário?",
    answer: "O planejamento tributário consiste em analisar a situação fiscal de uma empresa ou pessoa física para identificar oportunidades legais de redução da carga tributária. Avaliamos o regime de tributação mais adequado, aproveitamos benefícios fiscais e realizamos uma reestruturação estratégica para garantir a conformidade e a eficiência econômica."
  },
  {
    question: "Quais os benefícios de uma consultoria tributária?",
    answer: "Os benefícios incluem a redução legal de custos, prevenção de multas e autuações fiscais, maior segurança jurídica nas operações, otimização do fluxo de caixa e suporte especializado na tomada de decisões estratégicas para o crescimento do negócio."
  },
  {
    question: "Como posso saber se minha empresa paga imposto indevido?",
    answer: "Realizamos uma auditoria tributária completa (revisão fiscal) sobre as notas fiscais e declarações dos últimos 5 anos. Identificamos créditos não aproveitados, tributos recolhidos indevidamente ou em duplicidade, buscando a recuperação desses valores de forma segura e dentro da lei."
  },
  {
    question: "Qual a diferença entre elisão e evasão fiscal?",
    answer: "A elisão fiscal (planejamento tributário) é o uso de meios legais para reduzir a carga tributária antes que o fato gerador ocorra. Já a evasão fiscal (sonegação) é o uso de meios ilícitos ou fraudulentos para evitar o pagamento de tributos, o que é crime."
  }
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-medium text-slate-200">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-law-gold" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-slate-400 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16">
          Perguntas Frequentes
        </h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
