import "./styles.css";
import {useState} from 'react';

export default function App() {
  const [todo,setTodo]=useState('')
  const [warning,setWarning]=useState(null)
  const handleInput=e=>{
    const inputValue=e.target.value;
    const updateWaring=inputValue.includes('.ts')?
    'you need js skill complete':
    null;
    setTodo(inputValue)
    setWarning(updateWaring)
  }
  return (
    <div className="App">
      <h1>{todo}</h1>
      <p>
        <input name='todo' value={todo} onChange={handleInput}/>
        </p>
        <hr/>
        <h4>{warning|| 'very good'}</h4>
    </div>
  );
}
