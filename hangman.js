const failure = document.getElementById("failscore");
const letters = document.getElementById("letters");
const show = document.getElementById("show");
const Restartbutton = document.getElementById("Restart");
const Restartbutton1 = document.getElementById("Restart1");
const gameover = document.getElementById("gameover");
const gamewin = document.getElementById("WIN");
let timeinterval = null;

let mainalphabet = [];
const baby = [
  "fruits",
  "ambitious",
  "beneath",
  "familiar",
  "justice",
  "kindness",
  "balance",
  "capture",
  "demand",
  "effort",
  "fiction",
  "genuine",
  "hesitate",
  "inspire",
  "knowledge",
  "limitless",
  "mystery",
  "noticeable",
  "opinion",
  "predict",
  "quietly",
  "reliable",
  "sincere",
  "timid",
  "visible",
  "animal",
  "basket",
  "bottle",
  "butter",
  "camera",
  "candle",
  "carrot",
  "castle",
  "circle",
  "closet",
  "coffee",
  "corner",
  "cousin",
  "danger",
  "desert",
  "dinner",
  "doctor",
  "dragon",
  "driver",
  "eagle",
  "elbow",
  "engine",
  "farmer",
  "father",
  "finger",
  "forest",
  "garden",
  "glasses",
  "hammer",
  "handle",
  "hotel",
  "island",
  "jelly",
  "kitten",
  "ladder",
  "lemon",
  "library",
  "market",
  "mirror",
  "monkey",
  "morning",
  "mother",
  "mountain",
  "napkin",
  "needle",
  "office",
  "orange",
  "painter",
  "parent",
  "parrot",
  "pencil",
  "pepper",
  "pillow",
  "planet",
  "police",
  "rabbit",
  "rainbow",
  "river",
  "ruler",
  "salad",
  "school",
  "scissors",
  "shadow",
  "shovel",
  "silver",
  "singer",
  "sister",
  "slipper",
  "spider",
  "spoon",
  "square",
  "stairs",
  "summer",
  "sweater",
  "teacher",
  "ticket",
  "tiger",
  "tomato",
  "tool",
  "towel",
  "travel",
  "turtle",
  "uncle",
  "valley",
  "violin",
  "visitor",
  "wallet",
  "window",
  "winter",
  "wizard",
  "worker",
  "writer",
  "yellow",
  "zipper",
  "soccer",
  "blanket",
  "balloon",
  "bakery",
  "button",
  "dentist",
];
const letter = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const randomindex = Math.floor(Math.random() * 124);
const randomword = baby[randomindex];

function fucku() {
  let word = "";
  for (i = 0; i < randomword.length; i++) {
    if (word[i] === " " || mainalphabet.includes(randomword[i])) {
      word = word + randomword[i];
    } else {
      word = word + "-";
    }
  }
  show.innerHTML = word;
}
function putpicture() {
  const failure = document.getElementById("failscore");
  const firstphoto = document.getElementById("one");
  firstphoto.style.opacity = "1";
  if (Number(failure.innerText) === 1) {
    const secondphoto = document.getElementById("two");
    secondphoto.style.opacity = "1";
  } else if (Number(failure.innerText) === 2) {
    const thirthphoto = document.getElementById("three");
    thirthphoto.style.opacity = "1";
  } else if (Number(failure.innerText) === 3) {
    const fourthphoto = document.getElementById("four");
    fourthphoto.style.opacity = "1";
  } else if (Number(failure.innerText) === 4) {
    const fivethphoto = document.getElementById("five");
    fivethphoto.style.opacity = "1";
  } else if (Number(failure.innerText) === 5) {
    const sixthphoto = document.getElementById("six");
    sixthphoto.style.opacity = "1";
  } else if (Number(failure.innerText) === 6) {
    const seventhphoto = document.getElementById("seven");
    seventhphoto.style.opacity = "1";
  }
}
function hangman() {
  for (let i = 0; i < letter.length; i++) {
    const alphabetbutton = document.createElement("button");

    alphabetbutton.innerHTML = letter[i];
    letters.appendChild(alphabetbutton);

    alphabetbutton.addEventListener("click", function () {
      // console.log(letter[i]);
      mainalphabet.push(alphabetbutton.innerText);
      // console.log(mainalphabet);
      if (randomword.toLowerCase().includes(letter[i])) {
        failure.innerText = Number(failure.innerText) + 0;
      } else {
        failure.innerText = Number(failure.innerText) + 1;
      }
      fucku();
      putpicture();
      gamefinished();
      win();
      timescore();
    });
  }
}

function gamefinished() {
  if (Number(failure.innerText) >= 6) {
    gameover.style.visibility = "visible";
    clearInterval(timeinterval);
  }
}

function win() {
  console.log(randomword);
  if (show.innerText === randomword) {
    gamewin.style.visibility = "visible";
    clearInterval(timeinterval);
  }
}
function timescore() {
  const timeElement = document.getElementById("time");
  const timeamount = document.getElementById("time");
  timeElement.innerText = Number(timeamount.innerText) - 1;
  if (Number(timeamount.innerText) <= 0) {
    gameover.style.visibility = "visible";
    clearInterval(timeinterval);
  }
  gamefinished();
}
Restartbutton.addEventListener("click", function () {
  window.location.reload();
});
Restartbutton1.addEventListener("click", function () {
  window.location.reload();
});
fucku();
hangman();
putpicture();
gamefinished();
win();
timeinterval = setInterval(timescore, 1000);
