const weatherModule = require("./utils/weatherModule");

const zip = process.argv[2];

if (!zip) {
  console.log("Please provide zipcode!");
} else {
  weatherModule(zip, (err, data) => {
    if (err === undefined) {
      console.log("Data: ", data);
    }
  });
}
