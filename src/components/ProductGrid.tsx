import React, { useMemo, useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Sparkles, 
  X, 
  PackageOpen 
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { CategoryBar } from './CategoryBar';

interface ProductGridProps {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onViewDetails: (product: Product) => void;
}

type SortOption = 'popular' | 'price-low' | 'price-high' | 'name';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onViewDetails,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Compute counts per category
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      all: products.length,
      'ai-tools': 0,
      subscriptions: 0,
      courses: 0,
      software: 0,
      entertainment: 0,
    };

    products.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, [products]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category Filter
        if (activeCategory !== 'all' && product.category !== activeCategory) {
          return false;
        }

        // Search Filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchDesc = product.shortDescription.toLowerCase().includes(q);
          const matchFeatures = product.features.some((f) => f.toLowerCase().includes(q));
          const matchCat = product.categoryLabel.toLowerCase().includes(q);
          return matchName || matchDesc || matchFeatures || matchCat;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        }
        if (sortBy === 'price-low') {
          const priceA = a.price ?? 999999;
          const priceB = b.price ?? 999999;
          return priceA - priceB;
        }
        if (sortBy === 'price-high') {
          const priceA = a.price ?? 0;
          const priceB = b.price ?? 0;
          return priceB - priceA;
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Marketplace Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Explore Digital Products & Licenses
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Select any subscription, AI plan, training course, or utility software to order instantly via WhatsApp.
            </p>
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300">
              <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-400 hidden sm:inline">Sort:</span>
              <select
                id="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="popular" className="bg-slate-900 text-white">Most Popular</option>
                <option value="price-low" className="bg-slate-900 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-900 text-white">Price: High to Low</option>
                <option value="name" className="bg-slate-900 text-white">Product Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Component */}
        <div className="mb-6">
          <CategoryBar
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
            productCounts={productCounts}
          />
        </div>

        {/* Active Filters Bar (if searching or non-default category) */}
        {(searchQuery || activeCategory !== 'all') && (
          <div className="flex items-center flex-wrap gap-2 mb-6 p-3 rounded-xl bg-slate-900/60 border border-white/5">
            <span className="text-xs text-slate-400 font-medium">Active Filters:</span>
            
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Category: {products.find(p => p.category === activeCategory)?.categoryLabel || activeCategory}
                <button 
                  onClick={() => onSelectCategory('all')} 
                  className="hover:text-white"
                  aria-label="Remove category filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                Search: "{searchQuery}"
                <button 
                  onClick={() => onSearchChange('')} 
                  className="hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={() => {
                onSelectCategory('all');
                onSearchChange('');
              }}
              className="text-xs text-slate-400 hover:text-white underline ml-auto"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 px-4 text-center rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <PackageOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 font-['Outfit']">
              No products found
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              We couldn't find any products matching your search "{searchQuery}". Looking for a custom digital tool or subscription?
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  onSelectCategory('all');
                  onSearchChange('');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
