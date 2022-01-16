import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NavBar from './containers/NavBar';
import UserPage from "./containers/UserPage";
import ShelterPage from "./containers/ShelterPage";


function App() {

  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);


  useEffect(() => {
    fetch("/pets").then((r) => {
      if (r.ok) {
        r.json().then((pets) => setPets(pets))
      }
    });
  }, [])
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  console.log(pets)
  console.log(user)
  function handleAddPet(newPet) {
    setPets([...pets, newPet]);
  }

  function handleDeletePet(petToDelete) {
    const updatedPets = pets.filter((pet) => pet.id !== petToDelete.id);
    setPets(updatedPets);
  }

  function handleUpdatePet(updatedPet) {
    const updatedPets = pets.map((pet) => {
      return pet.id === updatedPet.id ? updatedPet : pet
    });
    setPets(updatedPets);
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);
  }

    return (
      <div>
        <Router>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/me" element={
              <UserPage 
                onClickDelete={handleDeletePet} 
                user={user}
                setUser={setUser}
              />}
            />
            <Route path="/shelters" element={
              <ShelterPage 
                onClickUpdate={handleUpdatePet}
                onAddPet={handleAddPet}  
                onAdoptPet={handleAdoptPet}
                pets={pets}
              />}
            />
          </Routes>
        </Router>
      </div>
    )
}

export default App;