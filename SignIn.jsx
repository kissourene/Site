import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';


function SignIn({ setcurrentPage }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les credentials et mettre à jour l'état si valides
    setcurrentPage('home');
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Se connecter</button>
      <Link to="/signup">Pas encore inscrit ? S'inscrire</Link>
    </form>
  );
}

export default SignIn;
