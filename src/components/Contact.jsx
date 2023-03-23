import { TextareaAutosize } from "@mui/material"
import { useState } from "react"

export const Contact = () => {

  return (
    <div style={{ padding: 84}}>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>Il Tuo nome</span></div>
          <div><input className="color1 background-color-3" style={{ marginTop: 8, outline: 'none', border: 'none', borderRadius: 5, height: 40, width: 314}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>La tua email</span></div>
          <div><input className="color1 background-color-3" style={{marginTop: 8, outline: 'none', border: 'none', borderRadius: 5, height: 40, width: 314}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>Cosa vuoi chiedermi?</span></div>
          <div>
            <TextareaAutosize
              style={{outline: 'none', border: 'none', fontSize: 14, borderRadius: 5, marginTop: 8, width: 314}}
              className="color1 background-color-3"
              color="neutral"
              disabled={false}
              maxRows={6}
              minRows={6}
              placeholder=""
              size="md"
              variant="plain"
            />
          </div>
        </div>      
      </div>
      <div style={{marginTop: 34, alignItems: 'center', display: 'flex', padding: 10}} >
        <button style={{ fontFamily: 'Rubik', borderRadius: 4, padding: 12.4, outline: 'none', border: 'none'}} className="background-color-2" >MANDA</button>
      </div>
    </div>
  )
}