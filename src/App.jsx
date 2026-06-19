import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Placeholder or actual Page imports
import Home from './pages/landing/Hero'; // Contains your CaseStudy section
// import Catalog from './pages/Catalog';
// import ProgramSelection from './pages/ProgramSelection';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Persistent global Navigation Header across all pages */}

        {/* Dynamic Route Content Switcher Window */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/catalog" element={<Catalog />} /> */}
            {/* <Route path="/program" element={<ProgramSelection />} /> */}
          </Routes>
        </main>

        {/* Map & Contacts Footer View */}
      </div>
    </Router>
  );
}