import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")

    // console.log(searchText)
    // console.log(searchText.toUpperCase())

    const filteredPets = pets.filter(pet => {
        if(searchText === ""){
            return true
        }
        // console.log(pet.name.toUpperCase())
        // console.log(searchText.toUpperCase())
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })
    // console.log(filteredPets)

    // console.log(pets)

    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;