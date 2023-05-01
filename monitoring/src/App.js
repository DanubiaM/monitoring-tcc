import './App.css';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Body from './components/Body'

function App() {
  const [jsonValues, setJsonValues] = useState(0);

  useEffect(() => {
      const ws = new WebSocket('ws://127.0.0.1:1880/data-clp');

      ws.onmessage = function (event) {
          const json = JSON.parse(event.data);
          try {
              setJsonValues(json)
          } catch (err) {
              console.log(err);
          }
      };
      //clean up function
      return () => ws.close();
  }, []);



  return (
    <div className='App-header'>

      <NavBar />
      <Header
        valorJson= {jsonValues}
      />
      <Body
        valorJson={jsonValues}
      />
      <Footer/>
    </div>
  );
}

export default App;
