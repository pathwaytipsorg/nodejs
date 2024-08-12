//Call Stack
console.log("Script: Starting");

//Node API -> 2 sec -> Event Loop
setTimeout(() => {
  console.log("2 Second Timer");
}, 2000);

//Node API -> 0 sec -> Event Loop
setTimeout(() => {
  console.log("0 Second Timer");
}, 0);

//Call Stack
console.log("Script: Stopping");
