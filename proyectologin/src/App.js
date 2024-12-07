import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; 
function App() { 
  const [users, setUsers] = useState([]);
   const getUser = async () => { 
    try { 
      const response = await fetch('http://localhost:3030/users');
       const data = await response.json();
        console.log(data);
        setUsers(data); 
      } catch (error) { 
        console.error('Error fetching users:', error);
       } }; 
       useEffect(() => { 
        getUser(); 
      }, []);
      
  return (
    <div className="App">
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
    </div>
  );
}

export default App;