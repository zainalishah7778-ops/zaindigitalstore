import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Headphones, 
  Award,
  CheckCircle2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { STORE_PHONE_DISPLAY, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onShopNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNowClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 sm:pt-12 pb-16 lg:pb-24">
      {/* Background futuristic glow meshes & grids */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial ambient glow circles */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/25 to-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full" />

        {/* Subtle perspective grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-8">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/10 mb-6 backdrop-blur-md hover:border-cyan-400 transition-colors">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Zain Digital Store — Verified Digital Solutions</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-emerald-400 font-medium hidden sm:inline">WhatsApp Fast Checkout</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-['Outfit'] tracking-tight text-white leading-[1.1] mb-6">
            PREMIUM DIGITAL PRODUCTS <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              AT THE BEST PRICES
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-300 mb-8 max-w-3xl mx-auto tracking-wide">
            Subscriptions <span className="text-cyan-400 mx-1.5">•</span> 
            Courses <span className="text-purple-400 mx-1.5">•</span> 
            Software <span className="text-emerald-400 mx-1.5">•</span> 
            AI Tools <span className="text-amber-400 mx-1.5">•</span> 
            Digital Solutions
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              id="hero-shop-now-btn"
              onClick={onShopNowClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="hero-whatsapp-order-btn"
              href={getGeneralInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/40 hover:border-emerald-400 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
              <span>ORDER ON WHATSAPP</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                {STORE_PHONE_DISPLAY}
              </span>
            </a>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Instant Delivery</p>
                <p className="text-[11px] text-slate-400">Direct to WhatsApp</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full Term Warranty</p>
                <p className="text-[11px] text-slate-400">100% Guaranteed</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
                <BadgePercent className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Wholesale Rates</p>
                <p className="text-[11px] text-slate-400">Save up to 75%</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Headphones className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Live Assistance</p>
                <p className="text-[11px] text-slate-400">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why Choose Zain Digital Store? */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
              Core Guarantees
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit'] mt-3 tracking-tight">
              Why Choose Zain Digital Store?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Your reliable partner for genuine digital credentials, premium subscriptions, and verified tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Premium Digital Products</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hand-picked, high-tier official digital tools, premium subscriptions, and comprehensive video courses with direct access.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Instant Delivery</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                No long waiting lines. Receive your account login details or software license key straight to your WhatsApp in minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Secure Ordering</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Convenient and familiar local payment options (Easypaisa, JazzCash, SadaPay, Bank Transfer) with zero hidden fees.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Affordable Prices</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Get premium grade international digital tools at unmatched Pakistani rupee pricing tailored for local digital creators.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">WhatsApp Support</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct one-on-one Urdu & English guidance via WhatsApp for setup, troubleshooting, and instant query resolution.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-['Outfit']">Trusted Service</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Full-term replacement commitment and transparent communication across every digital purchase.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
