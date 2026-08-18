import React, { useState } from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowUp,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  FileText,
  Lock
} from 'lucide-react';
import { STORE_PHONE_DISPLAY, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateSection,
}) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070E] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#080B14] rounded-[9px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg font-['Outfit']">
                    Z
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-['Outfit']">
                  ZAIN DIGITAL STORE
                </span>
                <p className="text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
                  Premium Digital Solutions
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted Pakistani destination for premium AI plans, verified streaming entertainment, lifetime genuine software, and high-impact digital courses.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getGeneralInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp: {STORE_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectCategory('all'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('trust')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Digital Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">
              Store Categories
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => { onSelectCategory('ai-tools'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  AI Tools (Gemini & Claude)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectCategory('subscriptions'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Subscriptions (Snapchat+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectCategory('courses'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Courses (AI Dropshipping)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectCategory('software'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Software (IDM & Windows)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectCategory('entertainment'); onNavigateSection('products'); }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Entertainment (Netflix 4K)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Social */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-['Outfit']">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Replacement Warranty
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Zain Digital Store</strong>. All rights reserved. Premium Digital Solutions.
          </div>

          <div className="flex items-center gap-4">
            <span>Pakistani Rupee (PKR) Direct Checkout</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 max-w-lg w-full text-slate-300 space-y-4">
            <h3 className="text-lg font-bold text-white font-['Outfit']">Privacy Policy</h3>
            <p className="text-xs leading-relaxed">
              At Zain Digital Store, we respect your privacy. Customer phone numbers, email addresses, and transaction details provided via WhatsApp are strictly used solely for digital order fulfillment, license dispatch, and warranty replacement management. We never sell or share customer data with third parties.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 max-w-lg w-full text-slate-300 space-y-4">
            <h3 className="text-lg font-bold text-white font-['Outfit']">Terms & Conditions</h3>
            <p className="text-xs leading-relaxed">
              1. All digital products are delivered directly to the customer's WhatsApp upon receipt of valid payment verification.<br />
              2. Subscriptions include full-term replacement warranty in accordance with stated product specifications.<br />
              3. Lifetime software keys apply for standard one-time computer activation unless specified as multi-seat.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
