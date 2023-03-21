import { useState } from "react"

export const Contact = () => {

  return (
    <div style={{ padding: 84}}>
      <div>
        <span>Il Tuo nome</span>
        <input type="text" />
      </div>
      <div>
        <span>La tua e-mail</span>
        <input type="email" />
      </div>
      <div>
        <span>Cosa Mi Vuoi chiedere?</span>
        
      </div>
    </div>
  )
}