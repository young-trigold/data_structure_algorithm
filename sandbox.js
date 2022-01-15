const persons = [
  {name: 'alice', age: 18},
  {name: 'bob', age: 20},
  {name: 'jery', age: 19},
];

const ageAbove19 = (person) => person.age > 19;

const personFound = persons.find(ageAbove19);
console.log(personFound);
