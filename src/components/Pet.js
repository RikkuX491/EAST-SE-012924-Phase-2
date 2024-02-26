import { useState } from "react";

function Pet({pet, deletePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { true ?
            <div className="button-div">
                <button className="update-button">Update Pet</button>
                <button className="like-button">0 Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div> :
            <form>
                <input type="text" name="name" placeholder="Pet name" />
                <input type="text" name="image" placeholder="Image URL" />
                <input type="text" name="animal_type" placeholder="Animal type" />
                <button className="save-changes-button" type="submit">Save Changes</button>
            </form>
            }
        </li>
    );
}

export default Pet;