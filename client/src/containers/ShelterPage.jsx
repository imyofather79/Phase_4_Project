import React,{ useState, useEffect } from 'react'
import PetForm from '../components/PetForm';
import ShelterCard from '../components/ShelterCard'

function ShelterPage({  onClickUpdate, onAddPet, onAdaptPet }) {

    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        fetch('/shelters').then((r) => {
          if (r.ok) {
            r.json().then((shelters) => setShelters(shelters))
          }
        });
      }, [])
      console.log(shelters)
      const shelterCards = shelters.map((shelter) => {
        <ShelterCard key={shelter.id} shelter={shelter} onAdaptPet={onAdaptPet} />
      })

    return (
        <div>
            <h1>Shelter Page</h1>
          {/* <h1>Shelters</h1> */}
            {/* // <ShelterCard  
            //     onClickUpdate={onClickUpdate}
            //     onAddPet={onAddPet}  
            //     onAdaptPet={onAdaptPet}
            //     shelters={shelters}
            //     setShelters={setShelters}
            // /> */}
            {shelterCards}
            <PetForm/>
        </div>
    )
}
export default ShelterPage