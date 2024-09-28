import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext'; 

const Navbar = () => {
  const { totalAmount } = useCart();
  const { token, logout } = useUser(); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
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
        <ButtonGroup className="navbar-nav me-auto">
          <Link to="/" className="nav-item">
            <Button variant="outline-light">🍕 Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile" className="nav-item">
                <Button variant="outline-light">🔓 Profile</Button>
              </Link>
              <Button
                variant="outline-light rounded"
                className="nav-item"
                onClick={logout}
              >
                🔒 Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-item">
                <Button variant="outline-light">🔐 Login</Button>
              </Link>
              <Link to="/register" className="nav-item">
                <Button variant="outline-light">🔐 Register</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
        <div className="d-flex ml-auto">
          <Link to="/cart">
            <button className="btn btn-outline-info total-button">
              🛒 Total: ${totalAmount.toLocaleString()}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
