import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const targetUrl = "http://localhost:3001/add";
  console.log(targetUrl);


  return (
    <div className="App">
      <input type="text" onChange={e => setNum1(e.target.value)}></input>
      <input type="test" onChange={e => setNum2(e.target.value)}></input>
      <button onClick={() => {
        fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            num1,
            num2,
          }),
        });
      }}>Send</button>
    </div>
  );
}

export default App;
