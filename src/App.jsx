import * as React from 'react';
import './style.css';
import options from './options';
import initialValues from './initialValues.js';

export default function App() {
  const [showElement, setShowElement] = React.useState(false);
  const Hide = () => setShowElement(false);
  const Show = () => setShowElement(true);

  const [values, setValues] = React.useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [buttonText, setButtonText] = React.useState('Copiar');

  function bridgeAjustepon1() {
    if (values.bridgepon1 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon2() {
    if (values.bridgepon2 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon3() {
    if (values.bridgepon3 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon4() {
    if (values.bridgepon4 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon5() {
    if (values.bridgepon5 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon6() {
    if (values.bridgepon6 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon7() {
    if (values.bridgepon7 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }
  function bridgeAjustepon8() {
    if (values.bridgepon8 == 'tls') {
      return 'tls';
    } else {
      return 'Downlink';
    }
  }

  /************ Modo das ONUs ************/

  function r1mode() {
    if (values.R1Mode == 'bridge') {
      return 'default';
    } else {
      return 'default-router';
    }
  }

  function gimode() {
    if (values.giMode == 'bridge') {
      return 'default';
    } else {
      return 'default-router';
    }
  }

  function defaultmode() {
    if (values.defaultMode == 'bridge') {
      return 'default';
    } else {
      return 'default-router';
    }
  }

  function copyToClip(str) {
    function listener(e) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', str);
    }

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    setButtonText('Copiado')

    setTimeout(() => {
      setButtonText("Copiar");
    }, 2000);
    // const btn1 = document.getElementById('btn1');
    // if (btn1.innerText == 'Copiado') {
    // alert('teste');
    // }
  }

  function switchVisible() {
    if (document.getElementById('porpon-container').style.display == 'none') {
      document.getElementById('porpon-container').style.display = 'block';
      document.getElementById('umavlan-container').style.display = 'none';

    } else {
      document.getElementById('porpon-container').style.display = 'none';
      document.getElementById('umavlan-container').style.display = 'block';
    }
  }

  return (
    <section className="main-container">
      <div className="button-container" onClick={switchVisible}>
        <i className="fa-solid fa-rotate"></i> Alterar modo de configuração da OLT
      </div>
      {/* UMA VLAN POR PON */}
      <div id="porpon-container">
        <h1 id="porpon">UMA VLAN POR PORTA PON <button className='reset' onClick={() => setValues((initialValues))}>Limpar</button></h1>
        <h3>Define identificação de vlan, porta uplink, tipo da vlan e a bridge para cada porta pon.</h3>
        <div className="pon-container">
          {/*********** PON-1 /**********/}

          <div className="pon-config">
            <h5>PON 1</h5>
            <label>Vlan ID</label>
            <input
              type="number"
              value={values.vlanpon1}
              onChange={handleChange}
              name="vlanpon1"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon1}
              onChange={handleChange}
              name="uplinkpon1"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon1}
              onChange={handleChange}
              name="bridgepon1"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon1}
              onChange={handleChange}
              name="modovlanpon1"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-2 /**********/}
          <div className="pon-config">
            <h5>PON 2</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon2}
              onChange={handleChange}
              name="vlanpon2"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon2}
              onChange={handleChange}
              name="uplinkpon2"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon2}
              onChange={handleChange}
              name="bridgepon2"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon2}
              onChange={handleChange}
              name="modovlanpon2"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-3 /**********/}
          <div className="pon-config">
            <h5>PON 3</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon3}
              onChange={handleChange}
              name="vlanpon3"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon3}
              onChange={handleChange}
              name="uplinkpon3"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon3}
              onChange={handleChange}
              name="bridgepon3"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon3}
              onChange={handleChange}
              name="modovlanpon3"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-4 /**********/}
          <div className="pon-config">
            <h5>PON 4</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon4}
              onChange={handleChange}
              name="vlanpon4"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon4}
              onChange={handleChange}
              name="uplinkpon4"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon4}
              onChange={handleChange}
              name="bridgepon4"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon4}
              onChange={handleChange}
              name="modovlanpon4"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-5 /**********/}
          <div className="pon-config">
            <h5>PON 5</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon5}
              onChange={handleChange}
              name="vlanpon5"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon5}
              onChange={handleChange}
              name="uplinkpon5"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon5}
              onChange={handleChange}
              name="bridgepon5"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon5}
              onChange={handleChange}
              name="modovlanpon5"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-6 /**********/}
          <div className="pon-config">
            <h5>PON 6</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon6}
              onChange={handleChange}
              name="vlanpon6"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon6}
              onChange={handleChange}
              name="uplinkpon6"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon6}
              onChange={handleChange}
              name="bridgepon6"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon6}
              onChange={handleChange}
              name="modovlanpon6"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-7 /**********/}
          <div className="pon-config">
            <h5>PON 7</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon7}
              onChange={handleChange}
              name="vlanpon7"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon7}
              onChange={handleChange}
              name="uplinkpon7"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon7}
              onChange={handleChange}
              name="bridgepon7"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon7}
              onChange={handleChange}
              name="modovlanpon7"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          {/*********** PON-8 /**********/}
          <div className="pon-config">
            <h5>PON 8</h5>
            <label>Vlan ID </label>
            <input
              type="number"
              value={values.vlanpon8}
              onChange={handleChange}
              name="vlanpon8"
            />
            <label>Uplink </label>
            <select
              value={values.uplinkpon8}
              onChange={handleChange}
              name="uplinkpon8"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon8}
              onChange={handleChange}
              name="bridgepon8"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon8}
              onChange={handleChange}
              name="modovlanpon8"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>
        </div>

        {/************ Modo das ONUs ************/}

        <div className="cpe-container">
          <div className="cpe-modes">
            <h5>ONU R1</h5>
            <label>Modo</label>
            <select value={values.R1Mode} onChange={handleChange} name="R1Mode">
              <option value="bridge">bridge</option>
              <option value="router">router</option>
            </select>
          </div>

          <div className="cpe-modes">
            <h5>ONU 110</h5>
            <label>Modo</label>
            <select value={values.giMode} onChange={handleChange} name="giMode">
              <option value="bridge">bridge</option>
              <option value="router">router</option>
            </select>
          </div>

          <div className="cpe-modes">
            <h5>Default</h5>
            <label>Modo</label>
            <select
              value={values.defaultMode}
              onChange={handleChange}
              name="defaultMode"
            >
              <option value="bridge">bridge</option>
              <option value="router">router</option>
            </select>
          </div>
        </div>

        <div className="tabs-container">
          <a onClick={Hide}>
            <div className="config-auto-service">
              Configurações do Auto-Service
            </div>
          </a>
          <a onClick={Show}>
            <div className="remove-auto-service">
              Remover Configuração Padrão
            </div>
          </a>
        </div>

        {showElement ? (
          <div className="commands">
            <div id="config1">
              <p>bridge-profile delete gpon1-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon2-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon3-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon4-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon5-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon6-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon7-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon8-default</p>
              <p>yes</p>
              <p>bridge-profile delete gpon1-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon2-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon3-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon4-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon5-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon6-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon7-default-router</p>
              <p>yes</p>
              <p>bridge-profile delete gpon8-default-router</p>
              <p>yes</p>
              <p>auto-service disable</p>
              <p>yes</p>
              <p>onu set noauto</p>
              <p>yes</p>
            </div>
            <div
              className="copybutton"
              onClick={() => copyToClip(document.getElementById('config1').innerText)}>
              {buttonText}
            </div>
          </div>
        ) : (
          <div className="commands">
            <div id="config2">
              <p>
                bridge add <span>{values.uplinkpon1}</span>{' '}
                <span>{values.bridgepon1}</span> vlan{' '}
                <span>{values.vlanpon1}</span> <span>{values.modovlanpon1}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon2}</span>{' '}
                <span>{values.bridgepon2}</span> vlan{' '}
                <span>{values.vlanpon2}</span> <span>{values.modovlanpon2}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon3}</span>{' '}
                <span>{values.bridgepon3}</span> vlan{' '}
                <span>{values.vlanpon3}</span>{' '}
                <span>{values.modovlanpon3}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon4}</span>{' '}
                <span>{values.bridgepon4}</span> vlan{' '}
                <span>{values.vlanpon4}</span>{' '}
                <span>{values.modovlanpon4}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon5}</span>{' '}
                <span>{values.bridgepon5}</span> vlan{' '}
                <span>{values.vlanpon5}</span>{' '}
                <span>{values.modovlanpon5}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon6}</span>{' '}
                <span>{values.bridgepon6}</span> vlan{' '}
                <span>{values.vlanpon6}</span>{' '}
                <span>{values.modovlanpon6}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon7}</span>{' '}
                <span>{values.bridgepon7}</span> vlan{' '}
                <span>{values.vlanpon7}</span>{' '}
                <span>{values.modovlanpon7}</span>
              </p>
              <p>
                bridge add <span>{values.uplinkpon8}</span>{' '}
                <span>{values.bridgepon8}</span> vlan{' '}
                <span>{values.vlanpon8}</span>{' '}
                <span>{values.modovlanpon8}</span>
              </p>
              <p>
                bridge-profile add gpon1-default{' '}
                <span>{bridgeAjustepon1()}</span> vlan{' '}
                <span>{values.vlanpon1}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon2-default{' '}
                <span>{bridgeAjustepon2()}</span> vlan{' '}
                <span>{values.vlanpon2}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon3-default{' '}
                <span>{bridgeAjustepon3()}</span> vlan{' '}
                <span>{values.vlanpon3}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon4-default{' '}
                <span>{bridgeAjustepon4()}</span> vlan{' '}
                <span>{values.vlanpon4}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon5-default{' '}
                <span>{bridgeAjustepon5()}</span> vlan{' '}
                <span>{values.vlanpon5}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon6-default{' '}
                <span>{bridgeAjustepon6()}</span> vlan{' '}
                <span>{values.vlanpon6}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon7-default{' '}
                <span>{bridgeAjustepon7()}</span> vlan{' '}
                <span>{values.vlanpon7}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon8-default{' '}
                <span>{bridgeAjustepon8()}</span> vlan{' '}
                <span>{values.vlanpon8}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add gpon1-default-router{' '}
                <span>{bridgeAjustepon1()}</span> vlan 101 tagged router
              </p>
              <p>
                bridge-profile add gpon2-default-router{' '}
                <span>{bridgeAjustepon2()}</span> vlan 102 tagged router
              </p>
              <p>
                bridge-profile add gpon3-default-router{' '}
                <span>{bridgeAjustepon3()}</span> vlan 103 tagged router
              </p>
              <p>
                bridge-profile add gpon4-default-router{' '}
                <span>{bridgeAjustepon4()}</span> vlan 104 tagged router
              </p>
              <p>
                bridge-profile add gpon5-default-router{' '}
                <span>{bridgeAjustepon5()}</span> vlan 105 tagged router
              </p>
              <p>
                bridge-profile add gpon6-default-router{' '}
                <span>{bridgeAjustepon6()}</span> vlan 106 tagged router
              </p>
              <p>
                bridge-profile add gpon7-default-router{' '}
                <span>{bridgeAjustepon7()}</span> vlan 107 tagged router
              </p>
              <p>
                bridge-profile add gpon8-default-router{' '}
                <span>{bridgeAjustepon8()}</span> vlan 108 tagged router
              </p>
              <p>
                bridge-profile bind add gpon1-<span>{gimode()}</span> device
                intelbras-110 gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default device intelbras-110b gpon
                1
              </p>
              <p>
                bridge-profile bind add gpon1-default device intelbras-110g gpon
                1
              </p>
              <p>
                bridge-profile bind add gpon1-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-<span>{r1mode()}</span> device
                intelbras-r1 gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-121w gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-142ng gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-142nw gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-1420g gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-121ac gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-1200r gpon 1
              </p>
              <p>
                bridge-profile bind add gpon1-default-router device
                intelbras-120ac gpon 1
              </p>
              <p>
                bridge-profile bind add gpon2-<span>{gimode()}</span> device
                intelbras-110 gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default device intelbras-110b gpon
                2
              </p>
              <p>
                bridge-profile bind add gpon2-default device intelbras-110g gpon
                2
              </p>
              <p>
                bridge-profile bind add gpon2-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-<span>{r1mode()}</span> device
                intelbras-r1 gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-121w gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-142ng gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-142nw gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-1420g gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-121ac gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-120ac gpon 2
              </p>
              <p>
                bridge-profile bind add gpon2-default-router device
                intelbras-1200r gpon 2
              </p>
              <p>
                bridge-profile bind add gpon3-<span>{gimode()}</span> device
                intelbras-110 gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default device intelbras-110b gpon
                3
              </p>
              <p>
                bridge-profile bind add gpon3-default device intelbras-110g gpon
                3
              </p>
              <p>
                bridge-profile bind add gpon3-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-<span>{r1mode()}</span> device
                intelbras-r1 gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-121w gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-142ng gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-142nw gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-1420g gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-121ac gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-120ac gpon 3
              </p>
              <p>
                bridge-profile bind add gpon3-default-router device
                intelbras-1200r gpon 3
              </p>
              <p>
                bridge-profile bind add gpon4-<span>{gimode()}</span> device
                intelbras-110 gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default device intelbras-110b gpon
                4
              </p>
              <p>
                bridge-profile bind add gpon4-default device intelbras-110g gpon
                4
              </p>
              <p>
                bridge-profile bind add gpon4-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-<span>{r1mode()}</span> device
                intelbras-r1 gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-121w gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-142ng gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-142nw gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-1420g gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-121ac gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-120ac gpon 4
              </p>
              <p>
                bridge-profile bind add gpon4-default-router device
                intelbras-1200r gpon 4
              </p>
              <p>
                bridge-profile bind add gpon5-<span>{gimode()}</span> device
                intelbras-110 gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default device intelbras-110b gpon
                5
              </p>
              <p>
                bridge-profile bind add gpon5-default device intelbras-110g gpon
                5
              </p>
              <p>
                bridge-profile bind add gpon5-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-<span>{r1mode()}</span> device
                intelbras-r1 gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-121w gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-142ng gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-142nw gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-1420g gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-121ac gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-120ac gpon 5
              </p>
              <p>
                bridge-profile bind add gpon5-default-router device
                intelbras-1200r gpon 5
              </p>
              <p>
                bridge-profile bind add gpon6-<span>{gimode()}</span> device
                intelbras-110 gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default device intelbras-110b gpon
                6
              </p>
              <p>
                bridge-profile bind add gpon6-default device intelbras-110g gpon
                6
              </p>
              <p>
                bridge-profile bind add gpon6-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-<span>{r1mode()}</span> device
                intelbras-r1 gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-121w gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-142ng gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-142nw gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-1420g gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-121ac gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-120ac gpon 6
              </p>
              <p>
                bridge-profile bind add gpon6-default-router device
                intelbras-1200r gpon 6
              </p>
              <p>
                bridge-profile bind add gpon7-<span>{gimode()}</span> device
                intelbras-110 gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default device intelbras-110b gpon
                7
              </p>
              <p>
                bridge-profile bind add gpon7-default device intelbras-110g gpon
                7
              </p>
              <p>
                bridge-profile bind add gpon7-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-<span>{r1mode()}</span> device
                intelbras-r1 gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-121w gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-142ng gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-142nw gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-1420g gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-121ac gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-120ac gpon 7
              </p>
              <p>
                bridge-profile bind add gpon7-default-router device
                intelbras-1200r gpon 7
              </p>
              <p>
                bridge-profile bind add gpon8-<span>{gimode()}</span> device
                intelbras-110 gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default device intelbras-110b gpon
                8
              </p>
              <p>
                bridge-profile bind add gpon8-default device intelbras-110g gpon
                8
              </p>
              <p>
                bridge-profile bind add gpon8-<span>{defaultmode()}</span>{' '}
                device intelbras-default gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-<span>{r1mode()}</span> device
                intelbras-r1 gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-121w gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-142ng gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-142nw gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-1420g gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-121ac gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-120ac gpon 8
              </p>
              <p>
                bridge-profile bind add gpon8-default-router device
                intelbras-1200r gpon 8
              </p>
              <p>onu set auto</p>
              <p>auto-service enable</p>
              <p>yes</p>
              <p>onu show refresh</p>
            </div>
            <div
              className="copybutton"
              onClick={() => copyToClip(document.getElementById('config2').innerText)}>
              {buttonText}
            </div>
          </div>
        )}
      </div>

      {/* UMA VLAN */}
      <div id="umavlan-container">
        <h1 id="umavlan">APENAS UMA VLAN <button className='reset' onClick={() => setValues((initialValues))}>Limpar</button></h1>
        <h3>Define identificação da vlan, porta uplink, tipo da vlan e a bridge para todas as portas pons.</h3>
        <div className="cpe-container-uma-vlan">
          <div className="cpe-modes">
            <h5>TODAS AS PONS</h5>
            <label>Vlan ID</label>
            <input
              type="number"
              value={values.vlanpon1}
              onChange={handleChange}
              name="vlanpon1"
            />
            <label>Uplink</label>
            <select
              value={values.uplinkpon1}
              onChange={handleChange}
              name="uplinkpon1"
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
            <label>Bridge</label>
            <select
              value={values.bridgepon1}
              onChange={handleChange}
              name="bridgepon1"
            >
              <option value="uplink">uplink</option>
              <option value="intralink">intralink</option>
              <option value="tls">tls</option>
            </select>
            <label>Modo VLAN</label>
            <select
              value={values.modovlanpon1}
              onChange={handleChange}
              name="modovlanpon1"
            >
              <option value="tagged">tagged</option>
              <option value="untagged">untagged</option>
            </select>
          </div>

          <div className="cpe-modes-container">
            <div className="cpe-modes">
              <h5>ONU R1</h5>
              <label>Modo</label>
              <select
                value={values.R1Mode}
                onChange={handleChange}
                name="R1Mode"
              >
                <option value="bridge">bridge</option>
                <option value="router">router</option>
              </select>
            </div>
            <div className="cpe-modes">
              <h5>ONU 110</h5>
              <label>Modo</label>
              <select
                value={values.giMode}
                onChange={handleChange}
                name="giMode"
              >
                <option value="bridge">bridge</option>
                <option value="router">router</option>
              </select>
            </div>
            <div className="cpe-modes">
              <h5>Default</h5>
              <label>Modo</label>
              <select
                value={values.defaultMode}
                onChange={handleChange}
                name="defaultMode"
              >
                <option value="bridge">bridge</option>
                <option value="router">router</option>
              </select>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <a onClick={Hide}>
            <div className="config-auto-service">
              Configurações do Auto-Service
            </div>
          </a>
          <a onClick={Show}>
            <div className="remove-auto-service">Remover Configuração Padrão</div>
          </a>
        </div>

        {showElement ? (
          <div className="commands">
            <div id="config3">
              <p>bridge-profile delete default</p>
              <p> yes</p>
              <p>bridge-profile delete default-router</p>
              <p>yes</p>
              <p>auto-service disable</p>
              <p>yes</p>
              <p>onu set noauto</p>
              <p>yes</p>
            </div>
            <div
              className="copybutton"
              onClick={() =>
                copyToClip(document.getElementById('config3').innerText)}>
              {buttonText}
            </div>
          </div>
        ) : (
          <div className="commands">
            <div id="config4">
              <p>
                bridge add <span>{values.uplinkpon1}</span>{' '}
                <span>{values.bridgepon1}</span> vlan{' '}
                <span>{values.vlanpon1}</span>{' '}
                <span>{values.modovlanpon1}</span>
              </p>
              <p>
                bridge-profile add default downlink vlan{' '}
                <span>{values.vlanpon1}</span> tagged eth 1
              </p>
              <p>
                bridge-profile add default-router{' '}
                <span>{bridgeAjustepon1()}</span> vlan{' '}
                <span>{values.vlanpon1}</span> tagged router
              </p>
              <p>
                bridge-profile bind add <span>{gimode()}</span> device
                intelbras-110
              </p>
              <p>bridge-profile bind add default device intelbras-110b</p>
              <p>bridge-profile bind add default device intelbras-110g</p>
              <p>
                bridge-profile bind add <span>{defaultmode()}</span> device
                intelbras-default
              </p>
              <p>
                bridge-profile bind add <span>{r1mode()}</span> device
                intelbras-r1
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-121w
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-142ng
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-142nw
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-1420g
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-120ac
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-121ac
              </p>
              <p>
                bridge-profile bind add default-router device intelbras-1200r
              </p>
              <p>onu set auto</p>
              <p>auto-service enable</p>
              <p>yes</p>
              <p>onu show refresh</p>
            </div>
            <div
              className="copybutton"
              onClick={() =>
                copyToClip(document.getElementById('config4').innerText)}>
              {buttonText}
            </div>
          </div>
        )}
      </div>
    </section >
  );
}
