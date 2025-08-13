import './App.css';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import InstrumentsPage from './pages/InstrumentsPage.jsx';
import About from './pages/Aboutuspage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import ContactPage from './pages/ContactusPage.jsx';
function App() {
  return (
    <>
      <Topbar />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruments" element={<InstrumentsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<ClientsPage  />} />
        <Route path="/contact" element={<ContactPage  />} />
      </Routes>
      <Footer />
    </>
  );

}

export default App;
