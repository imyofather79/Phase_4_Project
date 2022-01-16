import React from 'react'
import PetCard from '../components/PetCard'

function UserPage({ onClickDelete, user, setUser}) {
    return (
        <div>
          <h1>Home: {user.username} </h1>
          <h2>Name: {user.name}</h2>  
          <PetCard />
        </div>
    )
}
export default UserPage