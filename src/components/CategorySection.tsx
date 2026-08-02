import type { Category, Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProductCard } from './ProductCard';
import { ProductIcon } from './ProductIcon';

export function CategorySection({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const { isRtl } = useLanguage();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  return (
    <section id={category.id} className="scroll-mt-24 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="category-banner mb-8 lg:mb-10">
          <div className="w-12 h-12 rounded-xl bg-sage-600/40 flex items-center justify-center shrink-0">
            <ProductIcon icon={category.icon} className="w-6 h-6 text-cream-50" />
          </div>
          <div>
            <h2 className={`text-2xl lg:text-3xl font-bold ${titleFont}`}>
              {category.name[isRtl ? 'ar' : 'fr']}
            </h2>
            <p className="text-sm text-cream-100/80 mt-0.5">
              {category.tagline[isRtl ? 'ar' : 'fr']}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
