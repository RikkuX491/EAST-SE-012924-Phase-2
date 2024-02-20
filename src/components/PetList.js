import Pet from "./Pet"

function PetList({ pets }){
    // console.log(pets)
    // console.log(props)
    // console.log(props.petName)
    // console.log(props['age'])
    // const {petName, age} = props
    // console.log(petName)
    // console.log(age)

    // const petLIs = pets.map(pet => {
    //     // console.log(pet)
    //     return <li className='pet'>{pet.name}</li>
    // })
    // console.log(petLIs)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    )
}

export default PetList;