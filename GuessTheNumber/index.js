let randomNumber = parseInt(Math.random() * 100);
console.log(randomNumber);

const form = document.querySelector("#wrapper");
const button = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const arr = [];
let flag = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (flag === true) {
        StartGame();
    }


})

function StartGame() {
    button.value = "Submit guess"

    if (arr.length == 0) {
        document.querySelector(".lowOrHi").innerHTML = "Game Started!"
        setTimeout(() => {
            document.querySelector(".lowOrHi").textContent = "";
        }, 5000)
    }

    const inputVal = input.value;

    if (isItNumberOrNOt(inputVal) && !doesNumMatchWithRandom(inputVal)) {
        push(inputVal)
        guessesRemaining();
        clear();
    }
   
}

function isItNumberOrNOt(num) {
    const numValue = Number(num);
    if (isNaN(numValue)) {
        console.log("It's not a number");
        document.querySelector(".lowOrHi").textContent = "It's not a number! Please Put a number";
        setTimeout(() => {
            document.querySelector(".lowOrHi").textContent = "";
        }, 5000)
        console.log("It's a number");
        return false;
    } 
    else {
        console.log("It's a number");
    }
    return true;
}

function doesNumMatchWithRandom(inputValue) {
    if (inputValue === randomNumber) {
        document.querySelector(".lowOrHi").textContent = "You Are Lucky ,You Won";
        EndGame();
    }
    else if (inputValue < 1) {
        document.querySelector(".lowOrHi").textContent = `number should greater then ${inputValue}`;
        setTimeout(() => {
            document.querySelector(".lowOrHi").textContent = "";
        }, 5000)
        return true;
    }
    else if (inputValue > 100) {
        document.querySelector(".lowOrHi").textContent = `number should less then ${inputValue}`;
        setTimeout(() => {
            document.querySelector(".lowOrHi").textContent = "";
        }, 5000)
        return true;
    }
   
    return false;
}

function guessesRemaining() {

    const remain = 10 - arr.length;
    if(remain !== 0){
        const remain = 10 - arr.length;
        document.querySelector(".lastResult").innerHTML = remain;
    }
    else{
        document.querySelector(".lastResult").innerHTML = remain;
        EndGame();
    }  
}

function push(num) {
    if(arr.length < 10){
        if (arr.includes(num)) {
            document.querySelector(".lowOrHi").innerHTML = "You Already Choosed This Number!! Try another number"
        }
        else {
            arr.push(num);
        }
        document.querySelector(".guesses").textContent = arr;
    }
}

function EndGame() {
    setTimeout(()=>{
        document.querySelector(".lowOrHi").innerHTML = "Game Over"
    },500);

    setTimeout(() => {
        arr.length = 0;
        document.querySelector(".lastResult").innerHTML = `10`;
        button.value = "Start New Game"
        
    }, 2000);
}

function clear() {
    input.value = "";
}

