import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UnitsPage from './pages/UnitsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/units" element={<UnitsPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phone="082245756875" />
      </div>
    </BrowserRouter>
  );
}

export default App;