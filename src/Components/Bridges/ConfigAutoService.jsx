import React from 'react'
import Style from './ConfigAutoService.module.css'
import ValueContext from "../../js/ValueContext";
import copyToClip from "../../js/BtnCopy";

export default function ConfigAutoService() {
  const { selected, values } = React.useContext(ValueContext);

  function BridgeChangepon1() {
    if (values.bridgepon1 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon2() {
    if (values.bridgepon2 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon3() {
    if (values.bridgepon3 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon4() {
    if (values.bridgepon4 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon5() {
    if (values.bridgepon5 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon6() {
    if (values.bridgepon6 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon7() {
    if (values.bridgepon7 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
  function BridgeChangepon8() {
    if (values.bridgepon8 == 'tls') {
      return 'tls';
    } else {
      return 'downlink';
    }
  }
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


  return (
    <div className={Style.container}>
      <h2> CONFIGURAÇÕES DO AUTO-SERVICE</h2>
      <div className={Style.content}>
        {selected ?
          <>
            <code id="bridgeadd" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bridgeadd').innerText)
            }>
              <pre>bridge add {values.uplinkpon1} {values.bridgepon1} vlan {values.vlanpon1} {values.modovlanpon1}</pre>
              <pre>bridge add {values.uplinkpon2} {values.bridgepon2} vlan {values.vlanpon2} {values.modovlanpon2}</pre>
              <pre>bridge add {values.uplinkpon3} {values.bridgepon3} vlan {values.vlanpon3} {values.modovlanpon3}</pre>
              <pre>bridge add {values.uplinkpon4} {values.bridgepon4} vlan {values.vlanpon4} {values.modovlanpon4}</pre>
              <pre>bridge add {values.uplinkpon5} {values.bridgepon5} vlan {values.vlanpon5} {values.modovlanpon5}</pre>
              <pre>bridge add {values.uplinkpon6} {values.bridgepon6} vlan {values.vlanpon6} {values.modovlanpon6}</pre>
              <pre>bridge add {values.uplinkpon7} {values.bridgepon7} vlan {values.vlanpon7} {values.modovlanpon7}</pre>
              <pre>bridge add {values.uplinkpon8} {values.bridgepon8} vlan {values.vlanpon8} {values.modovlanpon8}</pre>
            </code>
            <hr />
            <code id="bridgeprofiledefault" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bridgeprofiledefault').innerText)
            }>
              <pre>bridge-profile add gpon1-default {BridgeChangepon1()} vlan {values.vlanpon1} tagged eth 1</pre>
              <pre>bridge-profile add gpon2-default {BridgeChangepon2()} vlan {values.vlanpon2} tagged eth 1</pre>
              <pre>bridge-profile add gpon3-default {BridgeChangepon3()} vlan {values.vlanpon3} tagged eth 1</pre>
              <pre>bridge-profile add gpon4-default {BridgeChangepon4()} vlan {values.vlanpon4} tagged eth 1</pre>
              <pre>bridge-profile add gpon5-default {BridgeChangepon5()} vlan {values.vlanpon5} tagged eth 1</pre>
              <pre>bridge-profile add gpon6-default {BridgeChangepon6()} vlan {values.vlanpon6} tagged eth 1</pre>
              <pre>bridge-profile add gpon7-default {BridgeChangepon7()} vlan {values.vlanpon7} tagged eth 1</pre>
              <pre>bridge-profile add gpon8-default {BridgeChangepon8()} vlan {values.vlanpon8} tagged eth 1</pre>
            </code>
            <hr />
            <code id="bridgeprofilerouter" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bridgeprofilerouter').innerText)
            }>
              <pre>bridge-profile add gpon1-default-router {BridgeChangepon1()} vlan {values.vlanpon1} tagged router</pre>
              <pre>bridge-profile add gpon2-default-router {BridgeChangepon2()} vlan {values.vlanpon2} tagged router</pre>
              <pre>bridge-profile add gpon3-default-router {BridgeChangepon3()} vlan {values.vlanpon3} tagged router</pre>
              <pre>bridge-profile add gpon4-default-router {BridgeChangepon4()} vlan {values.vlanpon4} tagged router</pre>
              <pre>bridge-profile add gpon5-default-router {BridgeChangepon5()} vlan {values.vlanpon5} tagged router</pre>
              <pre>bridge-profile add gpon6-default-router {BridgeChangepon6()} vlan {values.vlanpon6} tagged router</pre>
              <pre>bridge-profile add gpon7-default-router {BridgeChangepon7()} vlan {values.vlanpon7} tagged router</pre>
              <pre>bridge-profile add gpon8-default-router {BridgeChangepon8()} vlan {values.vlanpon8} tagged router</pre>
            </code>
            <hr />
            <code id="bindgpon1" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon1').innerText)
            }>
              <pre>bridge-profile bind add gpon1-{gimode()} device intelbras-110 gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default device intelbras-110b gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default device intelbras-110g gpon 1</pre>
              <pre>bridge-profile bind add gpon1-{defaultmode()} device intelbras-default gpon 1</pre>
              <pre>bridge-profile bind add gpon1-{r1mode()} device intelbras-r1 gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-121w gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-142ng gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-142nw gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-1420g gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-121ac gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-1200r gpon 1</pre>
              <pre>bridge-profile bind add gpon1-default-router device intelbras-120ac gpon 1</pre>
            </code>
            <hr />
            <code id="bindgpon2" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon2').innerText)
            }>
              <pre>bridge-profile bind add gpon2-{gimode()} device intelbras-110 gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default device intelbras-110b gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default device intelbras-110g gpon 2</pre>
              <pre>bridge-profile bind add gpon2-{defaultmode()} device intelbras-default gpon 2</pre>
              <pre>bridge-profile bind add gpon2-{r1mode()} device intelbras-r1 gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-121w gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-142ng gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-142nw gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-1420g gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-121ac gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-1200r gpon 2</pre>
              <pre>bridge-profile bind add gpon2-default-router device intelbras-120ac gpon 2</pre>
            </code>
            <hr />
            <code id="bindgpon3" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon3').innerText)
            }>
              <pre>bridge-profile bind add gpon3-{gimode()} device intelbras-110 gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default device intelbras-110b gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default device intelbras-110g gpon 3</pre>
              <pre>bridge-profile bind add gpon3-{defaultmode()} device intelbras-default gpon 3</pre>
              <pre>bridge-profile bind add gpon3-{r1mode()} device intelbras-r1 gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-121w gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-142ng gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-142nw gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-1420g gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-121ac gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-1200r gpon 3</pre>
              <pre>bridge-profile bind add gpon3-default-router device intelbras-120ac gpon 3</pre>
            </code>
            <hr />
            <code id="bindgpon4" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon4').innerText)
            }>
              <pre>bridge-profile bind add gpon4-{gimode()} device intelbras-110 gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default device intelbras-110b gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default device intelbras-110g gpon 4</pre>
              <pre>bridge-profile bind add gpon4-{defaultmode()} device intelbras-default gpon 4</pre>
              <pre>bridge-profile bind add gpon4-{r1mode()} device intelbras-r1 gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-121w gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-142ng gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-142nw gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-1420g gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-121ac gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-1200r gpon 4</pre>
              <pre>bridge-profile bind add gpon4-default-router device intelbras-120ac gpon 4</pre>
            </code>
            <hr />
            <code id="bindgpon5" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon5').innerText)
            }>
              <pre>bridge-profile bind add gpon5-{gimode()} device intelbras-110 gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default device intelbras-110b gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default device intelbras-110g gpon 5</pre>
              <pre>bridge-profile bind add gpon5-{defaultmode()} device intelbras-default gpon 5</pre>
              <pre>bridge-profile bind add gpon5-{r1mode()} device intelbras-r1 gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-121w gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-142ng gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-142nw gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-1420g gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-121ac gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-1200r gpon 5</pre>
              <pre>bridge-profile bind add gpon5-default-router device intelbras-120ac gpon 5</pre>
            </code>
            <hr />
            <code id="bindgpon6" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon6').innerText)
            }>
              <pre>bridge-profile bind add gpon6-{gimode()} device intelbras-110 gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default device intelbras-110b gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default device intelbras-110g gpon 6</pre>
              <pre>bridge-profile bind add gpon6-{defaultmode()} device intelbras-default gpon 6</pre>
              <pre>bridge-profile bind add gpon6-{r1mode()} device intelbras-r1 gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-121w gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-142ng gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-142nw gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-1420g gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-121ac gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-1200r gpon 6</pre>
              <pre>bridge-profile bind add gpon6-default-router device intelbras-120ac gpon 6</pre>
            </code>
            <hr />
            <code id="bindgpon7" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon7').innerText)
            }>
              <pre>bridge-profile bind add gpon7-{gimode()} device intelbras-110 gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default device intelbras-110b gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default device intelbras-110g gpon 7</pre>
              <pre>bridge-profile bind add gpon7-{defaultmode()} device intelbras-default gpon 7</pre>
              <pre>bridge-profile bind add gpon7-{r1mode()} device intelbras-r1 gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-121w gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-142ng gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-142nw gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-1420g gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-121ac gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-1200r gpon 7</pre>
              <pre>bridge-profile bind add gpon7-default-router device intelbras-120ac gpon 7</pre>
            </code>
            <hr />
            <code id="bindgpon8" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('bindgpon8').innerText)
            }>
              <pre>bridge-profile bind add gpon8-{gimode()} device intelbras-110 gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default device intelbras-110b gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default device intelbras-110g gpon 8</pre>
              <pre>bridge-profile bind add gpon8-{defaultmode()} device intelbras-default gpon 8</pre>
              <pre>bridge-profile bind add gpon8-{r1mode()} device intelbras-r1 gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-121w gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-142ng gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-142nw gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-1420g gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-121ac gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-1200r gpon 8</pre>
              <pre>bridge-profile bind add gpon8-default-router device intelbras-120ac gpon 8</pre>
            </code>
            <hr />
            <code id="onuset" className={Style.code} onClick={() =>
              copyToClip(document.getElementById('onuset').innerText)
            }>
              <pre>onu set auto</pre>
              <pre>auto-service enable</pre>
              <pre>yes</pre>
              <pre>onu show refresh</pre>
            </code>
          </>
          :
          <code id="bridgeaddumavlan" className={Style.code} onClick={() =>
            copyToClip(document.getElementById('bridgeaddumavlan').innerText)
          }>
            <pre>bridge add {values.uplinkpon1} {values.bridgepon1} vlan {values.vlanpon1} {values.modovlanpon1}</pre>
            <pre>bridge-profile add default downlink vlan {values.vlanpon1} tagged eth 1</pre>
            <pre>bridge-profile add default-router downlink vlan {values.vlanpon1} tagged router</pre>
            <pre>bridge-profile bind add {gimode()} device intelbras-110</pre>
            <pre>bridge-profile bind add default device intelbras-110b</pre>
            <pre>bridge-profile bind add default device intelbras-110g</pre>
            <pre>bridge-profile bind add {defaultmode()} device intelbras-default</pre>
            <pre>bridge-profile bind add {r1mode()} device intelbras-r1</pre>
            <pre>bridge-profile bind add default-router device intelbras-121w </pre>
            <pre>bridge-profile bind add default-router device intelbras-142ng</pre>
            <pre>bridge-profile bind add default-router device intelbras-142nw</pre>
            <pre>bridge-profile bind add default-router device intelbras-1420g</pre>
            <pre>bridge-profile bind add default-router device intelbras-120ac</pre>
            <pre>bridge-profile bind add default-router device intelbras-121ac</pre>
            <pre>bridge-profile bind add default-router device intelbras-1200r</pre>
            <pre>onu set auto</pre>
            <pre>auto-service enable</pre>
            <pre>yes</pre>
            <pre>onu show refresh</pre>
          </code>
        }
      </div>
    </div >
  )
}