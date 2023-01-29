import React, { useState } from "react";
import './Profile.css';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import mkt from '../../../assets/img/market.jpg'

const Profile = () => {
    const [ticker, setTicker] = useState('');
    const levelTicker = 'Search for news, companies or symbols';

     const gap = (
        <div className="card flex prof-gap flex-column lg:flex-row align-items-center justify-content-center" >
            <label htmlFor="gap" className="prof-space"></label>
        </div>
    );
    
        
        const symbolInput = (
            <div className="card flex prof-left-mergin flex-column lg:flex-row align-items-center justify-content-center" >
                <Button label = "Search" icon="pi pi-search" className="p-button-text" />
                <label htmlFor="gap" className="prof-space"></label>
                <span className="p-float-label">
                <InputText className="prof-input-length"  id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
                <label htmlFor="ticker">{levelTicker}</label>
              </span>                                         

            </div>
        );
    
    const symbolInput2 = (
        <Splitter className="prof-left-mergin prof-border-style"  layout="horizontal">
      
        <SplitterPanel className="flex prof-left-mergin align-items-center justify-content-center" >
           <Button label = "Search" icon="pi pi-search" className="p-button-text" />
        
        
           <span className="p-float-label ">
              <InputText className="prof-input-length"  id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)} />
              <label htmlFor="ticker">{levelTicker}</label>
            </span>                                         
        </SplitterPanel>
    
    </Splitter>
    );

    const displayImage = (
        <div className="card flex  flex-column lg:flex-row align-items-center justify-content-center" >
            <img src={mkt}></img>
        </div>
    );


     const displayImage2 = (
        <Splitter className="prof-image-border-style"  layout="horizontal">
        <SplitterPanel className="absolute align-items-left" size={20}>Panel 1</SplitterPanel>
        <SplitterPanel className="absolute align-items-center justify-content-center" size={20}><img src={mkt}></img></SplitterPanel>
        <SplitterPanel className="absolute align-items-center justify-content-center" size={20}>Panel 2</SplitterPanel>
    </Splitter>
    );

       
        
    return (
      <div >
        <div>
          <Toolbar className="prof-border-style"
            left={symbolInput} />
        </div>
        <div>{gap}</div>        
        <div>{displayImage}</div>
      </div>
    )
}



export default Profile;