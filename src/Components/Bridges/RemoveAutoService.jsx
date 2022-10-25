import React from 'react'
import Style from './ConfigAutoService.module.css'
import ValueContext from "../../js/ValueContext";
import copyToClip from "../../js/BtnCopy";

export default function RemoveAutoService() {

  const { selected } = React.useContext(ValueContext);

  return (
    <div className={Style.containerRemove}>
      <h2> REMOÇÃO DO AUTO-SERVICE</h2>
      <div className={Style.content}>
        {selected ?
          <>
            <code id="linerouter1" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('linerouter1').innerText)
            }>

              <pre>bridge-profile delete gpon1-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon2-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon3-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon4-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon5-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon6-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon7-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon8-default</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon1-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon2-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon3-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon4-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon5-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon6-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon7-default-router</pre>
              <pre>yes</pre>
              <pre>bridge-profile delete gpon8-default-router</pre>
              <pre>yes</pre>
              <pre>auto-service disable</pre>
              <pre>yes</pre>
              <pre>onu set noauto</pre>
              <pre>yes</pre>
            </code>
          </>
          : <code id="linerouter1" className={Style.code} onClick={() =>
            copyToClip(document.getElementById('linerouter1').innerText)
          }>
            <pre>bridge-profile delete default</pre>
            <pre>yes</pre>
            <pre>bridge-profile delete default-router</pre>
            <pre>yes</pre>
            <pre>auto-service disable</pre>
            <pre>yes</pre>
            <pre>onu set noauto</pre>
            <pre>yes</pre>
          </code>
        }

      </div>
    </div >
  )
}