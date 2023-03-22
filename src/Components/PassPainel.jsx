import React from 'react'
import DetalhesUsers from './DetalhesUsers'

const PassPainel = ({ users }) => {
  return (
    <div >
      <h2>Usuarios Cadastrados</h2>
      {users ? users.map((user) => <DetalhesUsers key={user._id} user={user} />) : <span>Carregando... Aguarde</span>}
    </div>
  )
}

export default PassPainel