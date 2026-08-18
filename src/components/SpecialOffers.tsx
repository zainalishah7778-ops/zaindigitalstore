import React from 'react';
import { 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Zap, 
  Check, 
  MessageCircle,
  Tag
} from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface SpecialOffersProps {
  onExploreDealsClick: () => void;
  featuredProducts: Product[];
  onViewDetails: (p: Product) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({
  onExploreDealsClick,
  featuredProducts,
  onViewDetails,
}) => {
  return (
    <section id="special-offers" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient glowing gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/20 to-blue-900/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Banner Card Container with animated glowing border */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0D1527]/90 via-[#101935]/90 to-[#0A0E1D]/90 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl overflow-hidden">
          
          {/* Top Decorative Lights */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Banner Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-widest mb-3">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-bounce" />
                <span>Verified Mega Deals</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-['Outfit'] tracking-tight">
                LIMITED TIME DIGITAL DEALS
              </h2>
              <p className="text-base sm:text-lg text-cyan-300 font-medium mt-2">
                Premium Products. Better Prices. Instant Support.
              </p>
            </div>

            <div>
              <button
                id="explore-deals-btn"
                onClick={onExploreDealsClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                <span>EXPLORE DEALS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top 3 High-Discount Deal Spotlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featuredProducts.slice(0, 3).map((deal) => (
              <div
                key={deal.id}
                className="rounded-2xl bg-slate-950/70 border border-white/10 hover:border-cyan-400/50 p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-white/5">
                      {deal.categoryLabel}
                    </span>
                    {deal.discountText && (
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {deal.discountText}
                      </span>
                    )}
                  </div>

                  <h3 
                    onClick={() => onViewDetails(deal)}
                    className="text-base font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1 mb-2"
                  >
                    {deal.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                    {deal.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    {deal.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-white font-['Outfit']">
                          Rs. {deal.price.toLocaleString()}
                        </span>
                        {deal.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            Rs. {deal.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-emerald-300">
                        {deal.priceFormatted || 'Order on WhatsApp'}
                      </span>
                    )}
                  </div>

                  <a
                    href={getProductWhatsAppUrl(deal.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors flex items-center gap-1 text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
