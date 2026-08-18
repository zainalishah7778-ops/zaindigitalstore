import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Sparkles, 
  Phone, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Headphones,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { STORE_PHONE_DISPLAY, STORE_PHONE_NUMBER, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [customSubject, setCustomSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Zain Digital Store! Inquiry: ${customSubject ? `[${customSubject}] ` : ''}${customMessage || 'I would like to inquire about your digital subscriptions and software.'}`;
    const url = `https://wa.me/${STORE_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main WhatsApp Help CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0C162E] via-[#101D3F] to-[#0A1226] border border-emerald-500/40 p-8 sm:p-12 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl overflow-hidden mb-12 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
              <Headphones className="w-4 h-4" />
              <span>Instant WhatsApp Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
              NEED HELP CHOOSING A PRODUCT?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-medium">
              Chat with Zain Digital Store on WhatsApp
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="main-contact-whatsapp-btn"
                href={getGeneralInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900/80 px-4 py-3.5 rounded-xl border border-white/5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{STORE_PHONE_DISPLAY}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Available 7 days a week for quick quotations, account activation & inquiries.
            </p>
          </div>
        </div>

        {/* 2-Column: Direct Inquiry Composer & Support Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Quick Message Composer (Pre-fills WhatsApp) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/70 border border-white/10 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" />
              Quick WhatsApp Inquiry Builder
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Type your message below and we will automatically open it in WhatsApp for you.
            </p>

            <form onSubmit={handleCustomSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject / Product of Interest
                </label>
                <input
                  type="text"
                  value={customSubject}
                  onChange={(e) => setCustomSubject(e.target.value)}
                  placeholder="e.g., Google Gemini 18M Plan, Netflix, IDM License"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Custom Question / Details
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g., Hi Zain, is the 18-month Gemini plan available right now? How do I send payment via Easypaisa?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send via WhatsApp ({STORE_PHONE_DISPLAY})</span>
              </button>
            </form>
          </div>

          {/* Direct Support Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
              <h4 className="text-base font-bold text-white font-['Outfit'] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                Official Store Hours & Response
              </h4>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Active Order Times:</span>
                    <span className="text-slate-400">10:00 AM – 1:00 AM (PKT) daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Average Delivery Speed:</span>
                    <span className="text-slate-400">5 – 25 Minutes directly on WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Post-Purchase Care:</span>
                    <span className="text-slate-400">Complete warranty & renewal management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 text-xs text-slate-300">
              <p className="font-semibold text-cyan-300 mb-1">💡 Pro-Tip for Fast Order Processing:</p>
              <p className="text-slate-400">
                When ordering, simply send the payment screenshot along with your email / phone number to receive your login details immediately.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
