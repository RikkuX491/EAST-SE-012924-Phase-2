import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from './Search';
import AddPet from './AddPet';

// console.log(pets)

function PetPage(){

    const [petsState, setPetsState] = useState(pets)
    const [searchText, setSearchText] = useState("")

    console.log(petsState)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    /**
     * Please view Part 2 of my lecture recording for this lecture (Lecture 3) to view the solution to an error that came up
     * when we were trying to add a new pet that has the same "id" as one of the other pets.
     * 
     * This is example code for adding a new pet. Please note that if petState[0] does not exist, there will be an error.
     * But this functionality is meant to be an example of not only how we might go about adding a new pet, but also
     * why we should be "lifting state" in the case that we have 2 components that need to make changes to petsState as in this case.
     * This is why we have declared our petsState and setPetsState setting function in this PetPage component.
     * 
     * Tomorrow, you will learn how to properly add a new pet with unique information for the new pet via form submission.
     */
    function addPet(){
        // setPetsState((petsState) => [...petsState, petsState[0]])
        const newPet = {...petsState[0], id: petsState.length + 1, name: "Another Dog"}
        console.log(newPet)
        // setPetsState((petsState) => [...petsState, petsState[0]])
        setPetsState((petsState) => [...petsState, newPet])
    }

    function deletePet(id){
        // const otherPets = petsState.filter(pet => {
        //     return pet.id !== id
        // })
        // setPetsState(otherPets)
        setPetsState((petsState) => petsState.filter(pet => {
            return pet.id !== id
        }))
    }

    return (
        <main>
            <AddPet addPet={addPet}/>
            <Search updateSearchText={updateSearchText} />
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;