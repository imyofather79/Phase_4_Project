import React, { useState } from 'react'
import PetForm from './PetForm';
import PetCard from "./PetCard"
import UserPage from '../containers/UserPage';

function ShelterCard({ user, pets, shelterId, shelter, onAdoptPet, onAddPet, onUpdate, setPets }) {
  const [showForm, setShowForm] = useState(false);
  const {id, name, city, phone_number } = shelter;
  
console.log(id)
function handleClick(){
  setShowForm((showForm) =>!showForm);
}
console.log(pets)


const petCards = pets.map((pet) => {
  if (pet.shelter_id === shelterId && !pet.isAdopted){
  return <PetCard 
    pet={pet} 
    onAdoptPet={onAdoptPet} 
    shelterId={shelter.id}
    onUpdate={onUpdate}
    setPets={setPets}
    user={user}
    />
  } else {
    return null  
  }
});

// function adminForm(){
//   if(user.id === 1){
//   {showForm ? <PetForm shelterId={shelterId} onAddPet={onAddPet}/> : null}
// }}


  return (
        <div>
          <h3>Shelters {id}</h3>
          <h3>{name}</h3> 
          <h3>City: {city}</h3>
          <h3>Contact Number: {phone_number}</h3> 
          {petCards}
          {showForm ? <PetForm shelterId={shelterId} onAddPet={onAddPet}/> : null}
          <button onClick={handleClick}>Add a new animal</button>
        </div>
    )
}
export default ShelterCard