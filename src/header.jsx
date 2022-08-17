import * as React from 'react';
import './style.css';

export default function header() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">Auto Config 8820i</a>
      <ul className="nav-links">
        <li className="nav-item"><a href="#">Uma VLAN por PON</a></li>
        <li className="nav-item"><a href="#">Uma VLAN</a></li>
      </ul>
    </nav>
  );
}