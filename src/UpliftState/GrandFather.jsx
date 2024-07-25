import React, {useState} from 'react'
import Father1 from './Father1'
import Father2 from './Father2'

export default function GrandFather() {
  const [counter, setCounter] = useState(0);
  function updateCounter(count){
    setCounter(count);
  }

  return (
    <div>
            <Father1 counter={counter}></Father1>
            <Father2 counter={counter} updateCounter={updateCounter}></Father2>
            <div>
              grand father level
              <button onClick={() => setCounter(counter+1)}>Add</button>
            </div>
    </div>
  );
}
