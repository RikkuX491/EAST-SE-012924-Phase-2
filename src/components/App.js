// Deliverable # 3
import Header from "./Header"

// Deliverable # 6
import PetList from "./PetList"

function App() {

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  return (
    // Deliverable # 1
    <div className="app">
        {/* Deliverable # 4 */}
        <Header/>

        {/* Deliverable # 7 & 8 */}
        <PetList pets={pets}/>
    </div>
  );
}

export default App;