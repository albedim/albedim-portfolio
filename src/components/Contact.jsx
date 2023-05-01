import { TextareaAutosize } from "@mui/material"
import { useState } from "react"

export const Contact = () => {

  const [emailForm, setEmailForm] = useState({
    'name': '',
    'email': '',
    'body': ''
  })

  const handleEmailForm = (e) => {
    const newEmailForm = { ...emailForm }
    console.log(e.target.value)
    newEmailForm[e.target.name] = e.target.value
    setEmailForm(newEmailForm)
  }

  const sendMail = () => {

  }

  return (
    <div style={{padding: 84}}>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 16}}>What's your name</span></div>
          <div><input onChange={(e) => handleEmailForm(e)} value={emailForm.name} name="name" className="color1 background-color-3" style={{ fontSize: 18, paddingRight: 14, paddingLeft: 14, marginTop: 8, border: 'none', borderRadius: 5, height: 40, width: 304}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 16}}>What's your email</span></div>
          <div><input onChange={(e) => handleEmailForm(e)} value={emailForm.email} name="email"  className="color1 background-color-3" style={{ fontSize: 18, paddingRight: 14, paddingLeft: 14, marginTop: 8, border: 'none', borderRadius: 5, height: 40, width: 304}} type="text" /></div>
        </div>      
      </div>
      <div style={{alignItems: 'center', display: 'flex', padding: 10}}>
        <div>
          <div><span className="color1" style={{fontFamily: 'Rubik', fontSize: 16}}>What do yo want to ask me?</span></div>
          <div>
            <TextareaAutosize
              style={{ padding: 14, fontSize: 18, border: 'none', borderRadius: 5, marginTop: 8, width: 304}}
              onChange={(e) => handleEmailForm(e)} value={emailForm.body} name="body"
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
      {
        emailForm.name == "" || emailForm.email == "" || emailForm.body == "" ? (
          <div style={{marginTop: 34, alignItems: 'center', display: 'flex', padding: 10}} >
            <button style={{fontWeight: 500, color: '#0A192F', opacity: '40%', fontFamily: 'Rubik', borderRadius: 4, padding: 12.4, outline: 'none', border: 'none'}} className="background-color-2" >SEND</button>
          </div>
        ):(
          <div style={{marginTop: 34, alignItems: 'center', display: 'flex', padding: 10}} >
            <a href={"mailto:dimaio.albe@gmail.com?subject=Question&body=From: " + emailForm.name +", Email:" + emailForm.email + ", Body:" + emailForm.body}><button  onClick={(e) => sendMail()} style={{fontWeight: 500, color: '#0A192F', fontFamily: 'Rubik', borderRadius: 4, padding: 12.4, outline: 'none', border: 'none'}} className="background-color-2" >SEND</button></a>
          </div>
        )
      }
    </div>
  )
}