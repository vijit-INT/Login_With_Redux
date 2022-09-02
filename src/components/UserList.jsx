import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const UserList = () => {
   const userList= useSelector((state)=>state.userList); 
   const status= useSelector((state)=>state.status); 
   
   if(!status){
    return <div>
        <Link to='/'>!please Login First</Link>
    </div>
   }
    return (
    <div>
          {
            userList.map((item)=>(
                <div>
                    <h1>Name- &nbsp; {item.Name}</h1>
                    <h1>Email- &nbsp; {item.Email}</h1>
                    <h1>Mobile No- &nbsp; {item.Mobile}</h1>
                </div>
            ))
          }
    </div>
  )
}

export default UserList