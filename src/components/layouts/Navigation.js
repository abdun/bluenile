import React, {useEffect, useRef} from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Message } from 'primereact/message';
import Profile  from '../pages/market/Profile';
import { ToggleButton } from 'primereact/togglebutton';

import nile from '../../assets/img/nile.jpg'



const Navigation = ({pageLink}) => {
    const msgs3 = useRef(null);
    console.log(` value of pageLink: ${pageLink}`);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];
 
    /*
    const headerContent = (
        <React.Fragment>
        <Panel header="Header"></Panel>
        </React.Fragment>        
    );
*/
    const leftContents = (
        <React.Fragment>
            <ToggleButton onLabel="Market" offLabel= "Market" checked={pageLink.toLowerCase()==='market'? true:false} className="p-button-text p-button-sm mr-2 "/>
            <ToggleButton onLabel="Watchlists" offLabel="Watchlists" checked={pageLink.toLowerCase()==='Watchlists'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="Portfolios" offLabel = "Portfolios" checked={pageLink.toLowerCase().toLowerCase()==='Portfolios'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="Earnings" offLabel="Earnings" checked={pageLink.toLowerCase()==='Earnings'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="Dividends" offLabel="Dividends" checked={pageLink.toLowerCase()==='Dividends'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="Options" offLabel="Options" checked={pageLink.toLowerCase()==='Options'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="Learn Trade" offLabel="Learn Trade" checked={pageLink.toLowerCase()==='Learn Trade'? true:false} className="p-button-text p-button-sm mr-2"/>
            <ToggleButton onLabel="SEC Filings" offLabel="SEC Filings" checked={pageLink.toLowerCase()==='SEC Filings'? true:false} className="p-button-text p-button-sm mr-2"/>
        </React.Fragment>
    );
 
    const titleContent = (
        <div className="flex align-items-center">
            <div className="ml-7">Blue</div>
            <div className="ml-1"><img src={nile}></img></div> 
            <div className="ml-1">Nile Finance</div>
        </div>
    );

    const rightContents = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );
       return (
             
            <div>
               <div className="card">
                 <Message
                   style={{
                      border: 'solid #696cff',
                      borderWidth: '0 0 0 6px',
                      color: '#696cff'
                   }}
                   className="border-primary w-full justify-content-start" severity="info"
                   content={titleContent}
                 />
               </div>                
                <Toolbar
                   style={{
                    border: 'solid #111111',
                    borderWidth: '0 0 0 0px',
                    color: '#696cff'
                 }}

                 left={leftContents}
                 />
                < Profile />
            </div>
        );
            
  }
  
  export default Navigation
  