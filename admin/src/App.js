import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Flowers from './pages/Flowers';
import AddFlower from './pages/AddFlowers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/flowers" />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/add" element={<AddFlower />} />
      </Routes>
    </Router>
  );
}

export default App;