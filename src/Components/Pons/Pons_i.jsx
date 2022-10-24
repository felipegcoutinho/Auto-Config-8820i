import React from 'react';
import Style from './Pons_i.module.css';
import ValueContext from "../../js/ValueContext";
import { UplinkOptions, BridgeOptions, ModoVlanOptions, OnuOptions } from '../../js/Options';

export default function Pons_i() {
  const { values, handleChange, selected } = React.useContext(ValueContext);

  return (
    <div className={Style.container}>
      {selected ? <h2> UMA VLAN POR PORTA PON</h2> : <h2> APENAS UMA VLAN</h2>}
      <form className={Style.content} onChange={handleChange} >
        <div className={Style.pons}>
          {selected ? <Vlan name="vlanpon1" defaultValue={values.vlanpon1} title="PON 1" />
            : <Vlan name="vlanpon1" defaultValue={values.vlanpon1} title="Todas as PONs" />
          }
          <Uplink name="uplinkpon1" defaultValue={values.uplinkpon1} />
          <Bridge name="bridgepon1" defaultValue={values.bridgepon1} />
          <ModoVlan name="modovlanpon1" defaultValue={values.modovlanpon1} />
        </div>
        {selected && (
          <>
            <div className={Style.pons}>
              <Vlan name="vlanpon2" defaultValue={values.vlanpon2} title="PON 2" />
              <Uplink name="uplinkpon2" defaultValue={values.uplinkpon2} />
              <Bridge name="bridgepon2" defaultValue={values.bridgepon2} />
              <ModoVlan name="modovlanpon2" defaultValue={values.modovlanpon2} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon3" defaultValue={values.vlanpon3} title="PON 3" />
              <Uplink name="uplinkpon3" defaultValue={values.uplinkpon3} />
              <Bridge name="bridgepon3" defaultValue={values.bridgepon3} />
              <ModoVlan name="modovlanpon3" defaultValue={values.modovlanpon3} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon4" defaultValue={values.vlanpon4} title="PON 4" />
              <Uplink name="uplinkpon4" defaultValue={values.uplinkpon4} />
              <Bridge name="bridgepon4" defaultValue={values.bridgepon4} />
              <ModoVlan name="modovlanpon4" defaultValue={values.modovlanpon4} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon5" defaultValue={values.vlanpon5} title="PON 5" />
              <Uplink name="uplinkpon5" defaultValue={values.uplinkpon5} />
              <Bridge name="bridgepon5" defaultValue={values.bridgepon5} />
              <ModoVlan name="modovlanpon5" defaultValue={values.modovlanpon5} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon6" defaultValue={values.vlanpon6} title="PON 6" />
              <Uplink name="uplinkpon6" defaultValue={values.uplinkpon6} />
              <Bridge name="bridgepon6" defaultValue={values.bridgepon6} />
              <ModoVlan name="modovlanpon6" defaultValue={values.modovlanpon6} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon7" defaultValue={values.vlanpon7} title="PON 7" />
              <Uplink name="uplinkpon7" defaultValue={values.uplinkpon7} />
              <Bridge name="bridgepon7" defaultValue={values.bridgepon7} />
              <ModoVlan name="modovlanpon7" defaultValue={values.modovlanpon7} />
            </div>
            <div className={Style.pons}>
              <Vlan name="vlanpon8" defaultValue={values.vlanpon8} title="PON 8" />
              <Uplink name="uplinkpon8" defaultValue={values.uplinkpon8} />
              <Bridge name="bridgepon8" defaultValue={values.bridgepon8} />
              <ModoVlan name="modovlanpon8" defaultValue={values.modovlanpon8} />
            </div>
          </>
        )}
        <div className={Style.contentOnus}>
          <div className={Style.pons}>
            <Onus name="R1Mode" defaultValue={values.R1Mode} title="ONU R1" />
          </div>
          <div className={Style.pons}>
            <Onus name="giMode" defaultValue={values.giMode} title="ONU 110" />
          </div>
          <div className={Style.pons}>
            <Onus name="defaultMode" defaultValue={values.defaultMode} title="Default" />
          </div>
        </div>
      </form>
    </div >
  )
}

function Onus({ handleChange, ...props }) {
  return (
    <>
      <h5 className={Style.h5}>{props.title}</h5>
      <label>Modo de Operação</label>
      <select onChange={handleChange} {...props} >
        {OnuOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}


function Vlan({ handleChange, ...props }) {
  return (
    <>
      <h5 className={Style.h5}>{props.title}</h5>
      <label>Vlan ID</label>
      <input type="number" onChange={handleChange} {...props} />
    </>
  )
}

function Uplink({ handleChange, ...props }) {
  return (
    <>
      <label>Uplink</label>
      <select onChange={handleChange} {...props} >
        {UplinkOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}
function Bridge({ handleChange, ...props }) {
  return (
    <>
      <label>Bridge</label>
      <select onChange={handleChange} {...props}>
        {BridgeOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}

function ModoVlan({ handleChange, ...props }) {
  return (
    <>
      <label>Modo Vlan</label>
      <select onChange={handleChange} {...props}>
        {ModoVlanOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  )
}