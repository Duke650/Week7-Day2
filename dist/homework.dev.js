"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//========== Exercise #1 ===========//

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
var person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [{
    oberwise: "Chocolate",
    dunkin: "Vanilla",
    culvers: "All of them",
    mcDonalds: "Sham-rock-shake",
    cupids_candies: "Chocolate Malt"
  }]
};

var favFood = function favFood(person, type) {
  var result = "";

  for (key in person) {
    if (key == "pizza") {
      result += "My favorite pizza is ";

      for (var i = 0; i < person[key].length; i++) {
        result += person[key][i];
      }

      result += "\n";
    } else if (key == "tacos") {
      result += "My favorite tacos are ".concat(person[key], "\n");
    } else if (key == "burgers") {
      result += "My favorite burgers are ".concat(person[key], "\n");
    } else if (key == "ice_cream") {
      result += "My favorite ice cream is ";

      for (var _i = 0; _i < person[key].length; _i++) {
        result += person[key][_i] + " ";
      }
    } else if (key == "shakes") {
      result += "\nMy favorite shakes are from ";
      console.log('person.shakes[0] :>> ', person.shakes[0]);

      for (key in person.shakes[0]) {
        result += "\nMy favorite shakes are from ".concat(key, " and my favorite flavor is ").concat(person.shakes[0][key]);
      }
    }
  }

  return result;
}; //======= Exercise #2=========//

/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/
// Create our Person Class
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


var Person =
/*#__PURE__*/
function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "printInfo",
    value: function printInfo() {
      return "My name is ".concat(this.name, " and i am ").concat(this.age, " years old");
    }
  }, {
    key: "addYear",
    value: function addYear() {
      this.age++;
    }
  }]);

  return Person;
}();

var person1 = new Person("Bob", 33);
var person2 = new Person("Fred", 95);
person2.addYear();
person2.addYear();
person2.addYear();
console.log(person1.printInfo());
console.log(person2.printInfo()); // ============= Exercise #3 ============//

/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

var fetchData = function fetchData() {
  var response, data;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("http://ergast.com/api/f1/2008/5/driverStandings.json"));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log('data :>> ', data);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

console.log(fetchData());