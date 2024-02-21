import { useState } from "react";

function Pet({pet}){

    // Deliverable # 1
    const [count, setCount] = useState(0)

    // Deliverable # 4
    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function increaseCount(){
        setCount(count + 1)
    }

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>

            {/* Deliverable # 5 & 6 */}
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 2 & 3 */}
            <button onClick={increaseCount} className="like-button">{count} Likes</button>
        </li>
    );
}

export default Pet;