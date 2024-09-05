export function getRandomPerson(people) {
  const totalWeight = people.reduce((sum, person) => sum + person.weight, 0);
  const randomNum = Math.random() * totalWeight;
  let searchWeightWeight = 0;
  for (const person of people) {
    searchWeightWeight += person.weight;
    if (randomNum <= searchWeightWeight) {
      // console.log(totalWeight);
      // console.log(randomNum);
      // console.log(searchWeightWeight);
      // console.log(person);
      return person;
    }
  }
}