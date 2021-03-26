const animals = [
  {
    type: "Dog",
    name: "Diplodok",
    age: 2,
    sex: "M",
    describe: "Small dog in country",
  },
  {
    type: "Dog",
    name: "Azor",
    age: 2,
    sex: "M",
    describe: "Small dog in country",
  },
  {
    type: "Cat",
    name: "Mea",
    age: 1,
    sex: "F",
    describe: "Small cat in country",
  },
  {
    type: "Cat",
    name: "Kami",
    age: 1,
    sex: "F",
    describe: "Small cat in country",
  },
  {
    type: "Hamster",
    name: "Fini",
    age: 1.5,
    sex: "M",
    describe: "Small hamster in country",
  },
  {
    type: "Horse",
    name: "Alex",
    age: 10,
    sex: "M",
    describe: "Big turtle in countrydasda",
  },
  {
    type: "Dog",
    name: "Ksenia",
    age: 3.5,
    sex: "F",
    describe: "Small dog in country",
  },
  {
    type: "Horse",
    name: "Jonas",
    age: 10,
    sex: "M",
    describe: "Big turtle in countrydasda",
  },
  {
    type: "Turtle",
    name: "John",
    age: 10,
    sex: "M",
    describe: "Big turtle in countrydasdasdasdasdas",
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
  showAllAnimal();
  const sd = [...document.getElementsByClassName("dog")];
  box.innerHTML = "";
  sd.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
  });
};

const showCats = () => {
  showAllAnimal();
  const sc = [...document.getElementsByClassName("cat")];
  box.innerHTML = "";

  sc.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
  });
};

const showHorses = () => {
  showAllAnimal();
  const sh = [...document.getElementsByClassName("horse")];
  box.innerHTML = "";

  sh.map((item) => {
    box.innerHTML += `<div class="item">${item.innerHTML} </div>`;
  });
};

dogs.addEventListener("click", showDogs);
cats.addEventListener("click", showCats);
horses.addEventListener("click", showHorses);
allAnimal.addEventListener("click", () => {
  // box.innerHTML = "";
  showAllAnimal();
});
