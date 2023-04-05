//filter returns a new array containing all elements of the original array that pass a test implemented by the provided function.
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

//find, on the other hand, returns the value of the first element in the array that satisfies the provided testing function.
//If no values satisfy the testing function, undefined is returned
const numbers2 = [1, 2, 3, 4];
const firstEvenNumber = numbers2.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // 2
