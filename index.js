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

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// function red(greetFn) {

//   const name = "Red";
//   return greetFn(name);
// }

// red(greet);

// const fs = require("node:fs/promises");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("first");
// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//     console.log("second");
//   } catch (error) {
//     console.log(error);
//   }
// }
// console.log("third");
// readFile();

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  // res.end(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/josn" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Lee",
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("page not found!");
  }

  // const superHero = {
  //   firstName: "Dawyne",
  //   lastName: "Bruce",
  // };

  // res.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream("./index.html", "utf-8").pipe(res);

  // const html = fs.readFileSync("./index.html", "utf-8");
  // res.end(html);
});

server.listen(3000, () => {
  console.log("I am listening port 3000");
});
