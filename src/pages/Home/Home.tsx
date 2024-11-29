import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">SRAJ Connect</h1>
          <p className="lead mb-4">Votre santé, votre avenir, votre choix</p>
          <div className="search-bar mx-auto mb-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher des informations..."
                aria-label="Search"
              />
              <button className="btn btn-primary-custom" type="button">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="features py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Dr Bot</h3>
                <p>Posez vos questions et obtenez des réponses instantanées</p>
                <button className="btn btn-link p-0">
                  En savoir plus <ArrowRight size={16} className="ms-2" />
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Bibliothèque</h3>
                <p>Accédez à des ressources éducatives fiables</p>
                <button className="btn btn-link p-0">
                  Explorer <ArrowRight size={16} className="ms-2" />
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <h3>Outils pratiques</h3>
                <p>Gérez votre santé avec nos outils personnalisés</p>
                <button className="btn btn-link p-0">
                  Découvrir <ArrowRight size={16} className="ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;