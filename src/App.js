import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import './App.css';
import { motion } from "framer-motion";

import { FaWhatsapp } from 'react-icons/fa';
import Loading from './components/Loading';
import NavigationBar from './components/NavigationBar.jsx';
import EventBanner from './components/Eventbanner.jsx';
import Copyrights from './pages/Copyrights.jsx';
import NotFound from './pages/Notfound.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Aboutuspage = lazy(() => import('./pages/Aboutuspage.jsx'));
const ContactusPage = lazy(() => import('./pages/ContactusPage.jsx'));
const InstrumentsPage = lazy(() => import('./pages/InstrumentsPage.jsx'));
const ClientsPage = lazy(() => import('./pages/ClientsPage.jsx'));
const Notfound = lazy(() => import('./pages/Notfound.jsx'));


function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname !== '/programs') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);
  return null;
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+919827004138"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255,255,255,0.95)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Loading style={{ width: 180, height: 180 }} />
        </div>
      )}
      <EventBanner />
      <Topbar />
      <NavigationBar />
      <ScrollToTop />
      <Suspense fallback={<Loading style={{ width: 120, height: 120 }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/instruments" element={<InstrumentsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
    
                
          <Route path="/contact" element={<ContactusPage />} />

          <Route path="/copyrights" element={<Copyrights />} />

          <Route path="*" element={<NotFound />} />
      
        </Routes>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App; 