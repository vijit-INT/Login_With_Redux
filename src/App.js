import './App.css';
import AddTodo from './components/AddTodo';
import Login from './components/Login';
import Register from './components/Register';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
    <div className='Jpp'>
    <Navbar />
     <Routes>
     <Route path='/' element={<Login />}/>
     <Route path='/register' element={<Register />} />
     <Route path='/todo' element={<AddTodo />} />
     <Route path='/UserList' element={<UserList />} />
     </Routes>
    </div>
    </div>
  );
}

export default App;
