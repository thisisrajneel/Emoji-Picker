import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  const clickHandler = () => setCounter(counter+1)

  return (
    <div className="App">
      <h1>
        Emoji Picker
      </h1>
      <button onClick={clickHandler}>
        Click Me
      </button> { counter }
    </div>
  );
}

export default App;
