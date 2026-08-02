import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { isRtl, tr } = useLanguage();
  const titleFont = isRtl ? 'font-display-rtl' : 'font-display-ltr';

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream-50 bg-texture-linen"
    >
      {/* decorative blobs */}
      <div className="absolute -top-24 -start-24 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -end-24 w-[28rem] h-[28rem] bg-gold-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
              {tr.hero.eyebrow}
            </span>

            <h1
              className={`mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 leading-[1.15] text-balance whitespace-pre-line ${titleFont}`}
            >
              {tr.hero.title}
            </h1>

            <p className="mt-6 text-base lg:text-lg text-sage-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {tr.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#wellness" className="btn-primary inline-flex items-center justify-center gap-2">
                {tr.hero.cta}
                <ArrowDown className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-card-hover bg-gradient-to-br from-sage-300 via-sage-400 to-sage-600 relative">
              {/* layered decorative circles */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 start-8 w-32 h-32 rounded-full bg-cream-100/40 blur-xl" />
                <div className="absolute bottom-12 end-10 w-40 h-40 rounded-full bg-gold-300/50 blur-xl" />
                <div className="absolute top-1/2 start-1/3 w-24 h-24 rounded-full bg-cream-200/30 blur-lg" />
              </div>
              {/* monogram */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream-50">
                <span
                  className={`text-7xl lg:text-8xl font-bold tracking-tight ${titleFont} drop-shadow-sm`}
                >
                  HB
                </span>
                <span className="mt-3 text-sm tracking-[0.3em] uppercase opacity-80">
                  Hakimi Bio
                </span>
                <span className="mt-1 text-xs tracking-wider opacity-60">
                  100% naturel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
