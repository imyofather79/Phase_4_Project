import React,{ useState, useEffect } from 'react'
// import PetForm from '../components/PetForm';
import ShelterCard from '../components/ShelterCard'

function ShelterPage({ pets, onClickUpdate, onAddPet, onAdoptPet }) {

    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        fetch('/shelters').then((r) => {
          if (r.ok) {
            r.json().then((shelters) => setShelters(shelters))
          }
        });
      }, [])

      const shelterCards = shelters.map((shelter) => <ShelterCard key={shelter.id} shelter={shelter} onAdoptPet={onAdoptPet} pets={pets} />)

    return (
        <div>
            <h1>Shelter Page</h1>
          {/* <h1>Shelters</h1> */}
            {/* // <ShelterCard  
            //     onClickUpdate={onClickUpdate}
            //     onAddPet={onAddPet}  
            //     onAdoptPet={onAdoptPet}
            //     shelters={shelters}
            //     setShelters={setShelters}
            // /> */}
            {shelterCards}
            {/* <PetForm/> */}
        </div>
    )
}
export default ShelterPage