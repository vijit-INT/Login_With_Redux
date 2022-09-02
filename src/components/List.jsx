import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css';

const List = () => {
    const todo = useSelector((state) => state.todo);
    const position= useSelector((state) => state.status);
    
    // if(!position){
    //   return <div>
    //     <Link to='/'>!Please Login First</Link>
    //   </div>
    // }
  
  return (
    <div  className={styles.Users}>
          {
            todo.map((item)=>(
               <div key={item.id}>
                <ul>
                   <li>{item.Name}</li>

                </ul>
                
               </div>
            ))
          }

    </div>
  )
}

export default List