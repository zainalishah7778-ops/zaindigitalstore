import React from 'react';
import { 
  MessageCircle, 
  Eye, 
  Check, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Flame
} from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const hasPrice = typeof product.price === 'number';
  const whatsappUrl = getProductWhatsAppUrl(product.name);

  // Custom Category badge colors
  const getCategoryTheme = (cat: Product['category']) => {
    switch (cat) {
      case 'ai-tools':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'subscriptions':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'courses':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'software':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'entertainment':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#0E1528] to-[#090D1A] border border-slate-800/90 hover:border-cyan-500/50 shadow-lg shadow-black/40 hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
    >
      {/* Popular / Special Badge */}
      {product.popular && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[11px] font-extrabold shadow-md uppercase tracking-wider">
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Popular</span>
        </div>
      )}

      {/* Poster Image Container */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative aspect-square w-full bg-slate-950 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1528] via-transparent to-transparent opacity-90" />

        {/* Category & Duration Floating Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md ${getCategoryTheme(product.category)}`}>
            {product.categoryLabel}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 text-cyan-300 border border-white/10 backdrop-blur-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-cyan-400" />
            {product.accessDuration}
          </span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-lg font-bold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>

          {/* Key Feature List */}
          <ul className="space-y-1.5 mb-5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Action Section */}
        <div className="pt-4 border-t border-white/5 space-y-4">
          
          {/* Price Layout */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                Store Price
              </p>
              {hasPrice ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 font-['Outfit']">
                    Rs. {product.price?.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-500 line-through font-medium">
                      Rs. {product.originalPrice?.toLocaleString()}
                    </span>
                  )}
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold">
                  <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>{product.priceFormatted || 'Order on WhatsApp'}</span>
                </div>
              )}
            </div>

            {/* Discount Badge */}
            {product.discountText && (
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {product.discountText}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`view-details-${product.id}`}
              onClick={() => onViewDetails(product)}
              className="px-3 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              <span>Details</span>
            </button>

            <a
              id={`order-whatsapp-${product.id}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
              title={`Order ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-slate-950 group-hover/btn:scale-110 transition-transform" />
              <span>Order Now</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
