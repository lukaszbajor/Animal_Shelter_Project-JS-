const animals = [
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
    describe: "Big turtle in countrydasdasdasdasdas",
    id: 8,
  },
];

const box = document.querySelector(".items");
const dogs = document.querySelector(".dogs");
const cats = document.querySelector(".cats");
const horses = document.querySelector(".horses");
const allAnimal = document.querySelector(".all");

const showAllAnimal = () => {
  box.textContent = "";
  animals.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
          <h2 class="name">${el.name}</h2>
          <p class="sex">Sex: ${el.sex}</p>
          <p class="age">Age: ${el.age}</p>
          <p class="describe">"${el.describe}"</p>
          <p class="type">${el.type}</p>
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
      `;
    if (el.type === "Dog") div.classList.add("dog");
    else if (el.type === "Cat") div.classList.add("cat");
    else if (el.type === "Horse") div.classList.add("horse");
    return box.appendChild(div);
  });
};
showAllAnimal();

const showDogs = () => {
  deleteAnimal();
  showAllAnimal();
  const sd = [...document.getElementsByClassName("dog")];
  box.innerHTML = "";
  sd.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
    deleteAnimal();
  });
};

const showCats = () => {
  deleteAnimal();
  showAllAnimal();
  const sc = [...document.getElementsByClassName("cat")];
  box.innerHTML = "";

  sc.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
    deleteAnimal();
  });
};

const showHorses = () => {
  deleteAnimal();
  showAllAnimal();

  const sh = [...document.getElementsByClassName("horse")];
  box.innerHTML = "";

  sh.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
    deleteAnimal();
  });
};

dogs.addEventListener("click", showDogs);
cats.addEventListener("click", showCats);
horses.addEventListener("click", showHorses);
allAnimal.addEventListener("click", () => {
  // box.innerHTML = "";
  deleteAnimal();
  showAllAnimal();
  deleteAnimal();
});

//ADD PANEL

const addPanel = document.querySelector(".add-panel");
const btnAdd = document.querySelector(".btn-add");
const showAddPanel = () => {
  addPanel.classList.add("reset");
};

btnAdd.addEventListener("click", showAddPanel);

// EDIT ANIMAL
// const asdas = () => {
//   const editBtn = document.querySelectorAll(".edit");
//   editBtn.forEach((item, id) => {
//     item.addEventListener("click", () => {
//       console.log("kliknieto");
//       // console.log(id);
//     });
//   });
// };
// asdas();

//DELETE ANIMAL

const deleteAnimal = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((item, id) => {
    item.addEventListener("click", (e) => {
      e.target.closest("div.item").remove();
      animals.splice(id, 1);
      console.log(id);
      console.log(animals);
    });
  });
};
deleteAnimal();
