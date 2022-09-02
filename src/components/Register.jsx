import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { update_user } from '../redux/action';
import styles from './Navbar.module.css';

const Register = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    

    const updateRegister = () =>{
         const payload = {
            Name:name,
            Mobile:mobile,
            Email: email,
            Password: password
         }

         dispatch(update_user(payload))
          setEmail("");
          setMobile("");
          setName("");
          setPassword("");
          alert("!User registerd successfully")
    }

  return (
    <div  className={styles.Register}>
        <br />
     <input id={styles.button1} value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value) }/>
     <br />
     <input id={styles.button1} value={mobile} placeholder='Enter Maobile Number' onChange={(e)=>setMobile(e.target.value) }/>
     <br />
     <input id={styles.button1} value={email} placeholder='Enter Mail' onChange={(e)=>setEmail(e.target.value) }/>
     <br />
     <input id={styles.button1} value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value) }/>
     <br />
     <button  id={styles.button1} onClick={()=> updateRegister()}>Register</button>
    </div>
  )
}

export default Register