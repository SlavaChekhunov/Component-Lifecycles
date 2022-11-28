import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Text from './components/Text';

//when you click the button, the component mounts, when you click it again it unmounts.
//Once you type something in the input it changes the letters, the component is updated. 

//Component Lifecycle: 
//mounting the component
//updating
//unmounting

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {
        setShowText(!showText);
      }}> Show</button>

      {showText && <Text />}
    </div>
  );
}

export default App;
