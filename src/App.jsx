import { useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ImageSlider />
      </div>
    </>
  );
}

export default App;
