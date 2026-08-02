import { Instagram, MapPin, Truck, Banknote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../data/products';
import { Logo } from './Logo';

export function Footer() {
  const { isRtl, tr } = useLanguage();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  return (
    <footer className="bg-sage-900 text-cream-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo inverted className="h-12" />
              <div>
                <p className={`text-lg font-bold text-cream-50 ${titleFont}`}>
                  HAKIMI BIO
                </p>
                <p className="text-xs text-cream-200/70">{tr.brandTagline}</p>
              </div>
            </div>
            <p className="text-sm text-cream-200/80 leading-relaxed max-w-sm">
              {tr.footer.about}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-semibold text-cream-50 uppercase tracking-wide mb-4">
              {tr.hero.scroll}
            </p>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="text-sm text-cream-200/80 hover:text-gold-300 transition-colors"
                  >
                    {cat.name[isRtl ? 'ar' : 'fr']}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-cream-50 uppercase tracking-wide mb-4">
              {tr.trust.shipping}
            </p>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gold-300 shrink-0" strokeWidth={1.5} />
                {tr.footer.shipping}
              </li>
              <li className="flex items-center gap-2">
                <Banknote className="w-4 h-4 text-gold-300 shrink-0" strokeWidth={1.5} />
                {tr.footer.payment}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-300 shrink-0" strokeWidth={1.5} />
                {tr.footer.madeWith}
              </li>
            </ul>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sage-700 hover:bg-sage-600 transition-colors text-sm font-medium"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              {tr.footer.follow}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sage-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/60">
          <p>© {new Date().getFullYear()} Hakimi Bio. {tr.footer.rights}</p>
          <p>{tr.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
