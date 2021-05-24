//Array Animals
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
//-----------------------------------------------------

//Variables
const box = document.querySelector(".items");
const dogs = document.querySelector(".dogs");
const cats = document.querySelector(".cats");
const horses = document.querySelector(".horses");
const allAnimal = document.querySelector(".all");
const countOfPlace = document.querySelector(".count");

//Show animals with Array
const showAllAnimal = () => {
  countOfPlace.textContent = animals.length;
  box.textContent = "";
  animals.filter((el) => {
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
    box.appendChild(div);
  });
};

showAllAnimal();
// const showElements = document.querySelector(".show-elements");

const showDogs = () => {
  showAllAnimal();
  const all = [...document.getElementsByClassName("item")];

  all.filter((item) => {
    if (!item.classList.contains("dog")) {
      item.classList.add("show-elements");
    }
  });
};

const showCats = () => {
  showAllAnimal();
  const all = [...document.getElementsByClassName("item")];

  all.filter((item) => {
    if (!item.classList.contains("cat")) {
      item.classList.add("show-elements");
    }
  });
};

const showHorses = () => {
  showAllAnimal();
  const all = [...document.getElementsByClassName("item")];

  all.filter((item) => {
    if (!item.classList.contains("horse")) {
      item.classList.add("show-elements");
    }
  });
};

dogs.addEventListener("click", showDogs);
cats.addEventListener("click", showCats);
horses.addEventListener("click", showHorses);

const showAll = () => {
  showAllAnimal();
  const all = [...document.getElementsByClassName("item")];

  all.filter((item) => {
    if (
      item.classList.contains("horse") ||
      item.classList.contains("dog") ||
      item.classList.contains("cat")
    ) {
      item.classList.remove("show-elements");
    }
  });
};

allAnimal.addEventListener("click", showAll);

//--------------------------------------------------
//ADD PANEL
//--------------------------------------------------
const addPanel = document.querySelector(".add-panel");
const btnAdd = document.querySelector(".btn-add");
const closePanel = document.querySelector(".add-panel-X");
//Show/Close Panel
const showAddPanel = () => {
  addPanel.classList.add("reset");
};
btnAdd.addEventListener("click", showAddPanel);

const closeAddPanel = () => {
  addPanel.classList.remove("reset");
};

closePanel.addEventListener("click", closeAddPanel);

//----------------------------------------------------
//CHANGE COUNT
//----------------------------------------------------
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
};

//ADD ANIMAL
const inpName = document.querySelector(".inpname");
const inpAge = document.querySelector(".inpage");
const inpSex = document.querySelector(".inpsex");
let selectValue = document.getElementById("type");
const taDescribe = document.querySelector(".inpdescribe");
const addAnimalBtn = document.querySelector(".add-animal");

const addAnimal = () => {
  const name = inpName.value;
  const sex = inpSex.value;
  let select = selectValue.options[selectValue.selectedIndex].text;
  const age = inpAge.value;
  const describe = taDescribe.value;
  let id = animals.length;
  if (animals.length < 30) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.dataset.animalId = id;
    div.innerHTML = `
          <h2 class="name">${name}</h2>
          <p class="sex">Sex: ${sex}</p>
          <p class="age">Age: ${age}</p>
          <p class="describe">"${describe}"</p>
          <p class="type">${select}</p>
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete" onclick=deleteAnimal(${id})>Delete</button>
          </div>
          `;
    animals.push({
      type: select,
      name: name,
      age: age,
      sex: sex,
      describe: describe,
      id: id,
    });

    countOfAnimal();

    box.appendChild(div);
    resetData();
  }
};
addAnimalBtn.addEventListener("click", addAnimal);
//--------------------------------------------------

//Reset data with panel
const resetBtn = document.querySelector(".reset-data");
const resetData = () => {
  inpName.value = "";
  inpAge.value = "";
  inpSex.value = "";
  taDescribe.value = "";
  select = selectValue.options[(selectValue.selectedIndex = 0)].text;
};
resetBtn.addEventListener("click", resetData);
