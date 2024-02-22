import Pet from "./Pet";
import {useState} from "react";

function PetList({ pets, deletePet }){

    // const [petsState, setPetsState] = useState(pets)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;