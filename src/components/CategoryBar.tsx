import React from 'react';
import { 
  LayoutGrid, 
  Sparkles, 
  Zap, 
  GraduationCap, 
  Cpu, 
  Film,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryBarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  productCounts: Record<ProductCategory, number>;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategory,
  onSelectCategory,
  productCounts,
}) => {
  const getIcon = (iconName: string, active: boolean) => {
    const className = `w-5 h-5 ${active ? 'text-white' : 'text-slate-400 group-hover:text-cyan-300'} transition-colors`;
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Film': return <Film className={className} />;
      default: return <LayoutGrid className={className} />;
    }
  };

  return (
    <div className="w-full">
      {/* Category Pills Slider / Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar sm:flex-wrap">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = productCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-cyan-400/80 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/70 border-white/10 text-slate-300 hover:text-white hover:bg-slate-800/80 hover:border-slate-600'
              }`}
            >
              {getIcon(cat.iconName, isActive)}
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold ${
                isActive ? 'bg-cyan-400/20 text-cyan-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const CategoryFeatureGrid: React.FC<{ onSelectCategory: (cat: ProductCategory) => void }> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'ai-tools' as ProductCategory,
      title: 'AI & Productivity',
      items: ['Google Gemini (18M)', 'ChatGPT Plus & Claude Code', 'ElevenLabs & Google Veo 3'],
      tag: 'Trending 2025',
      color: 'from-purple-900/40 to-black/80',
      border: 'border-purple-500/30 hover:border-purple-400',
      accent: 'text-purple-400',
      badgeBg: 'bg-purple-500/20 text-purple-300',
    },
    {
      id: 'subscriptions' as ProductCategory,
      title: 'Premium Subscriptions',
      items: ['Snapchat Pro (1 Year)', 'NordVPN & Surfshark VPN', 'Amazon Prime & Spotify'],
      tag: 'Verified Accounts',
      color: 'from-amber-900/30 to-black/80',
      border: 'border-amber-500/30 hover:border-amber-400',
      accent: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300',
    },
    {
      id: 'courses' as ProductCategory,
      title: 'Digital Courses',
      items: ['WiFi Hacking Masterclass', 'AI Dropshipping A-Z', 'Facebook Ads & Design'],
      tag: 'Lifetime Access',
      color: 'from-emerald-900/30 to-black/80',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      id: 'software' as ProductCategory,
      title: 'Software & Tools',
      items: ['CapCut Pro VIP (PC/Mobile)', 'Internet Download Manager (IDM)', 'Windows 11 Pro Genuine'],
      tag: 'One-Time Payment',
      color: 'from-blue-900/30 to-black/80',
      border: 'border-blue-500/30 hover:border-blue-400',
      accent: 'text-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => onSelectCategory(card.id)}
          className={`p-5 rounded-2xl bg-gradient-to-b ${card.color} border ${card.border} backdrop-blur-md cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${card.badgeBg}`}>
              {card.tag}
            </span>
            <ArrowRight className={`w-4 h-4 ${card.accent} group-hover:translate-x-1 transition-transform`} />
          </div>
          <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
            {card.title}
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {card.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
