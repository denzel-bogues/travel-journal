import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Log from './components/Log';
import LogForm from './components/LogForm';


function App() {

  const [logList, setList] = useState([]);

  return (
    <div className="App">
      <h1 className='header--title'>My Travel Journal</h1>


      <LogForm inputhandler={(log) => setList([...logList, log])} />

      {logList ? logList.map((log) => {
        return (
          <Log
            imgUrl={log.imgFile ? log.imgFile : 'default-image.png'}
            location={log.logLocation ? log.logLocation : 'Country'}
            title={log.logTitle ? log.logTitle : 'A Trip'}
            date={log.logDate ? log.logDate : 'Month Day, Year - Month Day, Year'}
            description={log.logDescription ? log.logDescription : 'A description or summary of this amazing journey!'}
          />)
      }) : null}

      <Navbar />
    </div>
  );
}

export default App;
