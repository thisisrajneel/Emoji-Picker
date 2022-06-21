import './App.css';
import { useState } from 'react';

const EmojiArray = ({ emojis, setDisplay, dictionary }) => {

  const emojiClick = (event) => {
    const test = event.target.value
    const meaning = dictionary[test]
    setDisplay(meaning)
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
    "🙂": "Smiling",
    "😉": "Winking",
    "😂": "Laughing"
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
      <EmojiArray emojis={emojis} setDisplay={setDisplay} dictionary={objectEmoji} />
      <p>{ display }</p>

    </div>
  );
}

export default App;
