import { useState } from "react";

function Pet({pet}){

    const [count, setCount] = useState(0)
    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // Example code with Vanilla JS code (lines 11 - 16)
    // let counter = 0
    // const buttonElement = document.querySelector('li button')
    // buttonElement.addEventListener('click', () => {
    //     counter++
    //     buttonElement.textContent = `${counter} Likes`
    // })

    function increaseCount(){
        setCount(count + 1)
    }

    function toggleDisplayAnimalType(){
        // console.log('Toggling Display Animal Type!')
        // setDisplayAnimalType(!displayAnimalType)
        // setDisplayAnimalType((banana) => !banana)
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={increaseCount} className="like-button">{count} Likes</button>
        </li>
    );
}

export default Pet;