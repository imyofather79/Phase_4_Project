import React, { useState } from 'react'
import PetForm from './PetForm';
import PetCard from "./PetCard"

function ShelterCard({ pets, key, shelter, onAdoptPet }) {
  const [showForm, setShowForm] = useState(false);
  const {id, name, city, phone_number } = shelter;
  

function handleClick(){
  setShowForm((showForm) =>!showForm);
}
console.log(pets)

const petCards = pets.map((pet) => (
  <PetCard petKey={pet.id} pet={pet} onAdoptPet={onAdoptPet} shelterKey={key}/>
));

  return (
        <div>
          <h3>Shelters {id}</h3>
          <h3>{name}</h3> 
          <h3>City: {city}</h3>
          <h3>Contact Number: {phone_number}</h3> 
          {showForm ? <PetForm id={id}/> : null}
          <button onClick={handleClick}>Add a new animal</button>
        </div>
    )
}
export default ShelterCard