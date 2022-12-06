import getRandomNumber from '../additionalСontent/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';
const generateProgression = (firstItem, step, Length) => {
  const array = [];
  for (let i = 0; i < Length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const getRoundData = () => {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randomIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => gameRounds(description, getRoundData);

export default startGame;
