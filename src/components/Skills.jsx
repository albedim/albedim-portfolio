import { useEffect, useState } from "react";

export const Skills = () => {

  const [skills, setSkills] = useState([
    { label: "Python (Flask)", value: "78%" },
    { label: "Java (Spring)", value: "74%" },
    { label: "Node JS", value: "54%" },
    { label: "PHP", value: "43%" },
    { label: "MySQL", value: "64%" },
    { label: "MongoDB", value: "54%" },
    { label: "React JS", value: "64%" },
    { label: "React Native", value: "40%" },
  ])

  const [width, setWidth] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setWidth(true)
    }, 540);
  })

  return (
    <>
      <div className="w-mobile" style={{ padding: 34 }}>
        <div >
          <div><h2 className='' style={{ color: 'white', fontWeight: 700, fontFamily: 'Rubik', fontSize: 28, textAlign: 'left' }}>My Skills</h2></div>
          <div style={{ marginTop: 54 }}>
            {
              skills.map(skill => (
                <div style={{ borderRadius: 3.4, marginTop: 14, height: 28, display: 'flex', backgroundColor: '#15253d' }}>
                  <div style={{ borderBottomLeftRadius: 3.4, borderTopLeftRadius: 4, backgroundColor: '#47a892', alignItems: 'center', justifyContent: 'space-around', display: 'flex', width: 114 }}>
                    <span style={{ fontSize: 14, fontFamily: 'Rubik', color: 'white' }}>{skill.label}</span>
                  </div>
                  <div className='background-color-2' style={{ transition: '0.5s', width: width ? skill.value : 0 }}></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="w-pc" style={{ padding: 34 }}>
        <div style={{ width: 540 }} >
          <div><h2 className='' style={{ color: 'white', fontWeight: 700, fontFamily: 'Rubik', fontSize: 28, textAlign: 'left' }}>My Skills</h2></div>
          <div style={{ marginTop: 54 }}>
            {
              skills.map(skill => (
                <div style={{ borderRadius: 3.4, marginTop: 14, height: 28, display: 'flex', backgroundColor: '#15253d' }}>
                  <div style={{ borderBottomLeftRadius: 3.4, borderTopLeftRadius: 4, backgroundColor: '#47a892', alignItems: 'center', justifyContent: 'space-around', display: 'flex', width: 114 }}>
                    <span style={{ fontSize: 14, fontFamily: 'Rubik', color: 'white' }}>{skill.label}</span>
                  </div>
                  <div className='background-color-2' style={{ transition: '0.5s', width: width ? skill.value : 0 }}></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );

}