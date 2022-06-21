import './App.css';
import { useState } from 'react';

const EmojiArray = ({ emojis, setDisplay, meanings }) => {

  const emojiClick = (event) => {
    const test = event.target.value
    setDisplay(test)
  }

  return (
    <div className='emojiArray'>
      {emojis.map(e =>
        <input type='button' className='emoji' onClick={emojiClick} value={e} key={e} >
          
        </input>
      )}
    </div>
  )
}

const App = () => {

  const inputChangeHandler = (event) => {
    let temp = event.target.value
    setDisplay(temp);
  }

  const objectEmoji = {
    "🎏": "Carp Streamer",
    "🎊": "Confetti Ball",
    "💈": "Barber Pole",
    "🔮": "Crystal Ball",
    "📟": "Pager",
    "🏮": "Lantern",
    "🔭": "Telescope",
    "🔬": "Microscope",
    "✉️": "Envelope",
    "📰": "Newspaper",
    "📐": "Set Square",
    "✒️": "Black Nib",
    "📂": "Folder"
  };

  const emojis = Object.keys(objectEmoji)
  const meanings = Object.values(objectEmoji)

  const [display, setDisplay] = useState('')

  return (
    <div className="App">
      <h1>
        Emoji Picker
      </h1>
      <input className='inputBox' 
        placeholder='input emoji here'
        onChange={inputChangeHandler}
      />
      <EmojiArray emojis={emojis} setDisplay={setDisplay} meanings={meanings} />
      <p>{ display }</p>

    </div>
  );
}

export default App;
