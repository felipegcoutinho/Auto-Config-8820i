import * as React from 'react';
import './style.css';

export default function header() {
  return (
    <nav class="navbar">
      <a href="#" class="logo">Auto Config 8820i</a>
      <ul class="nav-links">
        <li class="nav-item"><a href="#">Uma VLAN por PON</a></li>
        <li class="nav-item"><a href="#">Uma VLAN</a></li>
      </ul>
    </nav>
  );
}