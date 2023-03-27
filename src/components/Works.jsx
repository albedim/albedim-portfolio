import { useState } from "react"

export const Works = () => {

  const [works, setWorks] = useState([
    {
      name: "Car Poolando",
      image: "carpoolando.png",
      description: "This is an open source project for car pooling. If you have a company and want to help people comes to you fastly, you can downlaod this project and configure it as you want",
      languages: [
        "Python (Flask)",
        "MySQL",
        "React JS"
      ],
      be_link: "https://github.com/albedim/MyPooling-BE",
      fe_link: "https://github.com/albedim/MyPooling-FE",
    },
    {
      name: "FightClubMC",
      image: "fightclubmc.png",
      description: "Web app for a minecraft server. Create discussions, answer players' questions and help others",
      languages: [
        "Python (Flask)",
        "MySQL",
        "React JS"
      ],
      be_link: "https://github.com/albedim/FightClubMC-BE",
      fe_link: "https://github.com/albedim/FightClubMC-FE",
    },
    {
      name: "Fryeat",
      image: "fryeat.png",
      description: "Web Application to help family and friends decide what to eat by creating polls",
      languages: [
        "Java (Apring Boot)",
        "MySQL",
        "React JS"
      ],
      be_link: "https://github.com/albedim/Fryeat",
      fe_link: "https://github.com/albedim/Fryeat-web",
    }
  ])

  return (
    works.map(work => (
      <div className="hover" style={{ padding: 24 }}>
        <div className="background-color-3" style={{ padding: 34, borderRadius: 8, height: 424, width: 284 }}>
          <div>
            <img style={{ borderRadius: 10, width: 284 }} src={require("./" + work.image)} alt="" />
          </div>
          <div>
            <h2 style={{ fontSize: 24, color: 'white', fontFamily: 'Rubik' }}>{work.name}</h2>
            <h2 className="color1" style={{ fontWeight: 400, fontSize: 16, fontFamily: 'Rubik' }}>{work.description}</h2>
            <div className="flex-wrap-box" style={{ marginTop: 24, flexWrap: 'wrap' }}>
              {
                work.languages.map(language => (
                  <div style={{ padding: 6 }}>
                    <div style={{ backgroundColor: '#47a892', alignItems: 'center', borderRadius: 4, paddingRight: 14, paddingLeft: 14, paddingBottom: 8, paddingTop: 8, justifyContent: 'space-around', display: 'flex' }}>
                      <span className="color1" style={{ fontSize: 10.4, fontFamily: 'Rubik' }}>{language}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div style={{alignItems: 'center', justifyContent: 'space-around', display: 'flex'}}>
          <div style={{display: 'flex'}}>
            <div style={{paddingLeft: 8, paddingRight: 8}}><button onClick={(e) => window.location.href = work.be_link} className="background-color-2" style={{border: "1px solid red", cursor: 'pointer', color: '#0A192F',  fontFamily: 'Rubik', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, outline: 'none', border: 'none', padding: 18}}>Backend</button></div>
            <div style={{paddingLeft: 8, paddingRight: 8}}><button onClick={(e) => window.location.href = work.fe_link} className="color2" style={{cursor: 'pointer', borderTop: 'none', borderLeft: '1px solid #6FF9DA', borderRight: '1px solid #6FF9DA', backgroundColor: '#0A192F', borderBottom: '1px solid #6FF9DA', fontFamily: 'Rubik', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, outline: 'none', padding: 18}}>Frontend</button></div>
          </div>
        </div>
      </div>
    ))
  )
}