// -------------------------------------------- OBJECTS ----------------------------------------

const person = {
  name: "Devanshu",
  age: 22,
  isAdult: true,
  favColors: ["Blue", "Green"],
};

console.log(person);
console.log(person.name);
// or
console.log(person["name"]);

// add the property : it will add it in the Last
person.gender = "male";

// to delete the person name
// delete person.name

console.log(person.age);
console.log(person.isAdult);

// Objects Methods

// print the value --> keys
console.log(Object.keys(person));

// print the keys --> value
console.log(Object.values(person));

// print the both in the form of Arrays
console.log(Object.entries(person));
