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
    }
  ])

  return (
    works.map(work => (
      <div className="hover" onClick={(e) => window.location.href = work.be_link} style={{ padding: 24 }}>
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
      </div>
    ))
  )
}