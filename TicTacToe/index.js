const innerBox=document.querySelectorAll(".innerBox");
var audio=new Audio("Audio/click.wav");
const gameOver=document.querySelector(".gameOver");
const gameInfo=document.querySelector(".info");
const box=document.querySelector(".box");
const playAgain=document.querySelector(".playAgain");
const gameDraw=document.querySelector(".gameDraw");
const startGame=document.querySelector(".startGame");
const turnclass=document.querySelector(".turn");
const turnButton=document.querySelector(".turnButton");
const drawPlayAgain=document.querySelector(".drawPlayAgain");
const winner=document.querySelector(".winner");
const exit=document.querySelectorAll(".exit");
const exitGame=document.querySelector(".exitGame");
const heading=document.querySelector(".heading");
const button=document.querySelectorAll("button");

button.forEach((value)=>{
    let buttonclick=new Audio("Audio/buttonclicksound.wav");
    value.addEventListener("click",()=>{
        buttonclick.play();
    })
})

let winnerperson="X";

startGame.addEventListener("click",()=>{
    startGame.classList.add("inactive");
    box.classList.remove("inactive");
    turnclass.classList.remove("inactive");
})

let turn="X";
let win=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

//checking for win condition
function matchWin(){
    let isover=false;
    win.forEach((value)=>{
        if((innerBox[value[0]].innerText!=="")&&(innerBox[value[1]].innerText!=="")&&(innerBox[value[2]].innerText!=="")&&(innerBox[value[0]].innerText===innerBox[value[1]].innerText) && (innerBox[value[1]].innerText===innerBox[value[2]].innerText)){
            isover=true;
            innerBox[value[0]].style.backgroundColor="green";
            innerBox[value[1]].style.backgroundColor="green";
            innerBox[value[2]].style.backgroundColor="green";
            winnerperson=innerBox[value[0]].innerText;
            return false;
        }
    })
    if(isover)
    return true;
    else
    return false;
}
let count=0;
innerBox.forEach((value)=>{
    value.addEventListener("click",()=>{
        if(value.innerText===""){
            count++;
            value.innerText=turn;
            audio.play();
            if(turn==='X'){
                turn='Y';
                turnButton.innerText=`Turn ${turn}`;
            }
            else{
                turn='X';
                turnButton.innerText=`Turn ${turn}`;
            }
            
            
            if(matchWin()){
                let winaudio=new Audio("Audio/wingameover.wav");
                winaudio.play();
                gameInfo.classList.add("inactive");
                gameOver.classList.remove("inactive");
                turn="X";
                winner.innerText=winnerperson;
                turnButton.innerText=`Turn ${turn}`;
                count=0;
            }
            if(count===9){
                let drawaudio=new Audio("Audio/drawgameover.wav");
                drawaudio.play();
                gameInfo.classList.add("inactive");
                gameDraw.classList.remove("inactive");
                turn="X";
                turnButton.innerText=`Turn ${turn}`;
                count=0;
            }
           
        }
        
    })
    
})

playAgain.addEventListener("click",()=>{
    console.log("play again");
             gameInfo.classList.remove("inactive");
            gameOver.classList.add("inactive");
            gameDraw.classList.add("inactive");
            innerBox.forEach((value)=>{
                value.innerText="";
                value.style.backgroundColor="#FFEEAF";
            })
})
drawPlayAgain.addEventListener("click",()=>{
    console.log("play again");
             gameInfo.classList.remove("inactive");
            gameOver.classList.add("inactive");
            gameDraw.classList.add("inactive");
            innerBox.forEach((value)=>{
                value.innerText="";
                value.style.backgroundColor="#FFEEAF";
            })
})

exit.forEach((value)=>{
    value.addEventListener("click",()=>{
        exitGame.classList.remove("inactive");
        gameInfo.classList.add("inactive");
        gameOver.classList.add("inactive");
        gameDraw.classList.add("inactive");
        box.classList.add("inactive");
        heading.classList.add("inactive");
    })
})