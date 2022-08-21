import * as React from 'react';
import './style.css';

export default function header() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">Auto Config 8820i</a>
      <ul className="nav-links">
        <li className="nav-item"><a href="#porpon">Uma VLAN por PON</a></li>
        <li className="nav-item"><a href="#umavlan">Uma VLAN</a></li>
      </ul>
    </nav>
  );
}