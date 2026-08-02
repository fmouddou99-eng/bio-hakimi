import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { CategorySection } from './components/CategorySection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CATEGORIES, PRODUCTS } from './data/products';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream-50 bg-texture-linen">
          <Header />
          <main className="flex-1">
            <Hero />
            <TrustBanner />
            {CATEGORIES.map((cat) => (
              <CategorySection
                key={cat.id}
                category={cat}
                products={PRODUCTS.filter((p) => p.category === cat.id)}
              />
            ))}
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
