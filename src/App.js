import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const inputChangeHandler = (event) => {
    let temp = event.target.value
    setDisplay(temp);  
  }

  const [display, setDisplay] = useState('')

  return (
    <div className="App">
      <h1>
        Emoji Picker
      </h1>
      <input 
        placeholder='input emoji here'
        onChange={inputChangeHandler}
        />
        <p>{ display }</p>
    </div>
  );
}

export default App;
