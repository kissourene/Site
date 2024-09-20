import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp({ setcurrentPage }) {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les credentials et créer un nouvel utilisateur si valides
    setcurrentPage('home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Prénom"
        onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Nom"
        onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        required
      />
      <button type="submit">S'inscrire</button>
      <Link to="/signin">Déjà inscrit ? Se connecter</Link>
    </form>
  );
}

export default SignUp;