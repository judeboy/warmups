var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// FortuneTeller has an "ask" method that returns a promise. If you wanted to write a function that used the FortuneTeller.ask method to ask to questions (waiting for the first one to finish before asking the second) with promises, you would need to use .then like this:

// const askQuestionPromise = (question) => {
//   FortuneTeller.ask(question).then(result => {
//     console.log('Promise 1:', result.response)
//     FortuneTeller.ask(question).then(result => {
//       console.log('Promise 2:', result.response)
//     })
//   })
// }

// askQuestionPromise("Why is the sky blue?")

const askQuestionPromise = async (question) => {
  let fortune1 = await FortuneTeller.ask(question)
  // let fortune2 = FortuneTeller.ask(question) // NOT CORRECT
  console.log('Promise 1:', fortune1.response)
  // console.log('Promise 2:', response await fortune2) // NOT CORRECT
}

askQuestionPromise("Why is the sky blue?")
