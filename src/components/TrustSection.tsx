import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Lock, 
  BadgePercent, 
  MessageCircle, 
  Smile, 
  CreditCard,
  Building,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: 'Premium Digital Products',
      description: 'Carefully vetted subscriptions, genuine utility licenses, and organized course libraries with zero malware or deceptive downloads.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Fast Delivery',
      description: 'Average 5 to 30 minutes delivery directly through official WhatsApp once payment screenshot is verified.',
      icon: Clock,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Secure Ordering',
      description: 'Order smoothly through encrypted WhatsApp chat with direct proof of payment and official receipt confirmation.',
      icon: Lock,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive wholesale rupee pricing designed specifically for students, freelancers, and businesses in Pakistan.',
      icon: BadgePercent,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'WhatsApp Support',
      description: 'Direct human support in Urdu and English. Friendly assistance for account setup, renewals, and troubleshooting.',
      icon: MessageCircle,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Dedicated replacement warranty across subscription durations and active after-sales support for peace of mind.',
      icon: Smile,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
  ];

  return (
    <section id="trust" className="py-16 bg-[#070A12] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase tracking-widest">
            Our Standard of Service
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] mt-3 tracking-tight">
            WHY CUSTOMERS CHOOSE US
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Built on transparency, prompt WhatsApp communication, and verified digital access.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg} mb-4`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 flex items-center gap-2">
                    <span className="text-emerald-400 text-sm">✓</span>
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepted Payment Methods Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Supported Payment Methods
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Quick & secure local Pakistani payment channels with instant verification.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
              Easypaisa
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-300">
              JazzCash
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-950/60 border border-teal-500/30 text-teal-300">
              SadaPay
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300">
              NayaPay
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300">
              Online Bank Transfer (All Banks)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300">
              USDT (On Request)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
