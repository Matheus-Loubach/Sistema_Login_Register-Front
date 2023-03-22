import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import './ComponentsCSS/Responsive.css'
//CSS
import './App.css';
import './ComponentsCSS/Login.css'
import './ComponentsCSS/Register.css'

//Pags
import Login from './Pags/Login';
import Register from './Pags/Register';
import Painel from './Pags/Painel';

//ContextApi
import { Context } from './Context/AuthContext';

const App = () => {

  const {token, authenticated } = useContext(Context);

  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/painel' element={token && authenticated ? <Painel /> : <Login/>} />
        </Routes>
    </div>
  );
}

export default App;
