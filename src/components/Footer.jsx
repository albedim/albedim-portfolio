import { IonIcon } from "react-ion-icon";
import { redirect } from "react-router-dom";

export const Footer = () => {
    return (
        <div style={{ justifyContent: 'space-around', alignItems: 'center', display: 'flex', padding: 10 }}>
            <div style={{marginTop: 154}}>
                <div style={{justifyContent: 'space-around', display: 'flex'}}>
                    <div style={{display: 'flex'}}>
                        <a target="_blank" href="https://twitter.com/albe_dim"><div style={{cursor: 'pointer', justifyContent: 'space-around', display: 'flex', width: 84}} className="color3"><IonIcon style={{fontSize: 34}} name="logo-twitter" /></div></a>
                        <a target="_blank" href="https://github.com/albedim"><div style={{cursor: 'pointer', justifyContent: 'space-around', display: 'flex', width: 84}} className="color3"><IonIcon style={{fontSize: 34}} name="logo-github" /></div></a>
                    </div>
                </div>
                <div>
                    <h2 className="color3" style={{fontWeight: 400, fontFamily: 'Rubik', fontSize: 14}}>©2023 Copyright. All rights reserved</h2>
                </div>
                <div>
                   <h2 style={{cursor: 'pointer', fontWeight: 500, textAlign: 'center', fontFamily: 'Rubik', fontSize: 14}} className="color3">Made with ❤ by <span onClick={(e) => window.location.href = 'https://github.com/albedim'} className="color2">albedim</span></h2>
                </div>
            </div>
        </div>
    );
}