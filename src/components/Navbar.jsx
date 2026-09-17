import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import institute from "../data/institute";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src="/images/logo/ctc-logo.jpeg"
            alt="Career Transformation Center Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <strong>{institute.name}</strong>
            <span>{institute.shortName}</span>
          </div>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>

          <NavLink to="/learning-approach" onClick={closeMenu}>
            Learning Approach
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>

          <Link to="/contact" className="nav-enroll" onClick={closeMenu}>
            Enroll Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;