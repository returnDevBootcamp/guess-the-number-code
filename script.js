var randomNumber = Math.floor(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;

console.log(randomNumber);

document.querySelector(".check").addEventListener("click", function () {
  var value = document.querySelector(".guess").value;
  console.log(value);

  //1. Right number  ===   randomNumber == value
  if (randomNumber == value) {
    //1. Change Background
    document.querySelector("body").style.background = "green";
    //2. Change ? to randomNumber
    document.querySelector(".number").textContent = randomNumber;
    //3. Change text to correct Number
    document.querySelector(".message").textContent = "Correct Answer";
    //4.Change the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
    console.log("right number");
    //2. Wrong number ===     randomNumber != value
  } else if (randomNumber != value) {
    //1. Score - 1
    score--;
    //2. Output the score
    document.querySelector(".score").textContent = score;
    //3. Message Too High or Too low
    if (value > randomNumber) {
      //Too High
      document.querySelector(".message").textContent = "Too High";
    } else {
      //Too low
      document.querySelector(".message").textContent = "Too Low";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //1. change background to black
  document.querySelector("body").style.background = "black";
  //2. change number to ?
  //3. change message to guess the number..
  //4. score text to 20
  //5. score =20
});
