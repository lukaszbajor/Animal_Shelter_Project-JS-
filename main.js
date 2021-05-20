let animals = [
  {
    type: "Dog",
    name: "Diplodok",
    age: 2,
    sex: "M",
    describe: "Small dog in country",
    id: 0,
  },
  {
    type: "Dog",
    name: "Azor",
    age: 2,
    sex: "M",
    describe: "Small dog in country",
    id: 1,
  },
  {
    type: "Cat",
    name: "Mea",
    age: 1,
    sex: "F",
    describe: "Small cat in country",
    id: 2,
  },
  {
    type: "Cat",
    name: "Kami",
    age: 1,
    sex: "F",
    describe: "Small cat in country",
    id: 3,
  },
  {
    type: "Hamster",
    name: "Fini",
    age: 1.5,
    sex: "M",
    describe: "Small hamster in country",
    id: 4,
  },
  {
    type: "Horse",
    name: "Alex",
    age: 10,
    sex: "M",
    describe: "Big turtle in countrydasda",
    id: 5,
  },
  {
    type: "Dog",
    name: "Ksenia",
    age: 3.5,
    sex: "F",
    describe: "Small dog in country",
    id: 6,
  },
  {
    type: "Horse",
    name: "Jonas",
    age: 10,
    sex: "M",
    describe: "Big turtle in countrydasda",
    id: 7,
  },
  {
    type: "Turtle",
    name: "John",
    age: 10,
    sex: "M",
    describe: "Big turtle in countryda",
    id: 8,
  },
];

const box = document.querySelector(".items");
const dogs = document.querySelector(".dogs");
const cats = document.querySelector(".cats");
const horses = document.querySelector(".horses");
const allAnimal = document.querySelector(".all");
const countOfPlace = document.querySelector(".count");

const showAllAnimal = () => {
  countOfPlace.textContent = animals.length;
  box.textContent = "";
  animals.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.dataset.animalId = el.id;
    div.innerHTML = `
          <h2 class="name">${el.name}</h2>
          <p class="sex">Sex: ${el.sex}</p>
          <p class="age">Age: ${el.age}</p>
          <p class="describe">"${el.describe}"</p>
          <p class="type">${el.type}</p>
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete" onclick=deleteAnimal(${el.id})>Delete</button>
          </div>
      `;
    if (el.type === "Dog") div.classList.add("dog");
    else if (el.type === "Cat") div.classList.add("cat");
    else if (el.type === "Horse") div.classList.add("horse");
    return box.appendChild(div);
  });
};

showAllAnimal();

// const showDogs = () => {
//   showAllAnimal();
//   const sd = [...document.getElementsByClassName("dog")];
//   box.innerHTML = "";
//   sd.forEach((item) => {
//     box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
//   });
// };

// const showCats = () => {
//   showAllAnimal();
//   const sc = [...document.getElementsByClassName("cat")];
//   box.innerHTML = "";

//   sc.forEach((item) => {
//     deleteAnimal();
//     box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
//   });
// };

// const showHorses = () => {
//   showAllAnimal();
//   const sh = [...document.getElementsByClassName("horse")];
//   box.innerHTML = "";

//   sh.forEach((item) => {
//     box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
//   });
// };

// dogs.addEventListener("click", showDogs);
// cats.addEventListener("click", showCats);
// horses.addEventListener("click", showHorses);
// allAnimal.addEventListener("click", () => {
//   // box.innerHTML = "";
//   showAllAnimal();
// });

//ADD PANEL

const addPanel = document.querySelector(".add-panel");
const btnAdd = document.querySelector(".btn-add");
const showAddPanel = () => {
  addPanel.classList.add("reset");
};

btnAdd.addEventListener("click", showAddPanel);

//CHANGE COUNT

const countOfAnimal = () => {
  countOfPlace.textContent = animals.length;
};
// EDIT ANIMAL

// DELETE ANIMAL
// const deleteBtns = document.querySelectorAll(".delete");

const deleteAnimal = (id) => {
  animals = animals.filter((animal) => {
    if (animal.id === id) {
      document.querySelector(`[data-animal-id="${id}"]`).remove();
      return false;
    }
    return true;
  });
  countOfAnimal();
  console.table(animals);
};

//ADD ANIMAL
const inpName = document.querySelector(".inpname");
const inpAge = document.querySelector(".inpage");
const inpSex = document.querySelector(".inpsex");
const selectValue = document.getElementById("type");
const taDescribe = document.querySelector(".inpdescribe");
const addAnimalBtn = document.querySelector(".add-animal");

const addAnimal = () => {
  const name = inpName.value;
  const sex = inpSex.value;
  const age = inpAge.value;
  const describe = taDescribe.value;
  let id = animals.length++;

  const div = document.createElement("div");
  div.classList.add("item");
  div.dataset.animalId = id;
  div.innerHTML = `
          <h2 class="name">${name}</h2>
          <p class="sex">Sex: ${sex}</p>
          <p class="age">Age: ${age}</p>
          <p class="describe">"${describe}"</p>
          <p class="type">DOG</p>
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete" onclick=deleteAnimal(${id})>Delete</button>
          </div>
          `;
  animals.push({
    type: "XD",
    name: name,
    age: age,
    sex: sex,
    describe: describe,
    id: id,
  });
  countOfAnimal();
  return box.appendChild(div);
  // console.log(name, age, describe);
};
console.table(animals);
addAnimalBtn.addEventListener("click", addAnimal);
