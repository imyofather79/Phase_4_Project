import React from 'react'
import PetForm from './PetForm';

function ShelterCard({ key, shelter, onAdaptPet }) {
   
  const {id, name, city, phone_number } = shelter;



  
  return (
        <div>
          <h1>Shelters</h1>
          {/* <h1>{name}</h1> 
          <h2>City: {city}</h2>
          <h2>Contact Number: {phone_number}</h2>  */}
          <PetForm id={id}/>
        </div>
    )
}
export default ShelterCard