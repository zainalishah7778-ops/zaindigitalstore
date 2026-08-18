import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  Search, 
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { STORE_PHONE_DISPLAY, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import { ProductCategory } from '../types';

interface NavbarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { label: 'Home', action: () => onNavigateSection('hero') },
    { label: 'All Products', action: () => { onSelectCategory('all'); onNavigateSection('products'); } },
    { label: 'Subscriptions', action: () => { onSelectCategory('subscriptions'); onNavigateSection('products'); } },
    { label: 'AI Tools', action: () => { onSelectCategory('ai-tools'); onNavigateSection('products'); } },
    { label: 'Courses', action: () => { onSelectCategory('courses'); onNavigateSection('products'); } },
    { label: 'Software', action: () => { onSelectCategory('software'); onNavigateSection('products'); } },
    { label: 'Why Us', action: () => onNavigateSection('trust') },
    { label: 'FAQ', action: () => onNavigateSection('faq') },
    { label: 'Contact', action: () => onNavigateSection('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-[#080B14]/90 backdrop-blur-xl transition-all duration-300">
      {/* Top micro-announcement bar */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-purple-950 border-b border-white/5 py-1.5 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline text-slate-300 font-normal">Official WhatsApp Support:</span>
            <a 
              href={getGeneralInquiryWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {STORE_PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="hidden md:inline-flex items-center gap-1 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Digital Credentials
            </span>
            <span className="text-yellow-400 font-medium">⚡ Instant WhatsApp Delivery</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <button 
            id="nav-brand-logo-btn"
            onClick={() => onNavigateSection('hero')} 
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090D1A] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-xl font-['Outfit']">
                  Z
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  ZAIN DIGITAL
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  STORE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide font-medium">
                Premium Digital Solutions
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 6).map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="h-4 w-px bg-white/10 mx-1" />
            <button
              onClick={() => onNavigateSection('faq')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => onNavigateSection('about')}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Right Action Icons & Direct WhatsApp Order CTA */}
          <div className="flex items-center gap-3">
            {/* Quick Search Bar toggle / input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search digital products..."
                className="w-48 xl:w-64 pl-9 pr-3 py-1.5 text-xs bg-slate-900/90 text-slate-100 placeholder-slate-400 rounded-lg border border-slate-700/70 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* WhatsApp Quick Link Header Button */}
            <a
              id="header-whatsapp-cta-btn"
              href={getGeneralInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-white fill-current" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden">Order</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search input bar if open */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products (Gemini, IDM, Netflix...)"
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900/90 text-slate-100 placeholder-slate-400 rounded-lg border border-slate-700/80 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2.5 text-slate-400 text-sm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E1C]/98 border-b border-cyan-500/20 px-4 py-4 space-y-2 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getGeneralInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp ({STORE_PHONE_DISPLAY})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
