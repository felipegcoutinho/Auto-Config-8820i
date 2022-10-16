import * as React from 'react';
import './style.css';

export default function header() {
  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <li><a className="title" href="https://github.com/felipegcoutinho">GPON ITBS <span className="version">v1.0</span></a></li>
          <li><a href="#">OLT 8820i <i className="fa-solid fa-caret-down"></i></a>
            <ul>
              <li><a href="https://backend.intelbras.com/sites/default/files/2021-07/Manual_OLT_8820_I_02-21.pdf"><i className="fa-solid fa-caret-right"></i> Manual</a></li>
              <li><a href="https://backend.intelbras.com/sites/default/files/2021-01/Guia_OLT_8820_I_portugues_01-20_site.pdf"><i className="fa-solid fa-caret-right"></i> Guia</a></li>
            </ul>
          </li>
          <li><a href="#" rel="noopener noreferrer">OLT G08/G16 <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></a></li>
        </ul>
      </nav >
    </div >
  );
}