function Pet({pet}){
    // console.log(pet)
    // console.log(pet.image)
    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;