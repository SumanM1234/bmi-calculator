import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <form>
        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder="Enter weight" value={weight} />
        </div>
        <div>
          <label>Height (in)</label>
          <input type="text" placeholder="Enter height" value={height} />
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button>Reload</button>
        </div>
      </form>
    </div>
  );
}

export default App;
