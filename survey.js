const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


rl.question('What is your name?', (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`${answer1} likes to ${answer2}. While doing ${answer2}, ${answer1} likes to listen to ${answer3}. ${answer1}'s favorite meal is ${answer4}. Their favorite thing to eat for ${answer4} is ${answer5}. ${answer1}'s favorite sport is ${answer6}. This is ${answer1}'s superpower: ${answer7}.`)

              rl.close();
            });
          });
        });
      });
    });
  });
});



