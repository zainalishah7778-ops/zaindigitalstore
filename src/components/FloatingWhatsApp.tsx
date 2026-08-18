import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { STORE_PHONE_DISPLAY, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp Quick Support" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative max-w-xs p-3.5 rounded-2xl bg-black/90 border border-green-500/50 shadow-2xl shadow-green-500/20 backdrop-blur-xl text-left hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xs p-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-green-400 font-['Outfit']">WhatsApp Direct Order</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-tight">
            Click Order Now or message <strong className="text-white">{STORE_PHONE_DISPLAY}</strong> for instant activation!
          </p>
        </div>
      )}

      {/* Main Floating WhatsApp Pulse Button */}
      <a
        id="floating-whatsapp-btn"
        href={getGeneralInquiryWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-green-400 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-400/70 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat with Zain Digital Store on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </aside>
  );
};

