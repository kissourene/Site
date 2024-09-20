import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css'; 


function Home() {
  const products = [
    { id: 1, name: 'Produit 1', price: 19.99 },
    { id: 2, name: 'Produit 2', price: 29.99 },
    { id: 3, name: 'Produit 3', price: 39.99 },
    { id: 4, name: 'Produit 4', price: 49.99 },
    { id: 5, name: 'Produit 5', price: 59.99 },
  ];

  return (
    <section className="home">
      <h1>Bienvenue sur notre boutique en ligne</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="btn btn-primary">Découvrir nos produits</button>
    </section>
  );
}

export default Home;
