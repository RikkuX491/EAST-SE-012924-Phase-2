import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
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

    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(event){
        event.preventDefault()
        
        // console.log(formData)
        // console.log(pet.id)

        updatePet(pet.id, formData)

        toggleDisplayForm()
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleLikeButtonClick(){
        // console.log({likes: pet.likes + 1})
        const updatedLikesObject = {likes: pet.likes + 1}
        updatePet(pet.id, updatedLikesObject)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { !displayForm ?
            <div className="button-div">
                <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div> :
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