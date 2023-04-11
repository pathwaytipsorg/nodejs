const weatherModule = require("./utils/weatherModule");

const zip = process.argv[2];
//zip = "M6E2Z2"
weatherModule(zip, (err, data) => {
  console.log("Error: ", err);
  console.log("Data: ", data);
});
