import React from 'react'
import Style from './Aviso.module.css'

export default function header() {
  return (
    <div id="start" className={Style.container}>
      <div className={Style.aviso}>
        <p><b>Aviso:</b> A configuração automática de bridge só acontece para ONUs que estão sendo provisionadas automaticamente.</p>
        <p>Lembrem-se de ativá-la com o comando <span>onu set auto</span> (globalmente), antes de executarem o comando abaixo.</p>
      </div>
    </div >
  )
}