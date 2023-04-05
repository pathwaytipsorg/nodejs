//Type 1
const sq1 = function (x) {
  return x * x;
};

console.log(sq1(3));


//Type 2
const sq2 = (x) => {
  return x * x;
};

console.log(sq2(3));


//Type 3
const sq3 = (x) => x * x;

console.log(sq3(3));


//traditional function expressions
const event1 = {
  name: "Mike1",
  printEmployeeList: function () {
    console.log("New employee name is " + this.name);
  },
};

event1.printEmployeeList();


//drawbacks compared to traditional function expressions
const event2 = {
  name: "Mike2",
  printEmployeeList: () => {
    console.log("New employee name is " + this.name);
  },
};

event2.printEmployeeList();


//To overcome these limitations
const event3 = {
  name: "Mike3",
  printEmployeeList() {
    console.log("New employee name is " + this.name);
  },
};

event3.printEmployeeList();


const event4 = {
  name: "Mike4",
  shiftDetails: ["Mon", "Wed", "Fri"],
  //ES6
  printEmployeeList() {
    const that = this;

    console.log("New employee name is " + that.name);

    //Arrow
    this.shiftDetails.forEach((d) => {
      console.log(that.name + " working on " + d);
    });
  },
};

event4.printEmployeeList();
