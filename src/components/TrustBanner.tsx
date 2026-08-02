import { Truck, Gift, Leaf, Banknote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TrustBanner() {
  const { tr } = useLanguage();
  const items = [
    { icon: Truck, label: tr.trust.shipping },
    { icon: Gift, label: tr.trust.freeShipping },
    { icon: Leaf, label: tr.trust.natural },
    { icon: Banknote, label: tr.trust.cod },
  ];

  return (
    <section className="bg-sage-700 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 justify-center text-center sm:justify-start"
            >
              <item.icon className="w-5 h-5 shrink-0 text-gold-300" strokeWidth={1.5} />
              <span className="text-xs sm:text-sm font-medium leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
