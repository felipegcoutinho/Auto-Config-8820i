import React from 'react';
import Style from './App.module.css';
import ValueContext from "./js/ValueContext";
import ConfigAutoService from '../src/Components/Bridges/ConfigAutoService';
import RemoveAutoService from '../src/Components/Bridges/RemoveAutoService';
import Pons_i from '../src/Components/Pons/Pons_i';
import Aviso from '../src/Components/Aviso/Aviso';
import Menu from '../src/Components/Menu/Menu';
import initialValues from './js/initialValues.js';
import Footer from '../src/Components/Footer/Footer';

export default function App() {

  //Hook para armazenar o modelo do equipamento
  const [checked, setChecked] = React.useState(null)

  const [selected, setSelected] = React.useState(true);

  const handleChangeSelected = () => {
    setSelected(!selected)
  }

  //Hook para armazenar os valores dos inputs
  const [values, setValues] = React.useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <ValueContext.Provider value={{ values, setValues, handleChange, checked, setChecked, selected, handleChangeSelected }}>
      <div className={Style.container}>
        <Menu />
        <Pons_i />
        <Aviso />
        <ConfigAutoService />
        <RemoveAutoService />
        <Footer />
      </div>
    </ValueContext.Provider>
  )
}