// Return a random 6-9 number digit
const randomNumber = (minNumber, maxNumber) => {
  let rndNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return rndNum;
};

export { randomNumber };
