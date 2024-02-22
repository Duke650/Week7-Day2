//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const favFood = (person, type) => {
    let result = ""
    for (key in person) {
        if (key == "pizza") {
            result += `My favorite pizza is `
            for (let i = 0; i < person[key].length; i++) {
                result += person[key][i]
            }
            result += "\n"
        } else if (key == "tacos") {
            result += `My favorite tacos are ${person[key]}\n`
        } else if (key == "burgers") {
            result += `My favorite burgers are ${person[key]}\n`
        } else if (key == "ice_cream") {
            result += "My favorite ice cream is "
            for (let i = 0; i < person[key].length; i++) {
                result += person[key][i] + " "
            }
        } else if (key == "shakes") { 
            result += "\nMy favorite shakes are from "
            console.log('person.shakes[0] :>> ', person.shakes[0]);
            for (key in person.shakes[0]) {
                result += `\nMy favorite shakes are from ${key} and my favorite flavor is ${person.shakes[0][key]}`
                
            }
        }
    }
    return result
}




//======= Exercise #2=========//
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


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo() {
        return `My name is ${this.name} and i am ${this.age} years old`
    }

    addYear() {
        this.age++
    }
}

const person1 = new Person("Bob", 33)
const person2 = new Person("Fred", 95)
person2.addYear()
person2.addYear()
person2.addYear()
console.log(person1.printInfo());
console.log(person2.printInfo());

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const fetchData = async () => {
    try {
        const response = await fetch("http://ergast.com/api/f1/2008/5/driverStandings.json")
        const data = await response.json()
        console.log('data :>> ', data);
    } catch (err) {
        console.error(err);
    }
}

console.log(fetchData());

// CodeWars

// #1 Possibilities Array

function isAllPossibilities(x){
    let setArr = new Set(x)
    console.log(setArr)
    for (let i = 0; i < x.length; i++) {
        if(!setArr.has(i)) {
          return false
        }
    }
    return true
  
  }

  // # 2 Consecutive items

  function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === a && arr[i + 1] === b) || (arr[i] === b && arr[i + 1] === a)) {
            return true
        }
    }
    return false
  }