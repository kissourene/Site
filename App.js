import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route   
 path="/signup" element={<SignUp   
 />} />
      </Routes>
    );
  };
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;