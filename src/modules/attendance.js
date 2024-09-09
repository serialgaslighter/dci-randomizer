import { updateChance } from "./updateChance.js";
import { people } from "../data/data.js";

export function checkAttendance() {
  const ul = document.querySelector("ul");
  ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("person-name")) {
      e.target.classList.toggle("crossed-out");

      const personName = e.target.innerText;
      const person = people.find(p => p.name === personName);

      const highestWeight = Math.max(...people.filter(p => p.weight > 0).map(p => p.weight));

      person.weight = person.weight === 0 ? highestWeight : 0;
    }
    updateChance(people);
  });
}
