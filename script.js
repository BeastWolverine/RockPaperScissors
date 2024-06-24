let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock,papper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); //random index form 0to2
    return options[randIdx];
};

const drawGame=() =>{
    console.log("Game was Draw")
    msg.innerText="Game was draw,Play again!";
    msg.style.backgroundColor="grey";
};

const showWinner=(userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Loss");
        msg.innerText=`You loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice) =>{
    console.log("User Choice is::",userChoice);

    //genrate Computer Choice
    const compChoice=genCompChoice();
    console.log("Computer Choice is::" , compChoice);

    if(userChoice===compChoice){
        //game was draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //compChoice must be paper/scissors
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        // console.log("button was clicked",userChoice)
        playGame(userChoice);
    });
});