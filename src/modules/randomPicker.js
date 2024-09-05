export function getRandomPerson(people) {
  const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);
  const randomNum = Math.random() * totalWeight;
  let searchWeight = 0;
  for (const person of people) {
    searchWeight += person.weight;
    if (randomNum <= searchWeight) {
      // console.log(totalWeight);
      // console.log(randomNum);
      // console.log(searchWeight);
      // console.log(person);
      return person;
    }
  }
}