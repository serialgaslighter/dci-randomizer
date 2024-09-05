export function updateChance(people) {
  const ul = document.querySelector("#students");

  ul.innerHTML = "";

  const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);

  people.forEach(person => {
    const li = document.createElement("li");
    const chanceToBePicked = (person.weight / totalWeight) * 100;
    li.innerText = `${person.name} ${chanceToBePicked.toFixed(2)}`;
    ul.appendChild(li);
  });
}

export function updateWeight(selectedPerson) {
  selectedPerson.weight /= 2;
}