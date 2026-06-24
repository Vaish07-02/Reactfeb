import React from 'react'
import {useEffect ,useState} from 'react'
import Greeting from './Greeting';

export default function App() {
  //let name = "Vaishnavi";
  const[name, setName] = useState("Vaishnavi");
  const[color, setColor] = useState("Blue");
  const[count, setCount] =  useState(0); 

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });
  return (
    <div>
      <Greeting name = {name}/>
      <button onClick = {() => setName("Chandu")}>click for change</button>
      <h2>My Favorite color is {color}!</h2>
      <button onClick={() => setColor("Black")}>Reveal color</button>
      <h2>The Count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>count</button>

     
    </div>
  );
}
