import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from './Search';

console.log(pets)

function PetPage(){

    // Deliverable # 3
    const [petsState, setPetsState] = useState(pets)
    const [searchText, setSearchText] = useState("")

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    // Deliverable # 1
    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    // Deliverable # 4
    function deletePet(id){
        setPetsState((petsState) => petsState.filter(pet => {
            return pet.id !== id
        }))
    }

    return (
        <main>
            {/* Deliverable # 2 */}
            <Search updateSearchText={updateSearchText} />
            
            {/* Deliverable # 5 */}
            <PetList pets={filteredPets} deletePet={deletePet}/>
        </main>
    );
}

export default PetPage;