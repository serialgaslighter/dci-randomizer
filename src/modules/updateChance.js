import { people } from "../data/data.js";


export function updateChance(people) {
  const ul = document.querySelector("#students");

  const existingItems = Array.from(ul.children).map(child => ({
    name: child.querySelector(".person-name").innerText,
    hasLineThrough: child.querySelector(".person-name").classList.contains("crossed-out")
  }));

  ul.innerHTML = "";

  const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);

  people.forEach(person => {
    const li = document.createElement("li");
    const chanceToBePicked = (person.weight / totalWeight) * 100;
    const div = document.createElement("div");
    div.className = "person-name";
    div.innerText = person.name;

    const existingItem = existingItems.find(item => item.name === person.name);
    if (existingItem && existingItem.hasLineThrough) {
      div.classList.add("crossed-out");
    }
    li.appendChild(div);
    li.innerHTML += `<div>${chanceToBePicked.toFixed(2)}</div>`;
    ul.appendChild(li);
  });
}

export function updateWeight(selectedPerson) {
  selectedPerson.weight /= 2;
  if (selectedPerson.weight < 0.00001) {
    resetWeightIfTooSmall(people);
  }
}

export function resetWeightIfTooSmall(arrayOfPeople) {
  arrayOfPeople.forEach(person => {
    console.log("RESET");
    if (person.weight !== 0) {
      return person.weight = 1;
    }
  })
}