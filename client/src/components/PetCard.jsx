import React from 'react'

function PetCard({ petId, pet, onAdoptPet, shelterId, onClickDelete, user }) {
  
  const { name, sex, animal, age, isAdopted } = pet;

console.log(name)

  function handleRemove(petToDelete, id){
    // event.preventDefault()
    fetch(`/pets/${id}`, {
      method: "DELETE",
      })
          .then((r) => r.json())
          .then(() => (
          onClickDelete(petToDelete)
      ));
  }
  function handleAdoptedClick() {
    onAdoptPet(petId);
  }
  
function filterAnimal(){
  
}


  return (
        <div>
           <div> 
             <p>name: {name}</p>
            <p>gender: {sex}</p>
            <p>age: {age}</p>
            <p>type of animal: {animal}</p>
            {isAdopted ? (
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