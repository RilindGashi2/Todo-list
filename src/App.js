
import './App.css';
import ToDoList from './components/Todo/ToDoList';
import React, { useState } from 'react';
import Login from './components/Loginn/Login';
import "./components/Loginn/Login.css"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate a simple login check
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="App">
        
      {isLoggedIn ?  <ToDoList/> : <Login handleLogin={handleLogin} />}
   
    </div>
  );
}

export default App;
