import readlineSync from 'readline-sync';

const runGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${userName}!`);
};

export default runGame;
