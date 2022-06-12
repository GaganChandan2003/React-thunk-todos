import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { RequiredAuth } from './hoc/RequiredAuth';

function App() {
  const {isAuth}=useSelector((state)=>state.auth)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={
          <RequiredAuth><Home/></RequiredAuth>
        }></Route>
        <Route path='/:id' element={<RequiredAuth><Todos/></RequiredAuth>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
