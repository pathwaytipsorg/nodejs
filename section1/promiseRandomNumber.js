function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const randomNum = Math.random();

      // Resolve the promise if the random number is greater than 0.5
      if (randomNum > 0.5) {
        resolve(`Success! Random number: ${randomNum}`);
      } else {
        // Reject the promise if the random number is less than or equal to 0.5
        reject(`Error! Random number: ${randomNum}`);
      }
    }, 2000); // Simulating a 2-second asynchronous operation
  });
}

// Call the asyncOperation function
asyncOperation()
  .then((result) => {
    console.log(result); // Handle the resolved state
  })
  .catch((error) => {
    console.error(error); // Handle the rejected state
  });

console.log("Hello Are you done with coding!!!");
