import { useEffect, useState } from 'react'
import { IonIcon } from 'react-ion-icon'
import { TypeAnimation } from 'react-type-animation'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Skills } from './Skills'
import './styles/style.css'
import { WhoAmI } from './WhoAmI'
import { Works } from './Works'

export const Home = () => {

  const [buttonDisplay, setButtonDisplay] = useState("none")

  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setButtonDisplay("block")
    }, 3400);
    setInterval(() => {
      setScrollValue(window.screenY)
    }, 1000);
  }, [])

  const [status, setStatus] = useState(false)

  return (
    <>
      <div style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#0A192F', height: '100vh', width: '100vw', display: 'flex' }}>
        <div>
          <div><h2 className='color1' style={{ fontFamily: 'Rubik', fontSize: 34, textAlign: 'center' }}><span className="color2">Hey, </span>I'm Alberto Di Maio</h2></div>
          <div style={{ marginTop: 38 }}>
            <TypeAnimation
              className='color1' style={{ fontFamily: 'Rubik', fontSize: 18, textAlign: 'left' }}
              sequence={[
                "My mom says I'm the best dev in my condo", // Types 'One'
                2400, // Waits 1s
                "",
                1000,
                () => {
                  return // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <div style={{ marginTop: 38, height: 140, alignItems: 'center', justifyContent: 'space-around', display: 'flex' }}>
            <button onClick={(e) => { setStatus(true); setTimeout(() => { window.scrollTo(0, 834) }, 100) }} className='background-color-2' style={{ borderBottomLeftRadius: 4, borderTopRightRadius: 4, outline: 'none', border: 'none', fontFamily: 'Rubik', cursor: 'pointer', paddingRight: 34, paddingLeft: 34, paddingBottom: 14, paddingTop: 14, display: buttonDisplay }}>More</button>
          </div>
        </div>
      </div>
      {
        status ? (
          <>
            <div style={{ justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw', display: 'flex' }}>
              <div style={{ backgroundColor: '#0A192F', width: '100vw' }}>
                <div style={{ height: 64, justifyContent: 'space-around', display: 'flex' }} >
                  <div style={{ height: 74, borderBottom: "4px solid #6FF9DA" }} >
                    <h2 style={{ fontFamily: 'Rubik', color: 'white', fontSize: 30 }}>About</h2>
                  </div>
                </div>
                <div className='flex-block' style={{ marginTop: 74, justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw'}}>
                  <div>
                    <WhoAmI />
                  </div>
                  <div>
                    <Skills />
                  </div>
                </div>
              </div>
            </div>
            <div style={{justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw', display: 'flex' }}>
              <div style={{marginTop: 84, width: '100vw' }}>
                <div style={{ height: 64, justifyContent: 'space-around', display: 'flex' }} >
                  <div style={{height: 74, borderBottom: "4px solid #6FF9DA" }} >
                    <h2 style={{fontFamily: 'Rubik', color: 'white', fontSize: 30 }}>Works</h2>
                  </div>
                </div>
                <div style={{marginTop: 74, justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw', display: 'flex' }}>
                  <div className="flex-wrap-box" style={{padding: 84, flexWrap: 'wrap' }}>
                    <Works />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 600, justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw', display: 'flex' }}>
              <div style={{ backgroundColor: '#0A192F', height: '100vh', width: '100vw' }}>
                <div style={{ height: 64, justifyContent: 'space-around', display: 'flex' }} >
                  <div style={{ height: 74, borderBottom: "4px solid #6FF9DA" }} >
                    <h2 style={{ fontFamily: 'Rubik', color: 'white', fontSize: 30 }}>Contact me</h2>
                  </div>
                </div>
                <div style={{ marginTop: 34, justifyContent: 'space-around', backgroundColor: '#0A192F', width: '100vw', display: 'flex' }}>
                  <Contact />
                </div>
              </div>
            </div>
            <div style={{backgroundColor: '#0A192F' }}>
              <Footer/>
            </div>
          </>
        ) : (
          <></>
        )
      }
    </>
  );
}