import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnologyServicesPage from '../pages/technology-services';
import CorporateServicesPage from '../pages/corporate-services';
import SolarPage from '../pages/solar';
import App from '../App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/technology-services" element={<TechnologyServicesPage />} />
        <Route path="/corporate-services" element={<CorporateServicesPage />} />
        <Route path="/solar" element={<SolarPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
