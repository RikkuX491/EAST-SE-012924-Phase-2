import { useState } from "react";
import { Link } from "react-router-dom";

function Pet({pet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <Link to={`/profiles/${pet.id}`}>View Pet Profile</Link>
        </li>
    );
}

export default Pet;