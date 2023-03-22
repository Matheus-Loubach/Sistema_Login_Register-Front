import React, { useContext } from 'react'

import { Context } from '../Context/AuthContext';

import git from '../img/github.svg'

const LoginCadastro = () => {

  const { handleLogin, setUser, user, messagem } = useContext(Context);


  return (
    <>
      <div className='container_screen'>
        <div className='container_left'>
          <header>
            <h1>Bem vindo</h1>
            <p>Novo Login</p>
            <div>
              <a href="/register"><button>Criar conta</button></a>
            </div>
          </header>
        </div>
        <div className='container_right'>
          <section>
            <h1>Faça Login</h1>
            <form onSubmit={handleLogin}>
              <div className='inputLogin'>
                <input type="text" id='usr' placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
              </div>
              <div>
                <input type="password" id='psw' placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>
              <button onClick={(e) => handleLogin(e)}>Entrar</button>
              {messagem ? <p>{messagem}</p> : []}
            </form>
            <div>
            </div>
            <div className='icone'>
              <a href="https://github.com/Matheus-Loubach"><img src={git} alt="IconGit"  /></a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default LoginCadastro