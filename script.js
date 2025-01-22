let userScore=0;
let compScore=0;
let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let uscore=document.querySelector('#user-score');
let cscore=document.querySelector('#comp-score');
console.log(choices);
//user choice
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice= choice.getAttribute('id');
        // console.log(userChoice);
        playgame(userChoice);
    });
});
//comp choice
gencompChoice=()=>{
    const options=['rock','paper','scissors'];
    let randomIndx=Math.floor(Math.random()*3);
    // console.log(options[randomIndx])
    return options[randomIndx];
}

//play game
const playgame=(userChoice)=>{
    console.log(userChoice);
    const compChoice=gencompChoice();
    console.log(compChoice);
    if(userChoice===compChoice){
        msg.innerText='Game was Drawn, Play Again!';
        msg.style.backgroundColor='#081b31';
    }
    else{
        let userwin=true;
        if(userChoice==='rock'){
            userwin=compChoice==='paper'?false:true;
        }
        else if(userChoice==='paper'){
            userwin=compChoice==='scissors'?false:true;
        }
        else{
            userwin=compChoice==='rock'?false:true;
        }
        winning(userwin,userChoice,compChoice);
    }
}

//winning
const winning=(userwin,userChoice,compChoice)=>{
    if(userwin){
        msg.innerText=`Congratulations,your ${userChoice} beats ${compChoice}!`;
        msg.style.backgroundColor='green';
        userScore++;
        uscore.innerText=`${userScore}`;
    }
    else{
        msg.innerText=`Sorry, ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor='red';
        compScore++;
        cscore.innerText=`${compScore}`;
    }
}