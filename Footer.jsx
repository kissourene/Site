import React from 'react';
import './Footer.css';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Nos services</h3>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/products">Produits</a></li>
              <li><a href="/cart">Panier</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Informations de contact</h3>
            <address>
              <strong>Magasin en ligne</strong><br />
              Rue du Commerce, 123<br />
              4002 Yako, Burkina<br />
              <i className="fas fa-phone"></i> +2265894335<br />
              <i className="far fa-envelope"></i> contact@votre-site.com
            </address>
          </div>
          <div className="col-md-4">
            <h3>Suivez-nous</h3>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>&copy; {currentYear} Votre nom de site. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
