const word = 2;
const sentance = 7;
const paragraph = 6;

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const createWord = (number) => {
  let wordarray = [];
  for (let i = 0; i < number; i++) {
    let word = "";
    const matharray = Math.floor(Math.random() * (10 - 3) + 3);
    for (let j = 0; j < matharray; j++) {
      const randomarray = Math.floor(Math.random() * alphabet.length);
      word += alphabet[randomarray];
    }
    wordarray.push(word);
  }
  return wordarray.join(" ");
};
// const result = createWord(word);
// console.log(result);

const createSentance = (number) => {
  let senarray = [];
  for (let i = 0; i < number; i++) {
    senarray.push(createWord(word));
  }
  return senarray.join(". ");
};
// const result = createSentance(sentance);
// console.log(result);

const createperagraph = (number) => {
  let pararray = [];
  for (let i = 0; i < number; i++) {
    pararray.push(createSentance(sentance));
  }
  //   return pararr.join(" ");

  if (pararray.length > 1) {
    return pararray.join(". \n\n");
  } else {
    const ans = pararray.join("") + ".";
    return ans;
  }
};

const result = createperagraph(paragraph);
console.log(result);
