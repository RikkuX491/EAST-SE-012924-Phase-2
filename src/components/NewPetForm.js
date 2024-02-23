import { v4 as uuid } from "uuid";
import { useState } from "react";

function NewPetForm({addPet}) {

  // const [petNameInput, setPetNameInput] = useState("")
  // const [petImageInput, setPetImageInput] = useState("")
  // const [petAnimalTypeInput, setPetAnimalTypeInput] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // function updatePetNameInput(event){
  //   setPetNameInput(event.target.value)
  // }

  // function updatePetImageInput(event){
  //   setPetImageInput(event.target.value)
  // }

  // function updatePetAnimalTypeInput(event){
  //   setPetAnimalTypeInput(event.target.value)
  // }

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      id: uuid(),
      ...formData
      // name: formData.name,
      // image: formData.image,
      // animal_type: formData.animal_type
    }

    // const newPet = {
    //   id: uuid(),
    //   name: petNameInput,
    //   image: petImageInput,
    //   animal_type: petAnimalTypeInput
    // }

    addPet(newPet)
    
    // event.target.reset()
    
    setFormData({
      name: "",
      image: "",
      animal_type: ""
    })
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;