import * as React from 'react';
import './style.css';

const App = () => {
  const [select, setSelect] = React.useState('');
  const [select1, setSelect1] = React.useState('');

  const [vlanpon1, setvlanpon1] = React.useState('');
  const [vlanpon2, setvlanpon2] = React.useState('');
  const [vlanpon3, setvlanpon3] = React.useState('');
  const [vlanpon4, setvlanpon4] = React.useState('');
  const [vlanpon5, setvlanpon5] = React.useState('');
  const [vlanpon6, setvlanpon6] = React.useState('');
  const [vlanpon7, setvlanpon7] = React.useState('');
  const [vlanpon8, setvlanpon8] = React.useState('');

  const handleChange = (event) => {
    setvlanpon1(event.target.value);
  };
  const handleChange2 = (event) => {
    setvlanpon2(event.target.value);
  };
  const handleChange3 = (event) => {
    setvlanpon3(event.target.value);
  };
  const handleChange4 = (event) => {
    setvlanpon4(event.target.value);
  };
  const handleChange5 = (event) => {
    setvlanpon5(event.target.value);
  };
  const handleChange6 = (event) => {
    setvlanpon6(event.target.value);
  };
  const handleChange7 = (event) => {
    setvlanpon7(event.target.value);
  };
  const handleChange8 = (event) => {
    setvlanpon8(event.target.value);
  };

  return (
    <div>
      <p>VLAN PON 1 <input type="number" id="vlanpon1" onChange={handleChange} value={vlanpon1} /></p>
      <p>VLAN PON 2 <input type="number" id="vlanpon2" onChange={handleChange2} value={vlanpon2} /></p>
      <p>VLAN PON 3 <input type="number" id="vlanpon3" onChange={handleChange3} value={vlanpon3} /></p>
      <p>VLAN PON 4 <input type="number" id="vlanpon4" onChange={handleChange4} value={vlanpon4} /></p>
      <p>VLAN PON 5 <input type="number" id="vlanpon5" onChange={handleChange5} value={vlanpon5} /></p>
      <p>VLAN PON 6 <input type="number" id="vlanpon6" onChange={handleChange6} value={vlanpon6} /></p>
      <p>VLAN PON 7 <input type="number" id="vlanpon7" onChange={handleChange7} value={vlanpon7} /></p>
      <p>VLAN PON 8 <input type="number" id="vlanpon8" onChange={handleChange8} value={vlanpon8} /></p>

      <select value={select} onChange={({ target }) => setSelect(target.value)} id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <br></br>
      <select value={select1} onChange={({ target }) => setSelect1(target.value)} id="produtos" >
        <option disabled value="">s
          Selecione
        </option>
        <option value="bom">Bom</option>
        <option value="ruim">Ruim</option>
        <option value="mais ou menos">Mais ou Menos</option>
      </select>

      {/* <br></br>
      <br></br>
      <button className="">GO</button> */}

      <div class="bridge-uplink">
        <h1>Bridges Uplink</h1>
        <h2>
          <p>bridge add <select value={select} onChange={({ target }) => setSelect(target.value)} id="produtos">
            <option value="eth1">eth1</option>
            <option value="eth2">eth2</option>
            <option value="eth3">eth3</option>
            <option value="eth4">eth4</option>
            <option value="eth5">eth5</option>
            <option value="eth6">eth6</option>
            <option value="eth7">eth7</option>
            <option value="eth8">eth8</option>
            <option value="xeth1">xeth1</option>
            <option value="xeth2">xeth2</option>
          </select> uplink vlan {vlanpon1} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon2} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon3} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon4} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon5} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon6} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon7} tagged</p>
          <p>bridge add eth1 uplink vlan {vlanpon8} tagged</p>
        </h2>
      </div>
    </div>
  );
};

export default App;
