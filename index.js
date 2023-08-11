//getting all the list of the squares from html into an array
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const time = document.getElementById("time-left");
const start = document.getElementById("start");
const stopEl = document.getElementById("stop");

let result = 0;
let currentTime = 60;
let hitPosition;
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

    //save the position of the square into a variable
    hitPosition = randomPosition.id;
}

let countDownTimer;
let timerId;
function moveMole(){
    timerId = null;
    timerId = setInterval(randomSquare,500); //call the randomSquare method after every 500 milliseconds
    countDownTimer = setInterval(countDown,1000);
}

//to check if the mole has been hit
squares.forEach((square)=>{
    square.addEventListener('mousedown',()=>{
        if (square.id===hitPosition){
            result++;
            console.log(result);
            score.textContent = result;
            hitPosition = null;
        }
    });
});

start.addEventListener("click",moveMole);

function countDown(){
    currentTime--;
    time.textContent=currentTime;
    
    if (currentTime===0){
        clearInterval(countDownTimer);
        clearInterval(timerId);
        alert("Game Over!! The final Score is "+result);
        squares.forEach((element)=>{
            element.classList.remove("mole");
        });
        currentTime = 60;
        result = 0;
        score.textContent=result;
    }
}
