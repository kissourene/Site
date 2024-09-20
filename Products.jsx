import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Définissez le nombre de produits par page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('your-api-url'); // Remplacez par votre URL API
        const data = await response.json();
        console.log(data); // Pour déboguer
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Calculez les produits à afficher pour la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <section className="products">
      <h1>Nos produits</h1>
      <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => <ProductCard key={product.id} {...product} />)
        ) : (
          <p>No products available</p>
        )}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious} aria-label="Previous">Précédent</button>
          </li>
          <li className="page-item active">
            <span className="page-link">{currentPage}</span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNext} aria-label="Next">Suivant</button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Products;
