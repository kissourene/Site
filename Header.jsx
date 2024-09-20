import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header({ currentPage, setCurrentPage }) {
  return (
    <header>
      <nav>
        <Link to="/" onClick={() => setCurrentPage('home')}>Accueil</Link>
        <Link to="/products" onClick={() => setCurrentPage('products')}>Produits</Link>
        <Link to="/cart" onClick={() => setCurrentPage('cart')}>Panier</Link>
        <Link to="/signin" onClick={() => setCurrentPage('signin')}>Se connecter</Link>
        <Link to="/signup" onClick={() => setCurrentPage('signup')}>S'inscrire</Link>
      </nav>
    </header>
  );
}

export default Header;
