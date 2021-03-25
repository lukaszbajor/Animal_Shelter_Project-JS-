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
    type: "Dog",
    name: "Ksenia",
    age: 3.5,
    sex: "F",
    describe: "Small dog in country",
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
const allAnimal = document.querySelector(".all");

const showAllAnimal = () => {
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
    box.appendChild(div);
  });
};

showAllAnimal();

const showDogs = () => {
  box.textContent = "";
  animals.forEach((el) => {
    if (el.type == "Dog") {
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
      box.appendChild(div);
    }
  });
};

const showCats = () => {
  box.textContent = "";
  animals.forEach((el) => {
    if (el.type == "Cat") {
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
      box.appendChild(div);
    }
  });
};

dogs.addEventListener("click", showDogs);
allAnimal.addEventListener("click", () => {
  box.textContent = "";
  showAllAnimal();
});
cats.addEventListener("click", showCats);
allAnimal.addEventListener("click", () => {
  box.textContent = "";
  showAllAnimal();
});
