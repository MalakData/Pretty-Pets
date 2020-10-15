

let animals = [
  {
    "type": "dog",
    "sex": "male",
    "age": 7,
    "name": "Mano",
    "country": "Sudia Arabic ",
    "image": "images/pet-01.png"
  },
  {
    "type": "cat",
    "sex": "femal",
    "age": 8,
    "name": "Soso",
    "country": "USA",
    "image": "images/pet-02.png"
  },
  {
    "type": "dog",
    "sex": "male",
    "age": 7,
    "name": "Slver",
    "country": "The United Arab Emirates ",
    "image": "images/pet-03.png"
  },
  {
    "type": "dog",
    "sex": "male",
    "age": 4,
    "name": "Ebir",
    "country": "Kuwait ",
    "image": "images/pet-04.png"
  },
]

let Stories = [
  {
    "title": "Ramy dog",
    "storie": "The dog was a vagabond, lost, and in poor condition before Sally adopted her",
    "image": "C:\Users\DELL\Documents\Barmej\Fullstack-Project-1\images\1.png"
  },
  {
    "title": "Mayay dog",
    "storie": "The dog was a vagabond, lost, and in poor condition before Fatamh adopted her",
    "image": "C:\Users\DELL\Documents\Barmej\Fullstack-Project-1\images\2.png"
  },
  {
    "title": "Koko dog",
    "storie": "The dog was a vagabond, lost, and in poor condition before Malak adopted her",
    "image": "C:\Users\DELL\Documents\Barmej\Fullstack-Project-1\images\3.png"
  },

]

// function myFunction() {
//   var x = document.getElementsByClassName("widget__desc").Animals;
//   document.getElementById("demo").innerHTML = x;
// }
const input = document.querySelector(".form-group input");
document.querySelector("form").addEventListener('submit', searchCity)
function searchCity(event) {
  event.preventDefault()

  // const list = []
  // animals.map(animal => {
  //   if(animal.country.includes(input.value.trim())){
  //     list.push(animal)
  //   }
  // })

  //  const list = animals.filter(animal => animal.country.toLowerCase().includes(input.value.trim().toLowerCase()))
  const list = animals.filter(animal => animal.country.toLowerCase().indexOf(input.value.trim().toLowerCase()) !== -1)
  showOutput(list)

}
function showOutput(list) {
  const show = document.querySelector(".widgets.is-searchResults")
  show.innerHTML = ""
  list.map(item => {
    show.innerHTML += ` <div class="widget">
   <div class="widget__image">
       <img src=${item.image} alt="pet image">
   </div>
   <div class="widget__desc">
       <h4>${item.name}</h4>
       <p>${item.sex} | ${item.type}</p>
       <p>${item.country}</p>
   </div>`
  })
}

function showStories(stories) {
  const showOutput = document.querySelector(".stories.widgets");
  showOutput.innerHTML = ""
  stories.map(item => {
    showOutput.innerHTML += `<div class="widget">
    <div class="widget__image">
        <img src=${item.image} alt="graphic-image">
    </div>
    <div class="widget__desc">
        <h3>${item.title}</h3>
        <a href="#" class="link">${item.storie}</a>
    </div>
</div>`
  })
}
