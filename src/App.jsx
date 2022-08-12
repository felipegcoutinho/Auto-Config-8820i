import * as React from 'react';
import './style.css';

const App = () => {
  const [select, setSelect] = React.useState('');
  const [select1, setSelect1] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <br></br>

      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <br></br>
      <select
        value={select1}
        onChange={({ target }) => setSelect1(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="bom">Bom</option>
        <option value="ruim">Ruim</option>
        <option value="mais ou menos">Mais ou Menos</option>
      </select>

      {/* <br></br>
      <br></br>
      <button className="">GO</button> */}

      <div id="comandos">
        <h1>
          Esse {select} é {select1}, quero {message}
        </h1>
      </div>
    </div>
  );
};

export default App;
