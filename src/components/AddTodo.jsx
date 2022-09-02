import React,{useState} from 'react'
import { add_todo } from '../redux/action';
import { useDispatch } from 'react-redux/es/exports';
import List from './List'
const AddTodo = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const addTodo = () =>{
           const payload ={
            Name: task
           };
          dispatch(add_todo(payload));
          setTask("");
          alert("!Task Added"); 
    }

  return (
    <div>
    
      <br />
        <input value={task} placeholder='Enter Todo' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>addTodo()}>Add Todo</button>
      <br />
      <br />
        
         <List />
        
         
      
    </div>
  )
}

export default AddTodo