import React from 'react';
import ProductCard from '../components/ProductCard';
import './Cart.css';

function Cart({ cartItems }) {
  // Vérifiez si cartItems est défini et est un tableau
  const totalPrice = Array.isArray(cartItems) 
    ? cartItems.reduce((total, item) => total + item.price, 0) 
    : 0; // Valeur par défaut si cartItems n'est pas un tableau

  return (
    <section className="cart">
      <h1>Votre panier</h1>
      <div className="cart-items">
        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total : {totalPrice.toFixed(2)}€</h3>
        <button className="btn btn-primary" disabled={totalPrice === 0}>
          Procéder au paiement
        </button>
      </div>
    </section>
  );
}

export default Cart;
