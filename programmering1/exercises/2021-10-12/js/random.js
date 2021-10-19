const maxNum = 10
function verifyGuess(correctNumber, guess) {
    if (correctNumber === guess) {
        console.log('Rätt nummer!')
    } else if (correctNumber > guess) {
        console.log('Du gissade för lågt')
    } else if (correctNumber < guess) {
        console.log('Du gissade för högt');
    } else {
        console.log('Du skrev inte in ett nummer!');
    }
}

function generateRandomNumber(maxNumber) {
    let correctNumber = Math.floor(Math.random() * maxNumber +1)
    console.log('correctNumber:', correctNumber)
    return correctNumber
}

let random = generateRandomNumber(maxNum)
// input = Number(window.prompt(`Skriv in ett nummer mellan 1 - ${maxNum}:`))

verifyGuess(random, guess)

// function runGameWhile() {
//     let input
//     let runGame = true
//
//     while (runGame) {
//         input = Number(window.prompt(`Skriv in ett nummer mellan 1 - ${maxNum}:`))
//         if (input === 0) {
//             break
//         }
//         let exitGame = verifyGuess(random, input)
//         if (exitGame) {
//             runGame = !runGame
//         }
//         console.log('Game Over')
//     }
// }
//     runGameWhile()