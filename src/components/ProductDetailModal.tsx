import React, { useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Layers, 
  HelpCircle,
  Laptop,
  Check,
  Send
} from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl, STORE_PHONE_DISPLAY } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const hasPrice = typeof product.price === 'number';
  const whatsappUrl = getProductWhatsAppUrl(product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-label="Close dialog" 
      />

      {/* Modal Container */}
      <div 
        id={`product-modal-${product.id}`}
        className="relative w-full max-w-4xl bg-gradient-to-b from-[#0F172A] to-[#090D1A] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]"
      >
        
        {/* Top Sticky Bar with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Zain Digital Store Official Listing
            </span>
          </div>
          <button
            id="close-product-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 no-scrollbar">
          
          {/* Main Top Grid (Image + Primary Details) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Poster Image View */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl aspect-square">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold bg-slate-900/90 text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {product.accessDuration}
              </div>
            </div>

            {/* Title, Pricing & Highlights */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight mb-3">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 mb-4 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Verified Pricing
                    </p>
                    {hasPrice ? (
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 font-['Outfit']">
                          Rs. {product.price?.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-500 line-through font-medium">
                            Rs. {product.originalPrice?.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-base font-bold">
                        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                        <span>{product.priceFormatted || 'Order on WhatsApp'}</span>
                      </div>
                    )}
                  </div>

                  {product.discountText && (
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {product.discountText}
                    </span>
                  )}
                </div>

                {/* Short overview */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>

                {/* Device/Platform compatibility pills */}
                {product.platformSupport && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-400 font-medium mb-1.5">Supported Platforms:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.platformSupport.map((platform, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-white/5">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Instant WhatsApp Order CTA Button */}
              <div className="pt-2">
                <a
                  id={`modal-whatsapp-cta-${product.id}`}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Buy via WhatsApp ({STORE_PHONE_DISPLAY})</span>
                </a>
              </div>

            </div>
          </div>

          {/* Full Description */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
            <h3 className="text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Full Product Description
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Features & What's Included 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Key Features */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <h3 className="text-base font-bold text-white font-['Outfit'] mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <h3 className="text-base font-bold text-white font-['Outfit'] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                What's Included in Package
              </h3>
              <ul className="space-y-2.5">
                {product.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Delivery & Ordering Steps info */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 border border-cyan-500/20">
            <h3 className="text-base font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              Delivery Information & Ordering Flow
            </h3>
            <p className="text-sm text-cyan-200 font-medium mb-4">
              {product.deliveryInfo}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="font-bold text-cyan-300 block mb-1">Step 1: Click Order</span>
                <span className="text-slate-400">Launch pre-filled WhatsApp message with product name.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="font-bold text-cyan-300 block mb-1">Step 2: Payment</span>
                <span className="text-slate-400">Pay via Easypaisa, JazzCash, SadaPay or Bank Transfer.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="font-bold text-cyan-300 block mb-1">Step 3: Instant Access</span>
                <span className="text-slate-400">Receive logins/license key on WhatsApp in 5–20 mins.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Mobile WhatsApp Order Footer */}
        <div className="p-4 border-t border-white/10 bg-[#090D1A] flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <p className="text-xs text-slate-400">Selected Product:</p>
            <p className="text-sm font-bold text-white line-clamp-1">{product.name}</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              id={`modal-sticky-whatsapp-btn-${product.id}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
