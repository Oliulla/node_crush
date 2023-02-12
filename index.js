// // const sum = require("./add");
// // require("./batman");
// // require("./superman");

// // // console.log("hello from index js");
// // // console.log(sum(3, 4));

// // const superHero = require("./super_hero");
// // console.log(superHero.getName());
// // superHero.setName("Superman");
// // console.log(superHero.getName());

// // const superHeroName = require("./super_hero");

// // superHeroName.setName("Superman");
// // console.log(superHeroName.getName());

// // superHeroName.setName("Batman");
// // console.log(superHeroName.getName(superHeroName));

// const { addNum, substractNum } = require("./math");
// console.log(addNum(8, 4));
// console.log(substractNum(8, 4));

// const data = require("./data.json");

// console.log(data);

// const path = require("path");
// console.log(__filename);
// console.log(__dirname);

// ---------callback fn--------------

function greet(name) {
  console.log(`Hello, ${name}`);
}

function red(greetFn) {
    
  const name = "Red";
  return greetFn(name);
}

red(greet);
