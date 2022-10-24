import React from 'react'
import Style from './Header.module.css'

export default function header() {
  return (
    <div id="start" className={Style.container}>
      <nav className={Style.menu}>
        <ul>
          <li><a className={Style.title} href="https://github.com/felipegcoutinho">GPON ITBS <span className={Style.version}>v1.0</span> </a></li>
          <li><a href="#"> 8820i <i className="fa-solid fa-caret-down"></i></a>

            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="http://backend.intelbras.com/sites/default/files/2021-02/Datasheet%20OLT%208820%20I%2001.2021%20V2.pdf">
                <i className="fa-solid fa-sm fa-arrow-up-right-from-square">
                </i> Datasheet</a>
              </li>

              <li><a target="_blank" rel="noopener noreferrer" href="https://backend.intelbras.com/sites/default/files/2021-07/Manual_OLT_8820_I_02-21.pdf">
                <i className="fa-solid fa-sm fa-arrow-up-right-from-square">
                </i> Manual</a>
              </li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://backend.intelbras.com/sites/default/files/2021-01/Guia_OLT_8820_I_portugues_01-20_site.pdf">
                <i className="fa-solid fa-sm fa-arrow-up-right-from-square">
                </i> Guia</a>
              </li>

            </ul>
          </li>

          <li>
            <button className={Style.btnExternal}>
              <a target="_blank" rel="noopener noreferrer" href="https://8820i.felipecoutinho.com/"> OLT G08/G16{' '}
                <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i>
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </div >
  )
}