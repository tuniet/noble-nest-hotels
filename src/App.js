import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Room from './pages/Room';
import Booking from './pages/Booking';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms/:type" element={<Room />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;