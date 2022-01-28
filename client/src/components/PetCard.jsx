import React from 'react'

function PetCard({ pet, onAdoptPet, shelterId, onClickDelete, user, onUpdate, setPets }) {
  
  const { id, name, sex, animal, age, isAdopted } = pet;

console.log(pet)


  function handleRemove(){
    fetch(`/pets/${pet.id}`, {
      method: "DELETE",
      })
          .then((r) => r.json())
          .then(() => (onClickDelete(pet))
          );
  }

  function handleAdoptedClick(event) {
    event.preventDefault()


    fetch(`/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((r) => r.json())
        .then(setPets([...pet]));
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