import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  Zap, 
  CheckCircle,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { STORE_PHONE_DISPLAY, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Branding Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#131E3A] to-[#0A0E1D] border border-cyan-500/30 p-8 shadow-2xl overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full" />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#0B0F1D] rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white font-['Outfit']">
                    Zain Digital Store
                  </h3>
                  <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Premium Digital Solutions
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated to providing Pakistani freelancers, developers, content creators, students, and businesses with authentic international digital subscriptions and genuine software utilities at accessible rupee rates.
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct WhatsApp Communication & Fast Setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full Term Replacement Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Curated High-Value Skill Courses</span>
                  </div>
                </div>

                <a
                  href={getGeneralInquiryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect with Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Information & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Empowering Digital Workflow Across Pakistan
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong className="text-white">Zain Digital Store</strong>, we eliminate international credit card barriers and high conversion charges. We bring premium AI subscriptions, official streaming services, genuine software keys, and actionable digital masterclasses straight to your WhatsApp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Rapid Turnaround</span>
                </div>
                <p className="text-xs text-slate-400">
                  Instant account setup and activation keys dispatched within minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credentials</span>
                </div>
                <p className="text-xs text-slate-400">
                  Reliable accounts with dedicated after-sales warranty and assistance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-xs text-slate-400">
                  Direct pricing in PKR with zero hidden processing surcharges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <MessageCircle className="w-4 h-4 text-amber-400" />
                  <span>Personal Support</span>
                </div>
                <p className="text-xs text-slate-400">
                  One-on-one Urdu & English guidance for smooth installations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
