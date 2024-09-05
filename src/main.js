import { getRandomPerson } from "./modules/randomPicker.js";
import { updateChance, updateWeight } from "./modules/updateChance.js";
import { people } from "./data/data.js";

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const pickedPerson = getRandomPerson(people);
  const outputField = document.querySelector("#output");
  outputField.innerText = pickedPerson.name;
  updateWeight(pickedPerson);
  updateChance(people);
});

updateChance(people);