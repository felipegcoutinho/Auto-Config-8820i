import * as React from 'react';
import './style.css';

const initialValues = {
  vlanpon1: "1",
  vlanpon2: "1",
  vlanpon3: "1",
  vlanpon4: "1",
  vlanpon5: "1",
  vlanpon6: "1",
  vlanpon7: "1",
  vlanpon8: "1",
};

export default function App() {
  const [values, setValues] = React.useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [select, setSelect] = React.useState('');
  const [select1, setSelect1] = React.useState('');
  const options = [
    {
      label: "eth1",
      value: "eth1",
    },
    {
      label: "eth2",
      value: "eth2",
    },
    {
      label: "eth3",
      value: "eth3",
    },
    {
      label: "eth4",
      value: "eth4",
    },
    {
      label: "eth5",
      value: "eth5",
    },
    {
      label: "eth6",
      value: "eth6",
    },
    {
      label: "eth7",
      value: "eth7",
    },
    {
      label: "eth8",
      value: "eth8",
    },
    {
      label: "xeth1",
      value: "xeth1",
    },
    {
      label: "xeth2",
      value: "xeth2",
    },
  ];

  return (
    <div>
      <p>VLAN PON 1 <input type="number" value={values.vlanpon1} onChange={handleInputChange} name="vlanpon1" /></p>
      <p>VLAN PON 2 <input type="number" value={values.vlanpon2} onChange={handleInputChange} name="vlanpon2" /></p>
      <p>VLAN PON 3 <input type="number" value={values.vlanpon3} onChange={handleInputChange} name="vlanpon3" /></p>
      <p>VLAN PON 4 <input type="number" value={values.vlanpon4} onChange={handleInputChange} name="vlanpon4" /></p>
      <p>VLAN PON 5 <input type="number" value={values.vlanpon5} onChange={handleInputChange} name="vlanpon5" /></p>
      <p>VLAN PON 6 <input type="number" value={values.vlanpon6} onChange={handleInputChange} name="vlanpon6" /></p>
      <p>VLAN PON 7 <input type="number" value={values.vlanpon7} onChange={handleInputChange} name="vlanpon7" /></p>
      <p>VLAN PON 8 <input type="number" value={values.vlanpon8} onChange={handleInputChange} name="vlanpon8" /></p>

      <select className="selectcomando" value="teste" onChange={({ target }) => setSelect(target.value)}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select><br></br>

      <select className="selectcomando" value={select1} onChange={({ target }) => setSelect1(target.value)}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div className="bridge-uplink">
        <h1>Bridges Uplink</h1>
        <h2>
          <p>bridge add {select} uplink vlan {values.vlanpon1} tagged</p>
          <p>bridge add {select1} uplink vlan {values.vlanpon2} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon3} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon4} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon5} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon6} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon7} tagged</p>
          <p>bridge add eth1 uplink vlan {values.vlanpon8} tagged</p>
        </h2>
      </div>
    </div>
  );
};
