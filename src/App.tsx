/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFeatureGrid } from './components/CategoryBar';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SpecialOffers } from './components/SpecialOffers';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Smooth scroll handler
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNow = () => {
    setActiveCategory('all');
    handleNavigateSection('products');
  };

  const handleExploreDeals = () => {
    setActiveCategory('all');
    handleNavigateSection('products');
  };

  const featuredDeals = PRODUCTS.filter((p) => p.featured || p.discountText);

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Comprehensive Product Marketplace Catalog - Immediately Visible on Load */}
        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewDetails={setSelectedProduct}
        />

        {/* Limited Time Mega Deals Banner */}
        <SpecialOffers
          onExploreDealsClick={handleExploreDeals}
          featuredProducts={featuredDeals}
          onViewDetails={setSelectedProduct}
        />

        {/* Category Feature Cards Showcase */}
        <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFeatureGrid onSelectCategory={(cat) => {
            setActiveCategory(cat);
            handleNavigateSection('products');
          }} />
        </section>

        {/* Futuristic Hero with Guarantees */}
        <Hero onShopNowClick={handleShopNow} />

        {/* Trust & Guarantee Section */}
        <TrustSection />

        {/* About Zain Digital Store */}
        <AboutSection />

        {/* Contact & Custom WhatsApp Message Composer */}
        <ContactSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          handleNavigateSection('products');
        }}
        onNavigateSection={handleNavigateSection}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
