import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';

import "./styles/app.scss";
import Header from './components/Header';
import Footer from './components/Footer';
import Shery from "sheryjs";

Shery.mouseFollower();

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Home />} />
        <Route path="/companies" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
