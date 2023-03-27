import { IonIcon } from "react-ion-icon"

export const WhoAmI = () => {
  return(
    <>
    <div className="w-mobile" style={{padding: 34}}>
      <div>
        <div><h2 className='' style={{ color: 'white', fontWeight: 700, fontFamily: 'Rubik', fontSize: 28, textAlign: 'left' }}>Who am I ?</h2></div>
        <div style={{paddingBottom: 24, borderBottom: "1px solid white", marginTop: 44}}>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>I'm <span className="color2" >albedim</span> 😄</h2></div>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>⚡I'm Full stack Developer, I am a curious and creative person who likes learning</h2></div>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>⚡I usually work with Java (Spring Boot), Javascript (React JS, React native), Python (Flask) and MySQL</h2></div>
          <div style={{paddingTop: 14, width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>I have always loved being good at something and study to improve my skills. So when i was 16, I started studiyng programming and i have created many apps and services.</h2></div>
        </div>
        <div style={{display: 'flex', paddingTop: 14}}>
          <span className='color1' style={{width: 34, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}><IonIcon name='location-outline' /></span><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>Naples, Italy</h2>
        </div>
      </div>
    </div>
    <div className="w-pc" style={{width: 540, padding: 34}}>
      <div>
        <div ><h2 className='' style={{ color: 'white', fontWeight: 700, fontFamily: 'Rubik', fontSize: 28, textAlign: 'left' }}>Who am I ?</h2></div>
        <div style={{paddingBottom: 24, borderBottom: "1px solid white", marginTop: 44}}>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>I'm <span className="color2" >albedim</span> 😄</h2></div>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>⚡I'm Full stack Developer, I am such a curious and creative person who likes learning</h2></div>
          <div style={{width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>⚡I usually work with Java (Spring Boot), Javascript (React JS, React native), Python (Flask), MySQL & MongoDB</h2></div>
          <div style={{paddingTop: 14, width: 'auto'}} ><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>I have always loved studying my favourite topics by my self and improving my skills. So when i was 16, I started studiyng programming and i have created many apps and services.</h2></div>
        </div>
        <div style={{display: 'flex', paddingTop: 14}}>
          <span className='color1' style={{width: 34, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}><IonIcon name='location-outline' /></span><h2 className='color1' style={{ fontWeight: 500, fontFamily: 'Rubik', fontSize: 16, textAlign: 'left' }}>Naples, Italy</h2>
        </div>
      </div>
    </div>
    </>
  )
}