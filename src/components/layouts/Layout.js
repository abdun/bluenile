import { useParams } from 'react-router-dom'
import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { paramVal } = useParams();
  const whichPage = paramVal == null || undefined? 'Market' : paramVal;
  console.log(` value of whichPage: ${whichPage}`);

    return (
      <>
        <Navigation 
          pageLink = {whichPage} /* passing value of whichPage to Navigation as prop so it ca be retrieved in Navigation component */
        />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
  
  export default Layout