  // the code below will Update the player's score and display it on the screen.
   let playerScore: number = 0;
   let computerScore: number = 0;
    
    
    // this variable will update each time player and computer makes a decision
    const stats = document.getElementById("result") as HTMLParagraphElement;
    
    // player variable
let result: undefined | string;
let player: undefined | string;
let computer: undefined | string;
   
type Result = "TIE GAME!" | "YOU WIN!" | "YOU LOSE!" | "ERROR!";
    // the variable below holds the main elementin the html document
    const main = document.getElementById('main') as HTMLElement;
    const gameBox = document.getElementById('gameBox') as HTMLElement;
    
    // variables declared below are all assigned to the buttons of the html elements
    
    const startGame = document.getElementById('startGame') as HTMLButtonElement;
    const okay = document.getElementById('true') as HTMLButtonElement;
    const cancel = document.getElementById('false') as HTMLButtonElement;

     // the replay and quit button variables
    const quit = document.getElementById('quit')  as HTMLButtonElement;
    const btnReplay = document.getElementById('btnReplay')  as HTMLButtonElement;
    const ok = document.getElementById('ok')  as HTMLButtonElement;
  
   // all variables below are attached to the popup boxes on the html page
    const popup = document.getElementById('popup') as HTMLDivElement;
    const popup2 = document.getElementById('popup-box-2') as HTMLDivElement;
    const popup3 = document.getElementById('popup-box-3') as HTMLDivElement;
    let winner = document.getElementById('winner') as HTMLHeadingElement;
    // this variable below is attached to the name input box in the html page
    let nameInput = document.getElementById('name-input') as HTMLInputElement;
    let playerPointName = document.getElementById('playerPoint') as HTMLParagraphElement;
    
    // buttons onclick function below will call the first popup box. this box will ask for your name
    startGame.onclick = function() {
      popup.classList.add('display-popup');
    };
    
    // variables below are attached to the player and computer weapons
    const computerChoice = document.getElementById('computerArsenal') as HTMLParagraphElement;
    const playerChoice = document.getElementById('playerArsenal') as HTMLParagraphElement;
    
    // Image shadow element shadow selection
    const wip1 = document.querySelector('.wip1') as HTMLButtonElement;
    const wip2 = document.querySelector('.wip2') as HTMLButtonElement;
    const wip3 = document.querySelector('.wip3') as HTMLButtonElement;
     
    // when this function is called with will first check if the name-input is empty or has reached the requirements before calling the gamebox display
    
    
    okay.onclick = function() {
      let playerName = nameInput.value;
      if (playerName === null || playerName === " " || playerName === undefined || playerName === '') {
        nameInput.classList.add('error');
        setTimeout( () => {
          nameInput.classList.remove('error');
        }, 500);
      } else {
        popup.classList.remove('display-popup');
        playerPointName.textContent = `${playerName}: 0`;
        startGame.style.display = 'none';
        gameBox.style.visibility = 'visible';
        gameBox.style.transform = 'scale(1)';
      }
    };
    cancel.onclick = function() {
      popup.classList.remove('display-popup');
    };
    
    // the player choice and decisions
    const playerWeapon = document.querySelectorAll('.playerWeapon') as NodeListOf<HTMLButtonElement>;
    playerWeapon.forEach(btn => btn.addEventListener('click', () => {
    player = btn.value;
    function computerTurn() {
      const randomNum = Math.floor(Math.random() * 3) + 1;
      switch(randomNum) {
     case 1:
       computer = 'ROCK';
wip1.style.boxShadow = ' 5px 5px 5px 1px rgb(79, 156, 224), -5px -5px 5px 1px teal';
wip2.style.boxShadow = 'none';
wip3.style.boxShadow = 'none';
      break;
     case 2:
       computer = 'PAPER';
wip2.style.boxShadow = ' 5px 5px 5px 1px rgb(79, 156, 224), -5px -5px 5px 1px teal';
wip1.style.boxShadow = 'none';
wip3.style.boxShadow = 'none';
      break;
     case 3:
       computer = 'SCISSORS';
wip3.style.boxShadow = ' 5px 5px 5px 1px rgb(79, 156, 224), -5px -5px 5px 1px teal';
wip1.style.boxShadow = 'none';
wip2.style.boxShadow = 'none';
      break;
 }
    }
    computerTurn();
    playerChoice.textContent = `${player}`;
    computerChoice.textContent = `${computer}`;
    
     // this function below checks for a winner weather it's computer or player.
  function checkWinner(): Result {
   if (player === computer) {
     return 'TIE GAME!';
   } else if (computer === 'ROCK') {
     return (player === 'PAPER') ? 'YOU WIN!' :'YOU LOSE!';
   }
     else if (computer === 'PAPER') {
     return (player === 'SCISSORS') ? 'YOU WIN!' : 'YOU LOSE!';
     }
     else if (computer === 'SCISSORS') {
     return (player === 'ROCK') ? 'YOU WIN!' : 'YOU LOSE!';
     }
			return "ERROR!";
 }
 
 
 result = checkWinner()
    
    // code below will calculate for player points
  function points() {
  let playerName = nameInput.value;
  if (result === 'YOU WIN!') {
    playerScore++;
   playerPoint.textContent = `${playerName}: ${playerScore}`;
  }
 else if (result === 'YOU LOSE!') {
     computerScore++;
     computerPoints.textContent = `Computer: ${computerScore}`;
  }
}
    points();
    
  // the code below will run anytime either player or computer reaches a 10 points
    function round() {
  let playerName = nameInput.value;
 if (computerScore == 10) {
    gameBox.style.visibility ='hidden';
    winner.textContent = "Computer Wins!";
    popup2.classList.add('display-popup');
    btnReplay.textContent = "Retry";
    playerScore = 0;
    computerScore = 0;
    playerPoint.textContent = `${playerName}: ${playerScore}`;
    computerPoints.textContent = `Computer: 0`;
    playerChoice.textContent = `Arsenal`;
    computerChoice.textContent = `Arsenal`;
    stats.textContent = '-';
     }
  else if (playerScore == 10) {
      gameBox.style.visibility ='hidden';
      winner.textContent = "Player Wins!";
      popup2.classList.add('display-popup');
      btnReplay.textContent = "Okay";
      playerScore = 0;
      computerScore = 0;
      playerChoice.textContent = `Arsenal`;
      computerChoice.textContent = `Arsenal`;
      playerPoint.textContent = `${playerName}: ${playerScore}`;
      computerPoints.textContent = `Computer: 0`;
      stats.textContent = '-';
     }
   }
    round();
    }));
    
  btnReplay.onclick = function() {
    gameBox.style.visibility = 'visible';
    gameBox.style.transform = 'scale(1)';
  };
  
  quit.onclick = function() {
   popup2.classList.remove('display-popup');
   startGame.style.display = 'block';
   popup3.classList.add('display-popup');
  }
  ok.onclick = function() {
    popup3.classList.remove('display-popup');
  }


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW registered")
        console.log(registration)
    }).catch(err => {
        console.log('something went wrong', err)
    })
}
let deferredPrompt: undefined | Event;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    console.log(e)
});

const installApp = document.getElementById('install-button');
console.log(installApp);

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});