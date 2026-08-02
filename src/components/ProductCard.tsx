import { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import type { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ProductIcon } from './ProductIcon';

export function ProductCard({ product }: { product: Product }) {
  const { lang, isRtl, tr } = useLanguage();
  const { add } = useCart();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  const [sizeId, setSizeId] = useState(product.sizes[0]?.id ?? '');
  const [variantId, setVariantId] = useState<string>('');
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const size = product.sizes.find((s) => s.id === sizeId) ?? product.sizes[0];
  const price = size?.price ?? 0;
  const minPrice = Math.min(...product.sizes.map((s) => s.price));

  const variantMissing = product.variantRequired && !variantId;

  const handleAdd = () => {
    if (variantMissing) return;
    const variant = product.variants?.find((v) => v.id === variantId);
    const key = `${product.id}-${sizeId}${variantId ? `-${variantId}` : ''}`;
    add({
      key,
      productId: product.id,
      name: product.name,
      sizeId,
      sizeLabel: size?.label ?? { fr: '', ar: '' },
      variantId: variantId || undefined,
      variantName: variant?.name,
      unitPrice: price,
    });
    setQty(1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="group flex flex-col bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-sage-100">
      {/* Placeholder visual */}
      <div
        className={`relative aspect-[4/3] bg-gradient-to-br ${product.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-texture-linen" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ProductIcon
            icon={product.icon}
            className="w-14 h-14 text-white/80 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* monogram corner */}
        <span
          className={`absolute bottom-3 end-3 text-2xl font-bold text-white/30 ${titleFont}`}
        >
          {product.name[lang].charAt(0).toUpperCase()}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className={`text-lg font-semibold text-sage-900 leading-snug ${titleFont}`}>
          {product.name[lang]}
        </h3>
        <p className="mt-2 text-sm text-sage-600 leading-relaxed line-clamp-3">
          {product.description[lang]}
        </p>

        {/* Variants */}
        {product.variants && (
          <div className="mt-4">
            <span className="text-xs font-medium text-sage-500 uppercase tracking-wide">
              {tr.product.variant}
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariantId(v.id)}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                    variantId === v.id
                      ? 'size-btn-active'
                      : 'size-btn'
                  }`}
                >
                  {v.name[lang]}
                </button>
              ))}
            </div>
            {variantMissing && (
              <p className="mt-1.5 text-xs text-terracotta-500">
                {tr.product.variantPrompt}
              </p>
            )}
          </div>
        )}

        {/* Sizes */}
        {product.sizes.length > 1 && (
          <div className="mt-4">
            <span className="text-xs font-medium text-sage-500 uppercase tracking-wide">
              {tr.product.size}
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSizeId(s.id)}
                  className={`text-xs ${sizeId === s.id ? 'size-btn-active' : 'size-btn'}`}
                >
                  {s.label[lang]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price + qty + add */}
        <div className="mt-5 pt-4 border-t border-sage-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-sage-800">
              {price}
              <span className="text-sm font-medium text-sage-500 ms-1">
                {tr.product.dh}
              </span>
            </span>
            {product.sizes.length > 1 && (
              <span className="text-[11px] text-sage-400">
                {tr.product.from} {minPrice} {tr.product.dh}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* qty */}
            <div className="flex items-center gap-1 bg-sage-50 rounded-xl p-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="qty-btn"
                aria-label="decrease"
              >
                <Minus className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
              <span className="w-6 text-center text-sm font-semibold text-sage-800">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="qty-btn"
                aria-label="increase"
              >
                <Plus className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>

            {/* add */}
            <button
              onClick={handleAdd}
              disabled={variantMissing}
              className={`btn-primary text-sm py-2 px-3 ${
                variantMissing ? 'opacity-50 cursor-not-allowed' : ''
              } ${justAdded ? '!bg-sage-500' : ''}`}
            >
              {justAdded ? (
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4" strokeWidth={2} />
                  {tr.product.adding}
                </span>
              ) : (
                tr.product.add
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
