// Deliverable # 14
import Pet from "./Pet"

// Deliverable # 5 & 9
function PetList({ pets }){

    // Deliverable # 10
    const petComponents = pets.map(pet => {
        // Deliverable # 11 & 12
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        // Deliverable # 10
        <ul className="pet-list">{petComponents}</ul>
    )
}

// Deliverable # 6
export default PetList;