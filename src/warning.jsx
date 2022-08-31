import React from 'react'

export default function warning() {
  return (
    <div className='warning'>
      <p><b>Aviso:</b> A configuração automática de bridge só acontece para ONUs que estão sendo provisionadas automaticamente.</p>
      <p>Lembrem-se de ativá-la com o comando <span>onu set auto</span> (globalmente), antes de executarem o comando abaixo.</p>
    </div>
  )
}
