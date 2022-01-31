import React from 'react'

function PetCard({ pet, onAdoptPet, shelterId, onClickDelete, user, onUpdate, setPets }) {
  
  const { name, sex, animal, age } = pet;

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
        // .then(setPets([...pet]));
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
          // .then(setPets([...pet]));
      }
  
  return (
        <div>
            <div> 
              <p>name: {name}</p>
              <p>gender: {sex}</p>
              <p>age: {age}</p>
              <p>type of animal: {animal}</p>
              {pet.isAdopted ? (
            <button onClick={handleSendBack}>Send back to shelter</button>
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