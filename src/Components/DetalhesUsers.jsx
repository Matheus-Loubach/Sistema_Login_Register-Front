import React from 'react'

const DetalhesUsers = ({user}) => {

  const { name } = user;

  return (
    <div>
      <header>
        <ul>
          <li>@{name}</li>
        </ul>
      </header>
    </div>
  )
}

export default DetalhesUsers