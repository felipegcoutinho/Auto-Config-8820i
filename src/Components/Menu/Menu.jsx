import React from 'react'
import Style from './Menu.module.css'
import ValueContext from "../../js/ValueContext";
import { Link } from "react-router-dom";

export default function Menu() {
  const { handleChangeSelected } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      <h1 className={Style.h1}>Configurações de Auto Provisionamento - 8820i</h1>

      <h2 className={Style.h2}>Concentrador que será configurado:</h2>
      <nav className={Style.containerBtn}>
        <Link to="/"><button className={Style.btn}>OLT 8820i</button></Link>
      </nav>

      <div className={Style.modoContainer}>
        <h3 className={Style.h3}>Escolha o tipo de configuração da 8820i:</h3>
        <select className={Style.select} onChange={handleChangeSelected} >
          <option>Uma VLAN por PON</option>
          <option>Apenas uma VLAN</option>
        </select>
      </div>
    </div>
  )
}