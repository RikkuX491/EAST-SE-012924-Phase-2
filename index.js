const rootElement = document.getElementById('root')

// Vanilla JS version of Lecture # 1 solution code for deliverables
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

// Vanilla JS version of rendering the <div> element from the <App/> component
const divAppElement = document.createElement('div')
divAppElement.className = "app"
rootElement.appendChild(divAppElement)

// Vanilla JS version of rendering the elements from the <Header/> component
const headerElement = document.createElement('header')
divAppElement.appendChild(headerElement)
const h1Element = document.createElement('h1')
h1Element.textContent = "Flatapets"
headerElement.appendChild(h1Element)
const spanElement = document.createElement('span')
spanElement.className = "logo"
spanElement.textContent = "🐈"
h1Element.appendChild(spanElement)

// Vanilla JS version of rendering the <ul> element from the <PetList/> component
const ulElement = document.createElement('ul')
ulElement.className = "pet-list"
divAppElement.appendChild(ulElement)

// Vanilla JS version of rendering the <Pet/> components
pets.forEach(pet => {
    const liElement = document.createElement('li')
    liElement.className = "pet"
    const imgElement = document.createElement('img')
    imgElement.src = pet.image
    imgElement.alt = pet.name
    const h4Element = document.createElement('h4')
    h4Element.textContent = pet.name
    liElement.appendChild(imgElement)
    liElement.appendChild(h4Element)
    ulElement.appendChild(liElement)
})