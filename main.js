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
            <button class="edit" onclick=editAnimal(${el.id})>Edit</button>
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

//--------------------------------------------------

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
const errorName = document.querySelector(".error-name");
const errorAge = document.querySelector(".error-age");
const errorSex = document.querySelector(".error-sex");
const errorSelect = document.querySelector(".error-select");
const errorDescribe = document.querySelector(".error-describe");
let flag = false;

const addAnimal = () => {
  const name = inpName.value;
  const sex = inpSex.value;
  let select = selectValue.options[selectValue.selectedIndex].text;
  const age = inpAge.value;
  const describe = taDescribe.value;
  let id = animals.length;
  if ((flag = true)) {
    if (name !== "") {
      flag = true;
      errorName.textContent = "";
    } else {
      errorName.textContent = "This field cannot empty!";
      return (flag = false);
    }
    if (sex === "F" || sex === "M") {
      errorSex.textContent = "";
      flag = true;
    } else {
      errorSex.textContent = "Only F or M";
      return (flag = false);
    }
    if (age !== "") {
      errorAge.textContent = "";
      flag = true;
    } else {
      errorAge.textContent = "This field cannot empty!";
      return (flag = false);
    }

    if (
      selectValue.options[selectValue.selectedIndex].text != "Choose any option"
    ) {
      errorSelect.textContent = "";
      flag = true;
    } else {
      errorSelect.textContent = "Choose any option : Dog/Cat/Horse!";
      return (flag = false);
    }
    if (describe !== "") {
      errorDescribe.textContent = "";
      flag = true;
    } else {
      errorDescribe.textContent = "Write any words about animal!";
      return (flag = false);
    }
    {
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
            <button class="edit" onclick=editAnimal(${id})>Edit</button>
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
    }
    return (flag = true);
  } else {
    return (flag = false);
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

  errorName.textContent = "";
  errorAge.textContent = "";
  errorSex.textContent = "";
  errorSelect.textContent = "";
  errorDescribe.textContent = "";
};
resetBtn.addEventListener("click", resetData);

//EDIT PANEL
//--------------------------------------------------
const editPanel = document.querySelector(".edit-panel");
const btnEdit = document.querySelector(".edit");
const closePanelX = document.querySelector(".edit-panel-X");

const eInpName = document.querySelector(".e-inpname");
const eInpAge = document.querySelector(".e-inpage");
const eInpSex = document.querySelector(".e-inpsex");
const eSelectValue = document.getElementById("e-type");
let eselect = selectValue.options[selectValue.selectedIndex];
const eTaDescribe = document.querySelector(".e-inpdescribe");
//Show/Close Panel
// const showEditPanel = () => {
//   editPanel.classList.add("reset");
// };
// // btnsEdit.forEach((btn) => {
// btn.addEventListener("click", showEditPanel);
// // });
const updateInfBtn = document.querySelector(".edit-animal");
const editAnimal = (id) => {
  eInpName.value = animals[id].name;
  eInpSex.value = animals[id].sex;
  eInpAge.value = animals[id].age;
  eselect.text = animals[id].type;
  eTaDescribe.value = animals[id].describe;
  editPanel.classList.add("reset");

  const updateInfo = () => {
    animals[id].name = eInpName.value;
    animals[id].sex = eInpSex.value;
    animals[id].age = eInpAge.value;
    animals[id].type = eselect.text;
    animals[id].describe = eTaDescribe.value;
    updateInfBtn.removeEventListener("click", updateInfo);
    editPanel.classList.remove("reset");
    showAll();
  };
  updateInfBtn.addEventListener("click", updateInfo);
};
const closeEditPanel = () => {
  editPanel.classList.remove("reset");
};
closePanelX.addEventListener("click", closeEditPanel);
//----------------------------------------------------
