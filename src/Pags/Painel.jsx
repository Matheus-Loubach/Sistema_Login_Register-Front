import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/AuthContext';
import '../ComponentsCSS/Painel.css'
import PassPainel from '../Components/PassPainel';


const Painel = () => {
  const { token, handleLoggout } = useContext(Context);

  //allUsers
  const [users, setUsers] = useState([]);
  //user
  const [user, setUser] = useState();

  //userALl
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/Api/userall', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, [token]);

  //user
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/Api/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUser(data.name)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [token]);


  return (
    <div className='container_all' >
      <div className='contaienr_Users'>
        <PassPainel users={users} />
      </div>
      <div className='container_UserOne'>
        <div>
          <header>
            <nav>
              <h1>Bem-Vindo(a) @{user} </h1>
            </nav>
            <div className='logout'>
              <button onClick={handleLoggout}>Sair</button>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Painel