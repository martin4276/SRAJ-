import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, BookOpen, Wrench, MapPin, User } from 'lucide-react';
import './Navigation.scss';

const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <Home className="me-2" size={24} />
          <span className="fw-bold">SRAJ Connect</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`} 
                to="/chat"
              >
                <MessageCircle className="me-2" size={20} />
                <span>Dr Bot & Chat</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                to="/library"
              >
                <BookOpen className="me-2" size={20} />
                <span>Bibliothèque</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                to="/tools"
              >
                <Wrench className="me-2" size={20} />
                <span>Outils</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                to="/resources"
              >
                <MapPin className="me-2" size={20} />
                <span>Ressources</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                to="/profile"
              >
                <User className="me-2" size={20} />
                <span>Profil</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;