import React from 'react'

function PetCard({ petId, pet, onAdoptPet, shelterId, onClickDelete, user }) {
  
  const { id, name, sex, animal, age, isAdopted } = pet;

console.log(petId)
console.log(shelterId)


  function handleRemove(event, petToDelete, petId){
    event.preventDefault()
    fetch(`/pets/${petId}`, {
      method: "DELETE",
      })
          .then((r) => r.json())
          .then(() => (
          onClickDelete(petToDelete)
      ));
  }

  function handleAdoptedClick(event) {
    event.preventDefault()
    fetch(`/pets/${petId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((r) => r.json())
        .then(onAdoptPet);
    }
  
// const filterAnimal


console.log(pet.isAdopted)

  return (
        <div>
           <div> 
             <p>name: {name}</p>
            <p>gender: {sex}</p>
            <p>age: {age}</p>
            <p>type of animal: {animal}</p>
            {pet.isAdopted ? (
          <button>Already adopted</button>
            ) : (
          <button onClick={handleAdoptedClick}>
            Adopt pet
          </button>
            )}
            <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}
export default PetCard