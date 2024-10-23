const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
const reset = document.querySelector(".reset");
const scorePlayerOne = document.querySelector(".point-one");
const scorePlayerTwo = document.querySelector(".point-two");

reset.disabled = true;
let pointPlayerOne = 0;
let pointPlayerTwo = 0;

//---le premier à 3 matchs gagnés
let addOne = () => {
    pointPlayerOne ++;
    scorePlayerOne.innerText = pointPlayerOne;
    if (pointPlayerOne === 3) {
        btnOne.disabled = true;
        btnTwo.disabled = true;
        reset.disabled = false;
        scorePlayerOne.style.color = "green";
        scorePlayerTwo.style.color = "red";
    }
}

let addTwo = () => {
    pointPlayerTwo ++;
    scorePlayerTwo.innerText = pointPlayerTwo;
    if (pointPlayerTwo === 3) {
        btnOne.disabled = true;
        btnTwo.disabled = true;
        reset.disabled = false;
        scorePlayerTwo.style.color = "green";
        scorePlayerOne.style.color = "red";
    }
}

//---se joue jusqu'à 5 matchs
/* let addOne = () => {
    pointPlayerOne ++;
    scorePlayerOne.innerText = pointPlayerOne;
    if (pointPlayerOne + pointPlayerTwo === 5) {
        btnOne.disabled = true;
        btnTwo.disabled = true;
        reset.disabled = false;
        if (pointPlayerOne > pointPlayerTwo) {
            scorePlayerOne.style.color = "green";
            scorePlayerTwo.style.color = "red";
        } else {
            scorePlayerTwo.style.color = "green";
            scorePlayerOne.style.color = "red";
        }
    }
}

let addTwo = () => {
    pointPlayerTwo ++;
    scorePlayerTwo.innerText = pointPlayerTwo;
    if (pointPlayerOne + pointPlayerTwo === 5) {
        btnOne.disabled = true;
        btnTwo.disabled = true;
        reset.disabled = false;
        if (pointPlayerTwo > pointPlayerOne) {
            scorePlayerTwo.style.color = "green";
            scorePlayerOne.style.color = "red";
        } else {
            scorePlayerOne.style.color = "green";
            scorePlayerTwo.style.color = "red";
        }
    }
} */

let resetPoint = () => {
    pointPlayerOne = 0;
    pointPlayerTwo = 0;
    scorePlayerOne.innerText = pointPlayerOne;
    scorePlayerTwo.innerText = pointPlayerTwo;
    scorePlayerTwo.style.color = "black";
    scorePlayerOne.style.color = "black";
    btnOne.disabled = false;
    btnTwo.disabled = false;
}

btnOne.addEventListener("click", addOne);
btnTwo.addEventListener("click", addTwo);
reset.addEventListener("click", resetPoint);