import React, { useState } from 'react'
import PetForm from './PetForm';
import PetCard from "./PetCard"
import { Button, Label } from "../styles";

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
          <Label>Shelters {id}</Label>
          <Label>{name}</Label> 
          <Label>City: {city}</Label>
          <Label>Contact Number: {phone_number}</Label> 
          {petCards}
          {showForm ? <PetForm shelterId={shelterId} onAddPet={onAddPet}/> : null}
          <Button onClick={handleClick}>Click to create a new animal</Button>
        <br/>
        <br/>
        </div>
    )
}
export default ShelterCard