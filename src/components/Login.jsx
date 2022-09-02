import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { status } from '../redux/action';
import styles from './Navbar.module.css'

const Login = () => {
    const userList = useSelector((state)=> state.userList);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const getLogin = () =>{
      userList.filter((item)=>{
        if(item.Email === email && item.Password === password){
          dispatch(status());
          setEmail("");
          setPassword("");
          alert("!You logged in");
      }
      }); 
    }

  return (
    <div>
        <br />
         <input id={styles.button1} value={email} placeholder="Enter Mail" onChange={(e)=>setEmail(e.target.value) } />
         <br />
        
         <input id={styles.button1} vlaue={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
         <br />
       
         <button id={styles.button1} onClick={()=>getLogin()}>Login</button>

    </div>
  )
}

export default Login