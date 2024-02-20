// Deliverable # 13
function Pet({pet}){
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
        </li>
    )
}

// Deliverable # 14
export default Pet;