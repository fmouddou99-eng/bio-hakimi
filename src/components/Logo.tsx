import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Logo({
  className = '',
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const { isRtl } = useLanguage();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';
  const [imgError, setImgError] = useState(false);

  const textColor = inverted ? 'text-cream-50' : 'text-sage-800';
  const subColor = inverted ? 'text-cream-200/70' : 'text-sage-500';

  if (imgError) {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div
          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shrink-0 ${
            inverted ? 'bg-cream-50/10' : 'bg-sage-700'
          }`}
        >
          <span
            className={`text-lg lg:text-xl font-bold ${titleFont} ${
              inverted ? 'text-cream-50' : 'text-cream-50'
            }`}
          >
            HB
          </span>
        </div>
        <span className="hidden sm:flex flex-col leading-tight">
          <span className={`text-lg lg:text-xl font-bold ${titleFont} ${textColor}`}>
            HAKIMI BIO
          </span>
          <span className={`text-[10px] lg:text-xs tracking-wide ${subColor}`}>
            {isRtl ? 'منتجات طبيعية وحرفية' : 'Produits naturels & artisanaux'}
          </span>
        </span>
      </div>
    );
  }

  return (
    <img
      src="./LOGO_bio_upscayl_10x_upscayl-standard-4x.png"
      alt="Hakimi Bio"
      onError={() => setImgError(true)}
      className={`h-10 lg:h-12 w-auto object-contain ${className} ${
        inverted ? 'brightness-0 invert' : ''
      }`}
    />
  );
}
