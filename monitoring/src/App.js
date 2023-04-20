import logo from './logo.svg';
import './App.css';
import React from 'react';
import HeadCard from './components/HeadCard';
import { FaBullseye} from "react-icons/fa";
import useWebSocket from 'react-use-websocket';
import { useState, useEffect } from 'react';


function App() {
  
  const [numero,setNumero] = useState(10);

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:1880/data-clp');

    ws.onmessage = function (event) {
        const json = JSON.parse(event.data);
        try {
            setNumero(json.valor)
        } catch (err) {
            console.log(err);
        }
    };
    //clean up function
    return () => ws.close();
}, []);


  return (
    <div className="App-header">
      <HeadCard
        titulo={"Meta"}
        icone={<FaBullseye size={50} color='#fff'/>}
        valor={numero}
        />
        
      
    </div>
  );
}

export default App;
