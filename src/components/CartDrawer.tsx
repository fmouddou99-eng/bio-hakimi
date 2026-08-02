import { useEffect, useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '212611353081';

export function CartDrawer() {
  const { lang, isRtl, tr } = useLanguage();
  const { items, total, isOpen, close, updateQty, remove, clear } = useCart();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  // lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOrder = () => {
    if (!name.trim()) {
      setError(tr.cart.validateName);
      return;
    }
    if (!phone.trim()) {
      setError(tr.cart.validatePhone);
      return;
    }
    setError('');

    const lines: string[] = [];
    lines.push(
      lang === 'ar'
        ? '🛒 *طلب جديد من حكيمي بيو*'
        : '🛒 *Nouvelle commande Hakimi Bio*',
    );
    lines.push('');
    items.forEach((item, i) => {
      const variantPart = item.variantName
        ? ` — ${item.variantName[lang]}`
        : '';
      lines.push(
        `${i + 1}. ${item.name[lang]}${variantPart}`,
      );
      lines.push(
        `   • ${item.sizeLabel[lang]} × ${item.quantity} = ${
          item.quantity * item.unitPrice
        } ${tr.product.dh}`,
      );
    });
    lines.push('');
    lines.push(
      lang === 'ar'
        ? `💰 *المجموع الكلي: ${total} درهم*`
        : `💰 *Total général : ${total} dh*`,
    );
    lines.push('');
    lines.push(lang === 'ar' ? '📋 *معلومات العميل*' : '📋 *Coordonnées client*');
    lines.push(`${lang === 'ar' ? 'الاسم' : 'Nom'}: ${name}`);
    lines.push(`${lang === 'ar' ? 'الهاتف' : 'Téléphone'}: ${phone}`);
    if (city.trim()) lines.push(`${lang === 'ar' ? 'العنوان' : 'Adresse'}: ${city}`);

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    window.setTimeout(() => {
      if (window.confirm(tr.cart.afterOpen)) {
        clear();
        setName('');
        setPhone('');
        setCity('');
      }
    }, 600);
  };

  const sideClass = isRtl ? 'left-0' : 'right-0';
  const slideClass = isRtl
    ? isOpen
      ? 'translate-x-0'
      : '-translate-x-full'
    : isOpen
      ? 'translate-x-0'
      : 'translate-x-full';

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-sage-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 ${sideClass} h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${slideClass}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-sage-100 bg-white">
          <h2 className={`text-xl font-bold text-sage-900 ${titleFont}`}>
            {tr.cart.title}
          </h2>
          <button
            onClick={close}
            className="p-2 text-sage-600 hover:bg-sage-50 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-3">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-sage-400" strokeWidth={1.25} />
            </div>
            <p className="text-sage-700 font-medium">{tr.cart.empty}</p>
            <p className="text-sm text-sage-500">{tr.cart.emptyHint}</p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-3 bg-white rounded-xl p-3 border border-sage-100"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sage-900 text-sm leading-snug">
                      {item.name[lang]}
                    </p>
                    {item.variantName && (
                      <p className="text-xs text-sage-500 mt-0.5">
                        {item.variantName[lang]}
                      </p>
                    )}
                    <p className="text-xs text-sage-500 mt-0.5">
                      {item.sizeLabel[lang]} · {item.unitPrice} {tr.product.dh}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-sage-50 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQty(item.key, item.quantity - 1)}
                          className="qty-btn !w-7 !h-7"
                          aria-label="decrease"
                        >
                          <Minus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-sage-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, item.quantity + 1)}
                          className="qty-btn !w-7 !h-7"
                          aria-label="increase"
                        >
                          <Plus className="w-3 h-3" strokeWidth={2} />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.key)}
                        className="p-1.5 text-sage-400 hover:text-terracotta-500 transition-colors"
                        aria-label={tr.cart.remove}
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                  <div className="text-end shrink-0">
                    <p className="font-bold text-sage-800">
                      {item.quantity * item.unitPrice}
                    </p>
                    <p className="text-xs text-sage-400">{tr.product.dh}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={clear}
                className="text-xs text-sage-400 hover:text-terracotta-500 transition-colors underline underline-offset-2"
              >
                {tr.cart.clear}
              </button>
            </div>

            {/* Checkout form */}
            <div className="border-t border-sage-100 bg-white p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sage-700">
                  {tr.cart.total}
                </span>
                <span className={`text-2xl font-bold text-sage-900 ${titleFont}`}>
                  {total}{' '}
                  <span className="text-sm font-medium text-sage-500">
                    {tr.product.dh}
                  </span>
                </span>
              </div>

              <p className="text-xs font-semibold text-sage-500 uppercase tracking-wide pt-1">
                {tr.cart.checkoutTitle}
              </p>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={tr.cart.namePh}
                aria-label={tr.cart.name}
                className="w-full px-3 py-2.5 rounded-xl border border-sage-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none text-sm bg-cream-50"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={tr.cart.phonePh}
                aria-label={tr.cart.phone}
                inputMode="tel"
                className="w-full px-3 py-2.5 rounded-xl border border-sage-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none text-sm bg-cream-50"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={tr.cart.cityPh}
                aria-label={tr.cart.city}
                className="w-full px-3 py-2.5 rounded-xl border border-sage-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none text-sm bg-cream-50"
              />

              {error && (
                <p className="text-xs text-terracotta-500">{error}</p>
              )}

              <button
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                {tr.cart.orderWhatsapp}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
