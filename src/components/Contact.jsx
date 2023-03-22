import { TextareaAutosize } from "@mui/material"
import { useState } from "react"

export const Contact = () => {

  return (
    <div style={{ padding: 84}}>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>Il Tuo nome</span></div>
          <div><input style={{marginTop: 8, outline: 'none', border: 'none', borderRadius: 5, height: 40, width: 314}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>La tua email</span></div>
          <div><input style={{marginTop: 8, outline: 'none', border: 'none', borderRadius: 5, height: 40, width: 314}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 14}}>Cosa vuoi chiedermi?</span></div>
          <div>
            <TextareaAutosize
              style={{fontSize: 14, borderRadius: 5, marginTop: 8, width: 314}}
              color="neutral"
              disabled={false}
              minRows={6}
              placeholder=""
              size="md"
              variant="plain"
            />
          </div>
        </div>      
      </div>
    </div>
  )
}