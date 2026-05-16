import { HashRouter, Routes, Route } from 'react-router-dom'
import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SEOPage from './pages/SEOPage'
import GoogleAdsPage from './pages/GoogleAdsPage'
import GoogleMerchantPage from './pages/GoogleMerchantPage'
import ShopifyPage from './pages/ShopifyPage'

export default function App() {
  return (
    <HashRouter>
      <div style={{ background: '#05050a', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
        <StarField />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/google-ads" element={<GoogleAdsPage />} />
            <Route path="/services/google-merchant" element={<GoogleMerchantPage />} />
            <Route path="/services/shopify" element={<ShopifyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  )
}
