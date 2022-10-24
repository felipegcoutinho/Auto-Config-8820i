import React from 'react'
import Style from './Select.module.css'
import ValueContext from "../../js/ValueContext";
import { Link } from "react-router-dom";

export default function Select() {
  const { handleChangeSelected } = React.useContext(ValueContext);

  return (
    <div className={Style.content}>
      <h2 className={Style.h2}>Escolha o Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <Link to="/"><button className={Style.btn}>OLT 8820i</button></Link>
        <a target="_blank" rel="noopener noreferrer" href='https://g16.felipecoutinho.com'><button className={Style.btn}>OLT G08/G16 <i className="fa-solid fa-sm fa-arrow-up-right-from-square"></i></button></a>
      </nav>


      <div className={Style.modoContainer}>
        <h3 className={Style.h3}>Escolha o tipo de configuração da 8820i:</h3>
        <select className={Style.select} onChange={handleChangeSelected} >
          <option>Uma VLAN por PON</option>
          <option>Apenas uma VLAN por PON</option>
        </select>
      </div>
    </div>
  )
}