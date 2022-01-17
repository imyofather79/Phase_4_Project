import React from 'react'
import PetCard from '../components/PetCard'

function UserPage({ pets, onAdoptPet, onClickDelete, user, setUser}) {
  
  const petCards = pets.map((pet) => {
    if (pet.user_id === user.id ){
    return <PetCard petId={pet.id} pet={pet} onAdoptPet={onAdoptPet} userId={user.id} onClickDelete={onClickDelete}/>
   } else {
    return null
    };
    });
  
  return (
        <div>
          <h1>Home: {user.username} </h1>
          <h2>Name: {user.name}</h2>  
          {petCards}
        </div>
    )
}
export default UserPage