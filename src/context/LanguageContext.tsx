import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Lang } from '../types';
import { t, type TranslationSet } from '../i18n';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  isRtl: boolean;
  tr: TranslationSet;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'hakimi-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'ar' || saved === 'fr' ? saved : 'fr';
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = isRtl ? 'rtl' : 'ltr';
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, isRtl]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((p) => (p === 'fr' ? 'ar' : 'fr')),
      isRtl,
      tr: t(lang),
    }),
    [lang, isRtl],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
