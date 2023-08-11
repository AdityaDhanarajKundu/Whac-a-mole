//getting all the list of the squares from html into an array
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const time = document.getElementById("time-left");
const start = document.getElementById("start");
const stopEl = document.getElementById("stop");

let result = 0;

//creating a function to select random squares for the mole to pop
function randomSquare(){
    //removing the existing mole if any squares has one so that we can start fresh
    squares.forEach((square)=>{
        square.classList.remove('mole');
    });

    //getting random square postion 
    let randomPosition = squares[Math.floor(Math.random()*9)];
    //adding the mole to that particular random mole class
    randomPosition.classList.add('mole');
}

let timerId;
function moveMole(){
    timerId = null;
    timerId = setInterval(randomSquare,500); //call the randomSquare method after every 500 milliseconds
}

stopEl.addEventListener("click",()=>{
    clearInterval(timerId);
});

start.addEventListener("click",moveMole);
