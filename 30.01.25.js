// setting a variable as an array
// we use array variable to store multiple values 
const starArray =  ['https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-yellow.png', 'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-blue.png',  'https://margaret.codewizardshq.com/js_projects_for_kids/star_catcher/star-purple.png'];
// to access array values, below is the example
//console.log(starArray[2]);

//setting a variable called countdown with the value 10
const countdown = 10;

// setting a variable called score with the value 0
let score = 0;

// query selector access the HTML element from javascript
const scoreId = document.querySelector('#score');

const stars = document.querySelector("#stars");

const addScore = () => {
	score = score + 1;
  scoreId.innerText = score;
}

function moveStars() {
	stars.style.top = Math.random()*400+'px';
  stars.style.left = Math.random()*300+'px';
}

setInterval(moveStars, 500);

stars.addEventListener("click", addScore);


function gameOver() {
	const gameOverVar = document.querySelector("#gameOver");
  gameOverVar.style.display = 'block';
  stars.style.display = 'none';
  console.log("game over");
}

setTimeout(gameOver, 10000);