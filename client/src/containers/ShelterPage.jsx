import React,{ useState, useEffect } from 'react'
import ShelterCard from '../components/ShelterCard'

function ShelterPage({ user, pets, onAddPet, onAdoptPet, onUpdate, setPets }) {

    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        fetch('/shelters').then((r) => {
          if (r.ok) {
            r.json().then((shelters) => setShelters(shelters))
          }
        });
      }, [])

      const shelterCards = shelters.map((shelter) => (
        <ShelterCard 
          shelterId={shelter.id} 
          shelter={shelter} 
          onAdoptPet={onAdoptPet} 
          pets={pets} 
          onAddPet={onAddPet} 
          onUpdate={onUpdate}
          setPets={setPets}
          user={user}
        />))

    return (
        <div>
            <h1>Shelter Page</h1>
            {shelterCards}
        </div>
    )
}
export default ShelterPage