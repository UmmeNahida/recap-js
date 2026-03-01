const country = ["bangladesh", "USA", "Pakistan"]

const district = ["Habiganj", "Sylhet"]

const mergedArray = [...country, ...district] // spread operator

// console.log(mergedArray)

// rest operator
const myFunc = (...params) => {
  console.log(params);
};

myFunc(...mergedArray); // [ 'bangladesh', 'USA', 'Pakistan', 'Habiganj' ]