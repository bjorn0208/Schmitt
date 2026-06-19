import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, ClipboardCheck, Phone, Mail, Building, User, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
}

export default function ScheduleModal({ isOpen, onClose, defaultService = 'Planejamento Tributário' }: ScheduleModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(defaultService);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState<Appointment | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Set minimum date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
      setDate(tomorrowStr);
      setTime('09:00');
      setIsSuccess(false);
      setAppointmentDetails(null);
    }
  }, [isOpen, defaultService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !date || !time) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newAppointment: Appointment = {
      id: 'VS-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      company,
      service,
      date,
      time,
      notes,
      createdAt: new Date().toLocaleString('pt-BR'),
    };

    // Save to localStorage
    const existing = localStorage.getItem('vianei_appointments');
    const appointmentsList = existing ? JSON.parse(existing) : [];
    appointmentsList.push(newAppointment);
    localStorage.setItem('vianei_appointments', JSON.stringify(appointmentsList));

    setAppointmentDetails(newAppointment);
    setIsSuccess(true);
  };

  const servicesList = [
    'Planejamento Tributário',
    'Recuperação de Tributos',
    'Defesa em Autos de Infração',
    'Consultoria Tributária',
    'Reestruturação Empresarial',
    'Contencioso Tributário',
    'Outro Assunto Fiscal'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-law-dark/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-law-gold/20 bg-law-navy shadow-2xl"
          >
            {/* Top gold bar decorations */}
            <div className="h-1.5 w-full bg-gradient-to-r from-law-gold/40 via-law-gold to-law-gold/40" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-law-gold transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Form & Confirmation Screens */}
            <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
              {!isSuccess ? (
                <div>
                  <div className="mb-6">
                    <span className="font-mono text-xs text-law-gold uppercase tracking-widest block mb-1">
                      Agendamento Digital
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white text-gradient bg-gradient-to-r from-white to-law-gold-light bg-clip-text text-transparent">
                      Solicitar Consulta Estratégica
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Preencha o formulário abaixo. Retornaremos em até 2 horas úteis para confirmar o seu agendamento seguro.
                    </p>
                  </div>

                  <form id="appointment-form" onSubmit={handleSubmit} className="space-y-4">
                    {/* Basic Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                          Nome Completo *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome"
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                          E-mail Corporativo *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seuemail@empresa.com"
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Telefone / WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(61) 9981-0707"
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                          Empresa
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Nome da sua empresa"
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Área de Atuação de Interesse *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-law-gold transition appearance-none"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-law-navy text-slate-200">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time preference */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                          Data Preferencial *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition select-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                          Horário Preferencial *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-law-gold/70" size={16} />
                          <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full bg-law-dark/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-law-gold transition"
                          >
                            <option value="09:00" className="bg-law-navy">09:00 - Período da Manhã</option>
                            <option value="10:30" className="bg-law-navy">10:30 - Período da Manhã</option>
                            <option value="14:00" className="bg-law-navy">14:00 - Período da Tarde</option>
                            <option value="15:30" className="bg-law-navy">15:30 - Período da Tarde</option>
                            <option value="17:00" className="bg-law-navy">17:00 - Período da Tarde</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Breve resumo do caso (Opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Descreva brevemente o desafio com impostos, autuações ou tributos que sua empresa enfrenta..."
                        className="w-full bg-law-dark/60 border border-slate-700 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-law-gold transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-booking-btn"
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-law-gold via-yellow-600 to-law-gold text-law-dark font-sans font-semibold tracking-wider uppercase text-xs rounded-lg hover:shadow-lg hover:shadow-law-gold/15 active:scale-98 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Solicitar Agendamento</span>
                      <ChevronRight size={16} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  {/* Success Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6 animate-bounce">
                    <Check size={32} />
                  </div>

                  <h3 className="text-2xl font-display font-medium text-white mb-2">
                    Solicitação Protocolada com Sucesso!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Agradecemos seu contato. Sua consulta prévia já está pré-reservada em nossa agenda interna. Nossa equipe jurídica entrará em contato via WhatsApp/E-mail para formalizar a data final.
                  </p>

                  {/* Booking Receipt Card */}
                  <div className="bg-law-navy-light/60 border border-law-gold/20 rounded-xl p-5 text-left max-w-md mx-auto mb-8 space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                      <span className="text-xs font-mono text-law-gold">PROTOCOLO:</span>
                      <span className="text-xs font-mono font-bold text-white">{appointmentDetails?.id}</span>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cliente:</span>
                        <span className="font-medium text-white">{appointmentDetails?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Assunto:</span>
                        <span className="font-medium text-white text-right max-w-[200px] truncate">{appointmentDetails?.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Data Pré-agendada:</span>
                        <span className="font-medium text-law-gold-light">
                          {appointmentDetails?.date && new Date(appointmentDetails.date + 'T00:00:00').toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Horário Solicitado:</span>
                        <span className="font-medium text-law-gold-light">{appointmentDetails?.time}</span>
                      </div>
                      {appointmentDetails?.company && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Empresa:</span>
                          <span className="font-medium text-white">{appointmentDetails?.company}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      id="close-success-btn"
                      onClick={onClose}
                      className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                    >
                      Fechar Janela
                    </button>
                    <a
                      href={`https://wa.me/556199810707?text=Olá Dr. Vianei, acabei de enviar uma solicitação de consulta estratégica com protocolo ${appointmentDetails?.id}. Gostaria de confirmar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={14} className="fill-current" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
