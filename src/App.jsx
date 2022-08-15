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
    <section className='main'>
      <h2>Configurações das PONs</h2>
      <div className='pon-container'>

        <div className='pon-config'>
          <h5>PON 1</h5>
          <label>Vlan ID</label><input type="number" value={values.vlanpon1} onChange={handleInputChange} name="vlanpon1" />
          <label>Uplink </label><select onChange={({ target }) => setSelect(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge </label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 2</h5>
          <label>Vlan ID </label><input type="number" value={values.vlanpon2} onChange={handleInputChange} name="vlanpon2" />
          <label>Uplink </label><select className="selectcomando" onChange={({ target }) => setSelect1(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 3</h5>
          <label>Vlan ID  </label><input type="number" value={values.vlanpon3} onChange={handleInputChange} name="vlanpon3" />
          <label>Uplink </label> <select className="selectcomando" onChange={({ target }) => setSelect3(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 4</h5>
          <label>Vlan ID </label><input type="number" value={values.vlanpon1} onChange={handleInputChange} name="vlanpon1" />
          <label>Uplink </label><select onChange={({ target }) => setSelect(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 5</h5>
          <label>Vlan ID </label><input type="number" value={values.vlanpon2} onChange={handleInputChange} name="vlanpon2" />
          <label>Uplink </label><select className="selectcomando" onChange={({ target }) => setSelect1(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 6</h5>
          <label>Vlan ID  </label><input type="number" value={values.vlanpon3} onChange={handleInputChange} name="vlanpon3" />
          <label>Uplink </label> <select className="selectcomando" onChange={({ target }) => setSelect3(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 7</h5>
          <label>Vlan ID </label><input type="number" value={values.vlanpon2} onChange={handleInputChange} name="vlanpon2" />
          <label>Uplink </label><select className="selectcomando" onChange={({ target }) => setSelect1(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>

        <div className='pon-config'>
          <h5>PON 8</h5>
          <label>Vlan ID  </label><input type="number" value={values.vlanpon3} onChange={handleInputChange} name="vlanpon3" />
          <label>Uplink </label> <select className="selectcomando" onChange={({ target }) => setSelect3(target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <label>Bridge</label><select></select>
          <label>Modo VLAN </label><select></select>
        </div>


        {/* <p>PON 2 <input type="number" value={values.vlanpon2} onChange={handleInputChange} name="vlanpon2" /></p>
        <p>PON 3 <input type="number" value={values.vlanpon3} onChange={handleInputChange} name="vlanpon3" /></p>
        <p>PON 4 <input type="number" value={values.vlanpon4} onChange={handleInputChange} name="vlanpon4" /></p>
        <p>PON 5 <input type="number" value={values.vlanpon5} onChange={handleInputChange} name="vlanpon5" /></p>
        <p>PON 6 <input type="number" value={values.vlanpon6} onChange={handleInputChange} name="vlanpon6" /></p>
        <p>PON 7 <input type="number" value={values.vlanpon7} onChange={handleInputChange} name="vlanpon7" /></p>
        <p>PON 8 <input type="number" value={values.vlanpon8} onChange={handleInputChange} name="vlanpon8" /></p> */}
      </div>




      <div className="bridge-uplink">
        <h1>Bridges Uplink</h1>
        <h2>
          <p>bridge add <span>{select}</span> uplink vlan <span>{values.vlanpon1}</span> tagged</p>
          <p>bridge add <span>{select1}</span> uplink vlan <span>{values.vlanpon2}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon3}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon4}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon5}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon6}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon7}</span> tagged</p>
          <p>bridge add eth1 uplink vlan <span>{values.vlanpon8}</span> tagged</p>
          <p>bridge-profile add gpon1-default downlink vlan 101 tagged eth 1</p>
          <p>bridge-profile add gpon2-default downlink vlan 102 tagged eth 1</p>
          <p>bridge-profile add gpon3-default downlink vlan 103 tagged eth 1</p>
          <p>bridge-profile add gpon4-default downlink vlan 104 tagged eth 1</p>
          <p>bridge-profile add gpon5-default downlink vlan 105 tagged eth 1</p>
          <p>bridge-profile add gpon6-default downlink vlan 106 tagged eth 1</p>
          <p>bridge-profile add gpon7-default downlink vlan 107 tagged eth 1</p>
          <p>bridge-profile add gpon8-default downlink vlan 108 tagged eth 1</p>
          <p>bridge-profile add gpon1-default-router downlink vlan 101 tagged router</p>
          <p>bridge-profile add gpon2-default-router downlink vlan 102 tagged router</p>
          <p>bridge-profile add gpon3-default-router downlink vlan 103 tagged router</p>
          <p>bridge-profile add gpon4-default-router downlink vlan 104 tagged router</p>
          <p>bridge-profile add gpon5-default-router downlink vlan 105 tagged router</p>
          <p>bridge-profile add gpon6-default-router downlink vlan 106 tagged router</p>
          <p>bridge-profile add gpon7-default-router downlink vlan 107 tagged router</p>
          <p>bridge-profile add gpon8-default-router downlink vlan 108 tagged router</p>
          <p>bridge-profile bind add gpon1-default device intelbras-110 gpon 1</p>
          <p>bridge-profile bind add gpon1-default device intelbras-110b gpon 1</p>
          <p>bridge-profile bind add gpon1-default device intelbras-110g gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-default gpon 1</p>
          <p>bridge-profile bind add gpon1-default device intelbras-r1 gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-121w gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-142ng gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-142nw gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-1420g gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-121ac gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-1200r gpon 1</p>
          <p>bridge-profile bind add gpon1-default-router device intelbras-120ac gpon 1</p>
          <p>bridge-profile bind add gpon2-default device intelbras-110 gpon 2</p>
          <p>bridge-profile bind add gpon2-default device intelbras-110b gpon 2</p>
          <p>bridge-profile bind add gpon2-default device intelbras-110g gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-default gpon 2</p>
          <p>bridge-profile bind add gpon2-default device intelbras-r1 gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-121w gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-142ng gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-142nw gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-1420g gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-121ac gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-120ac gpon 2</p>
          <p>bridge-profile bind add gpon2-default-router device intelbras-1200r gpon 2</p>
          <p>bridge-profile bind add gpon3-default device intelbras-110 gpon 3</p>
          <p>bridge-profile bind add gpon3-default device intelbras-110b gpon 3</p>
          <p>bridge-profile bind add gpon3-default device intelbras-110g gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-default gpon 3</p>
          <p>bridge-profile bind add gpon3-default device intelbras-r1 gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-121w gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-142ng gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-142nw gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-1420g gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-121ac gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-120ac gpon 3</p>
          <p>bridge-profile bind add gpon3-default-router device intelbras-1200r gpon 3</p>
          <p>bridge-profile bind add gpon4-default device intelbras-110 gpon 4</p>
          <p>bridge-profile bind add gpon4-default device intelbras-110b gpon 4</p>
          <p>bridge-profile bind add gpon4-default device intelbras-110g gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-default gpon 4</p>
          <p>bridge-profile bind add gpon4-default device intelbras-r1 gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-121w gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-142ng gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-142nw gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-1420g gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-121ac gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-120ac gpon 4</p>
          <p>bridge-profile bind add gpon4-default-router device intelbras-1200r gpon 4</p>
          <p>bridge-profile bind add gpon5-default device intelbras-110 gpon 5</p>
          <p>bridge-profile bind add gpon5-default device intelbras-110b gpon 5</p>
          <p>bridge-profile bind add gpon5-default device intelbras-110g gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-default gpon 5</p>
          <p>bridge-profile bind add gpon5-default device intelbras-r1 gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-121w gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-142ng gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-142nw gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-1420g gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-121ac gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-120ac gpon 5</p>
          <p>bridge-profile bind add gpon5-default-router device intelbras-1200r gpon 5</p>
          <p>bridge-profile bind add gpon6-default device intelbras-110 gpon 6</p>
          <p>bridge-profile bind add gpon6-default device intelbras-110b gpon 6</p>
          <p>bridge-profile bind add gpon6-default device intelbras-110g gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-default gpon 6</p>
          <p>bridge-profile bind add gpon6-default device intelbras-r1 gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-121w gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-142ng gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-142nw gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-1420g gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-121ac gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-120ac gpon 6</p>
          <p>bridge-profile bind add gpon6-default-router device intelbras-1200r gpon 6</p>
          <p>bridge-profile bind add gpon7-default device intelbras-110 gpon 7</p>
          <p>bridge-profile bind add gpon7-default device intelbras-110b gpon 7</p>
          <p>bridge-profile bind add gpon7-default device intelbras-110g gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-default gpon 7</p>
          <p>bridge-profile bind add gpon7-default device intelbras-r1 gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-121w gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-142ng gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-142nw gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-1420g gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-121ac gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-120ac gpon 7</p>
          <p>bridge-profile bind add gpon7-default-router device intelbras-1200r gpon 7</p>
          <p>bridge-profile bind add gpon8-default device intelbras-110 gpon 8</p>
          <p>bridge-profile bind add gpon8-default device intelbras-110b gpon 8</p>
          <p>bridge-profile bind add gpon8-default device intelbras-110g gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-default gpon 8</p>
          <p>bridge-profile bind add gpon8-default device intelbras-r1 gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-121w gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-142ng gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-142nw gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-1420g gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-121ac gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-120ac gpon 8</p>
          <p>bridge-profile bind add gpon8-default-router device intelbras-1200r gpon 8</p>
          <p>onu set auto</p>
          <p>auto-service enable</p>
          <p>yes</p>
          <p>onu show refresh</p>
        </h2>
      </div>
    </section>
  );
};
