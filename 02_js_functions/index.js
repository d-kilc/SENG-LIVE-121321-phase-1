// ✅ Declaring, Referencing, and Invoking Functions

  // function playSong() {
  //   return "playing some song";
  // }

  // print a reference to the 'playSong' function

    // console.log(playSong);

  // call function and evaluate logic
  
    // console.log(playSong());

// ✅ Parameters vs. Arguments

  // Parameters go with function definitions, arguments go with function invocations

  // using the playSong function again, let's define a parameter 'song'

    // function playSong(song) {
    //   return "playing some song";
    // }

  // how can we use the paramater to make our code more dynamic?

    // function playSong(songName) {
    //   return `playing: ${songName}`;
    // }

  // now invoke the function and pass in an argument

    // console.log(
    //   playSong("darude - sandstorm")
    // );

// ✅ Arrow Functions

// const squareMe = n => n*n;

// const squareMe = (n) => {
//   return n*n;
// }

// console.log('squareMe(6): ',squareMe(6))

// debugging function

// function log(obj) {
//   console.log(obj);
//   return obj;
// }

// ✅ First Class / Higher Order Functions

  // regular first class function => can treated like any other JS object

  // higher order function => accepts another function as a parameter or returns a function
  // https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet

// console.log('starting now');
// window.setTimeout(() => {
//   console.log('1 seconds later')
// }, 1000);
// window.setTimeout(() => {
//   console.log('2 seconds later')
// }, 2000);
// window.setTimeout(() => {
//   console.log('3 seconds later')
// }, 3000);
// window.setTimeout(() => {
//   console.log('4 seconds later')
// }, 4000);
// window.setTimeout(() => {
//   console.log('5 seconds later')
// }, 5000);

// Alternatively

// function callback() {
//   console.log('2 seconds later')
// }
// console.log('starting now');
// window.setTimeout(callback, 2000);


// let counter = 10;
// const interval = window.setInterval(() => {
//   console.log(counter);
//   if(counter === 0) {
//     window.clearInterval(interval);
//   }
//   counter--; 
// }, 1000);


// ✅ Scope

// function outerFunction() {
//   let name = "outer";
//   let outer = "outer";
//   console.log("name", name);
//   console.log("outer", outer);
//   // console.log("child", child); // throws an error
//   // console.log("grandChild", grandChild); // throws an error
//   return function childFunction() {
//     let name = "child";
//     let child = "child";
//     console.log("name", name);
//     console.log("outer", outer);
//     console.log("child", child);
//     // console.log("grandChild", grandChild); // throws an error
//     return function grandChild() {
//       let name = "grandChild";
//       let grandChild = "grandChild";
//       console.log("name", name);
//       console.log("outer", outer);
//       console.log("child", child);
//       console.log("grandChild", grandChild);
//     }
//   }
// }

// outerFunction()()();

// -------------------------------------------

// ✅ Defining Variables

/*
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
1. Declare a variable called `currentSong` that will hold the current song.
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
*/

// CODE HERE
// let currentSong = 'hey ya'
// let currentSongDuration = '200'


// ✅ Defining Functions

/* 
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
2. Create a function called `formatDuration` that will take a number of seconds as an argument and return a string containing minutes and seconds.
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
*/

// CODE HERE
// const formatDuration = seconds => {
//   return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2,'0')}`
// }

// uncomment the below to test it out
//formatDuration(216) // should return '3:36'

/*
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
3. Create a function called `playSong` that will take a song as an argument and set `currentSong` to the argument passed.
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 

// CODE HERE

🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 
*/


console.log("------------------------");
console.log("⬇️ Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("📌 Follow instructions in the EXERCISE.md file")
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Activity Step 1: 
// Declare `interval` and `timeSpent`

// CODE HERE
let interval ;
let timeSpent = 0;


// 🚧 Activity Step 2: Utilizing Callbacks with `setInterval`
// Declare the function startTimer below

// CODE HERE
const startTimer = (seconds) => {
  interval = setInterval(() => {
    console.log(seconds)
    if(seconds === 0) {
      clearInterval(interval)
      console.log('happy new year!')
      console.log('Time Spent:',timeSpent)
    }
    seconds--
    timeSpent++
  }, 1000)
}

startTimer(20)

// 🚧 Break Out Activity Step 3: Invoking `clearInterval` to stop the running timer and print the value of `timeSpent`
// Declare the function stopTimer below

// CODE HERE
