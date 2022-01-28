import React, { useState } from 'react'

function PetForm({ shelterId, onAddPet }) {
    const [formData, setFormData] = useState({
        name: "",
        animal: "",
        age: "",
        sex: "",
        user_id: 1,
        shelter_id: shelterId,
        isAdopted: false
      });

      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }

      function handleSubmit(e) {
        e.preventDefault();
        const newPet = {
          ...formData,
          shelter_id: shelterId,
          isAdopted: false
        };
        fetch("/pets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPet),
          
        })
          .then((r) => r.json())
          .then(onAddPet);
      }

    return (
        <div>
        <form onSubmit={handleSubmit} >
        <h3>Fetch a new animal!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a animal's name..."
          className="input-text"
        />
        <br />
        <input
          type="integer"
          name="age"
          onChange={handleChange}
          value={formData.age}
          placeholder="Enter the animal's age..."
          className="input-text"
        />
        <br />
        <select
          name="animal"
          onChange={handleChange}
          value={formData.animal}
          className="input-text"
        >
          <option value="" disabled>Please select the type of animal</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
        <br />
        <select
          name="sex"
          onChange={handleChange}
          value={formData.sex}
          className="input-text"
        >
          <option value="" disabled>Animal's gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Neutered Male">Neutered Male</option>
          <option value="Spayed Female">Spayed Female</option>
        </select>
       
        <br />
        <input
          type="submit"
          name="submit"
          value="Create a Lost Animal"
          className="submit"
        />
      </form> 
        </div>
    )
}
export default PetForm