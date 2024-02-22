import { useState } from "react";

function AddPet({addPet}){

    // const [petsState, setPetsState] = useState(pets)

    // console.log(petsState)

    return (
        <button onClick={addPet}>Add Pet</button>
    )
}

export default AddPet;