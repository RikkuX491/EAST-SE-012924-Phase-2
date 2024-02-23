import { v4 as uuid } from "uuid";
import { useState } from "react";

// Deliverable # 1
function NewPetForm({addPet}) {

  const [petNameInput, setPetNameInput] = useState("")
  const [petImageInput, setPetImageInput] = useState("")
  const [petAnimalTypeInput, setPetAnimalTypeInput] = useState("")

  /**
   * The commented out code below is a more optimal approach using only 1 state variable & setter function
   * to keep track of the <input> values for all <input> elements in the form. If using this approach, make
   * sure to comment out lines 7 - 9, lines 34 - 44, and lines 54 - 59. Then, uncomment lines 24 - 32, and
   * lines 49 - 52 so that we can use this code for the formData state implementation. Set the value of
   * onChange for each of the <input> elements returned from NewPetForm to be equal to updateFormData, so
   * that the updateFormData function is called in response to a "change" event for each of the <input>
   * elements - whenever the value of any of the <input> elements change. Also, you should make sure that
   * the value attribute of the <input> elements are controlled by state, so the value attribute for the
   * first input should be set to formData.name, the value attribute for the second input should be set to
   * formData.image, and the value attribute for the third input should be set to formData.animal_type
   */

  // const [formData, setFormData] = useState({
  //   name: "",
  //   image: "",
  //   animal_type: ""
  // })

  // function updateFormData(event){
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  function updatePetNameInput(event){
    setPetNameInput(event.target.value)
  }

  function updatePetImageInput(event){
    setPetImageInput(event.target.value)
  }

  function updatePetAnimalTypeInput(event){
    setPetAnimalTypeInput(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()

    // const newPet = {
    //   id: uuid(),
    //   ...formData
    // }

    const newPet = {
      id: uuid(),
      name: petNameInput,
      image: petImageInput,
      animal_type: petAnimalTypeInput
    }

    addPet(newPet)
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updatePetNameInput} type="text" name="name" placeholder="Pet name" value={petNameInput} />
        <input onChange={updatePetImageInput} type="text" name="image" placeholder="Image URL" value={petImageInput} />
        <input onChange={updatePetAnimalTypeInput} type="text" name="animal_type" placeholder="Animal type" value={petAnimalTypeInput} />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;