import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_page from './Pages/Landing_page';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing_page />} />
        <Route path="/landing_Page" element={<Landing_page />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
