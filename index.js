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