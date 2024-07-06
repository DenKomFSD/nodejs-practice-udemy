// const start = performance.now();

// setTimeout(() => {
//   console.log(performance.now() - start);
//   console.log("Прошла секунда");
// }, 1000);

// function myFn(arg) {
//   console.log(`Аргумент => ${arg}`);
// }

// setTimeout(myFn, 1500, "SUPER");

// const boom = setTimeout(() => {
//   console.log("Bomb have been planted");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(boom);
//   console.log("The bomb have been defused)");
// }, 1000);

//проверка на окончание

const fs = require("fs");

console.log("Init");

setTimeout(() => {
  console.log(performance.now(), "Timer 100 sec.");
}, 100);

setImmediate(() => {
  console.log("Timer immediate");
  Promise.resolve().then(() => {
    console.log("Promise 234");
  });
});

fs.readFile(__filename, () => {
  console.log("File read");
  Promise.resolve().then(() => {
    console.log("Promise 123");
  });
});

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => console.log("Tick"));

console.log("Final");
