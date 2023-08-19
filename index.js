// *****ATTEMPT ONE ********

// const userG = document.getElementById("userGuess").value;

// const btn = document.getElementById("submitGuess");

// // Generate a random number 1-100

// // when the user enters in a number it tells them wheter it was right or wrong

// btn.addEventListener("click", function numberG() {
//   // Random number 1-10
//   let answer = Math.floor(Math.random() * 11).value;
//   // Compare the user guess and random number
//   if (answer === userG) {
//     return console.log("correct");
//   } else {
//     return console.log("Incorrect");
//   }
// });

// numberG();

// ******* ATTEMPT TWO

let btn = document.getElementById("submitGuess");

let output = document.getElementById("output");

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener("click", function () {
  let input = document.getElementById("userGuess").value;

  if (input == number) {
    output.innerHTML = `You guessed right , yoour number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "you guessed too low";
  }
  if (input > number) {
    output.innerHTML = "you guessed too high";
  }
});
