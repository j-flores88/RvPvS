if($){
    alert('Success!')
}

function playRound(playerSelection, computerSelection) {

}
function getRanNum() {
  let ranNum = Math.floor(Math.random() * 3)
  return ranNum;
}

function computerPlay() {
  let possOutcome = ['Rock', 'Paper', 'Scissors']
  let choice = getRanNum()

  for (let i = 0; i < possOutcome.length; i++) {
    if(choice === i)
    return possOutcome[i]
  }
  //console.log(choice)
}

const btn = document.querySelector('button')
const userInput = document.querySelector('input');

btn.onclick = function() {
    const inputVal = userInput.value;
    userInput.value = '';

    if(inputVal.toLowerCase() !== 'rock' && inputVal.toLowerCase() !== 'paper' && inputVal.toLowerCase() !== 'scissors') {
        alert('Error. Please make a proper selection.')
    } else {
        alert('You chose ' + inputVal)
    }
}