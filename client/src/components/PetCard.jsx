import React from 'react'
import { Button } from "../styles";

function PetCard({ pet, onAdoptPet, onClickDelete, user }) {
  
  const { id, name, sex, animal, age } = pet;

console.log(pet)


  function handleRemove(){
    fetch(`/pets/${pet.id}`, {
      method: "DELETE",
      })
          .then((r) => r.json())
          .then(() => (onClickDelete(pet))
          );
  }

  function handleAdoptedClick() {
    const updateObj = {
      user_id: user.id,
      isAdopted: true,
    };

    fetch(`/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
      })
        .then((r) => r.json())
        .then(onAdoptPet);
    }


    function handleSendBack() {
      const updateObj = {
        user_id: 1,
        isAdopted: false,
      };
  
      fetch(`/pets/${pet.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(onAdoptPet);
      }
  
  return (
            <div> 
              <h5>animal id: {id}</h5>
              <h5>name: {name}</h5>
              <h5>gender: {sex}</h5>
              <h5>age: {age}</h5>
              <h5>type of animal: {animal}</h5>
              {pet.isAdopted ? (
            <Button onClick={handleSendBack}>Send back to shelter</Button>
              ) : (
            <Button onClick={handleAdoptedClick}>
              Adopt pet
            </Button>
              )}
              <Button onClick={handleRemove}>Remove</Button>
              <br/>
              <br/>
          </div>
    )
}
export default PetCard