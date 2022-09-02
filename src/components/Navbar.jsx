import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css' 

const Navbar = () => {
    
  return (
    <div>
      
        <div  className={styles.nav}>
        <Link className={styles.comp1} to='/todo'>Todos</Link>
        <Link className={styles.comp1} to='/userList'>UserList</Link>
        <Link className={styles.comp1} to='/register'>Register</Link>
        <Link className={styles.comp1} to='/'>Login</Link>
        </div>
    </div>
  )
  
}

export default Navbar