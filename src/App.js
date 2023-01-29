
import { BrowserRouter as Router,Route, Routes  } from "react-router-dom";
import React from "react";
import logo from './logo.svg';
import './App.css';
//import Profile from './components/pages/market/Profile'
import Layout from './components/layouts/Layout'

const App = () => {
  
  
  const userUri = process.env.REACT_APP_API_GET_USER;
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const port = process.env.REACT_APP_SERVER_PORT;
  const userEndPoint = `${serverUrl}:${port}${userUri}`;
  console.log ('value of userEndPoint:', userEndPoint);
  return (
     
     <Router>
      
        <Routes>
          <Route exact path="/" element={ < Layout />}/>
       </Routes>
     </Router>
  );
}

/*

const App = () => {
  return <h1>Hello React</h1>;
};
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
export default App;
