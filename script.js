let userScore=0;
let compScore=0;

let msg=document.querySelector('#final-msg');

let userVal=document.querySelector('#userscore');
let compVal=document.querySelector('#compscore');
const choices= document.querySelectorAll('.choice');
 
const genCompChoice = () => {
    const options=['rock', 'paper', 'scissor'];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];

}

const playGame = (userChoice) => {
    console.log('user choice=', userChoice);

    //generateComputerChoice
    const compChoice= genCompChoice();
    console.log('comp choice=',compChoice);

    if(userChoice==='rock' && compChoice==='paper') {
        compVal.innerText=compScore+=1;
        msg.innerText='Computer has won';
        msg.style.backgroundColor='red';
       

    }else if(userChoice==='paper' && compChoice==='rock'){
        userVal.innerText=userScore+=1;
        msg.innerText='Yay! You have won';
        msg.style.backgroundColor='green';
        
    }else if(userChoice==='paper' && compChoice==='scissor'){

        compVal.innerText=compScore+=1;
        msg.innerText='Computer has won';
        msg.style.backgroundColor='red';
    }else if(userChoice==='scissor' && compChoice==='paper'){
        userVal.innerText=userScore+=1;
        msg.innerText='Yay! You have won';
        msg.style.backgroundColor='green';
    }else if(userChoice==='rock' && compChoice==='scissor'){
        userVal.innerText=userScore+=1;
        msg.innerText='Yay! You have won';
        msg.style.backgroundColor='green';
    }
    else if(userChoice==='scissor' && compChoice==='rock'){
        compVal.innerText=compScore+=1;
        msg.innerText='Computer has won';
        msg.style.backgroundColor='red';
    }


}

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);


    })

}); 