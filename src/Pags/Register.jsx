import React, { useContext } from 'react'
import { Context } from '../Context/AuthContext';


const Register = () => {


  const {messagem, handleRegister, setUser, user } = useContext(Context);

  return (
    <div className='container_screenRegi'>
      <div className='container_left'>
        <header>
          <h1>Bem vindo</h1>
          <p>Novo Cadastro</p>
          <div>
            <a href="/"><button>Faça Login</button></a>
          </div>
        </header>
      </div>
      <div className='container_rightReg'>
        <header>
          <h1>Faça o Cadastro</h1>
          <form onSubmit={handleRegister}>
            <div className='inputLogin'>
              <input type="text"
                name='usuario'
                id='usr'
                placeholder='USUARIO'
                required onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
            </div>
            <div>
              <input type="email"
                id='eml'
                name='email'
                placeholder='E-MAIL'
                required onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            </div>
            <div>
              <input type="password"
                id='psw'
                name='password'
                placeholder='SENHA'
                required onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
            </div>
            <div>
              <input type="password"
                id='psw'
                name='passwordconf'
                placeholder='CONFIRME A SENHA'
                required onChange={(e) => setUser({ ...user, passwordconf: e.target.value })}></input>
            </div>
            <button onClick={(e) => handleRegister(e)}>Cadastrar</button>
            {messagem ? <p>{messagem}</p> : [] }
          </form>
          <div>

          </div>
        </header>
      </div>
    </div>
  )
}

export default Register