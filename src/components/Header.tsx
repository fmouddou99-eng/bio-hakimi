import { useEffect, useState } from 'react';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import { Logo } from './Logo';

export function Header() {
  const { lang, toggle, isRtl, tr } = useLanguage();
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-sage-100'
          : 'bg-cream-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 shrink-0 group">
            <Logo className="transition-transform group-hover:scale-105" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className={`text-lg lg:text-xl font-bold text-sage-800 ${titleFont}`}>
                HAKIMI BIO
              </span>
              <span className="text-[10px] lg:text-xs text-sage-500 tracking-wide">
                {tr.brandTagline}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3 py-2 text-sm font-medium text-sage-700 hover:text-sage-900 hover:bg-sage-50 rounded-lg transition-colors"
              >
                {tr.nav[cat.id as keyof typeof tr.nav]}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-sage-700 hover:bg-sage-50 rounded-lg transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              <span>{tr.switchTo}</span>
            </button>

            <button
              onClick={open}
              className="relative p-2 text-sage-700 hover:bg-sage-50 rounded-lg transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden p-2 text-sage-700 hover:bg-sage-50 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 pt-2 border-t border-sage-100 flex flex-col gap-1">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-sage-700 hover:bg-sage-50 rounded-lg transition-colors"
              >
                {tr.nav[cat.id as keyof typeof tr.nav]}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
