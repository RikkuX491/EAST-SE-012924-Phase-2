import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // Deliverable # 1
    const [displayForm, setDisplayForm] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        animal_type: ""
    })

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    // Deliverable # 2
    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    // Deliverable # 2 & 5
    function handleSubmit(event){
        event.preventDefault()

        updatePet(pet.id, formData)

        toggleDisplayForm()
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // Deliverable # 4
    function handleLikeButtonClick(){
        const updatedLikesObject = {likes: pet.likes + 1}
        updatePet(pet.id, updatedLikesObject)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 1 */}
            { !displayForm ?
            <div className="button-div">

                {/* Deliverable # 2 */}
                <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>

                {/* Deliverable # 3 & 4 */}
                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div> :
            // Deliverable # 2
            <form onSubmit={handleSubmit} className="edit-pet">
                <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                <button type="submit">Save Changes</button>
            </form>
            }
        </li>
    );
}

export default Pet;