// ------------------- sentace case -------------

const sentanceCase = (string) => {
  const splitArray = string.split(". ");
  const arr = [];
  for (let i = 0; i < splitArray.length; i++) {
    const firstArray = splitArray[i].charAt(0).toUpperCase();
    console.log(firstArray);

    const restArray = splitArray[i].slice(1).toLowerCase();
    console.log(restArray);

    const lastArray = firstArray + restArray;
    console.log(lastArray);
    arr.push(lastArray);
  }
  const output = arr.join(". ");
  console.log(output);
};
sentanceCase("helo. i am kheni.");

// ------------------- title case -------------

const titleCase = (string) => {
  const splitArray = string.split(". ");
  const arr = [];
  for (let i = 0; i < splitArray.length; i++) {
    const firstArray = splitArray[i].charAt(0).toUpperCase();
    console.log(firstArray);

    const restArray = splitArray[i].slice(1).toLowerCase();
    console.log(restArray);

    const lastArray = firstArray + restArray;
    console.log(lastArray);
    arr.push(lastArray);
  }
  const output = arr.join(" ");
  console.log(output);
};
titleCase("helo. i am kheni.");

// ----------------mixed case -----------

const mixedCase = (string) => {
  const splitedArray = string.split(" ");
  let output = [];

  for (let i = 0; i < splitedArray.length; i++) {
    const result = splitedArray[i];
    let arr = [];
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        const upper = result[j].toUpperCase();
        arr.push(upper);
      } else {
        const lower = result[j].toLowerCase();
        arr.push(lower);
      }
    }
    const modyfy = arr.join("");
    output.push(modyfy);
  }
  const finalstring = output.join(" ");
  console.log(finalstring);
};
mixedCase("hello i am kheni. how are youhhhh");

// ----------------inverce case -----------

const inverceCase = (string) => {
  const splitedArray = string.split(" ");
  let output = [];

  for (let i = 0; i < splitedArray.length; i++) {
    const result = splitedArray[i];
    let arr = [];
    for (let j = 0; j < result.length; j++) {
      if (j % 2 != 0) {
        const upper = result[j].toUpperCase();
        arr.push(upper);
      } else {
        const lower = result[j].toLowerCase();
        arr.push(lower);
      }
    }
    const modyfy = arr.join("");
    output.push(modyfy);
  }
  const finalstring = output.join(" ");
  console.log(finalstring);
};
inverceCase("hello i am kheni. how are youhhhh");

// -------------------- uppercase-----------

const upperCase = (string) => {
  const output = string.toUpperCase();
  console.log(output);
};
upperCase("hello i am kheni. how are youhhhh");

// ----------------- lowercase-----------
const lowerCase = (string) => {
  const output = string.toLowerCase();
  console.log(output);
};
lowerCase("hello i am kheni. how are youhhhh");

// -------------- snak case -------------

const snakeCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("_");
  console.log(output);
};

snakeCase("hello i am kheni. how are youhhhh");

// -----------------Kebab Case------------------

const KebabCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("-");
  console.log(output);
};
KebabCase("hello i am kheni. how are youhhhh");

// ----------------- dot case -----------------

const dotCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join(".");
  console.log(output);
};
dotCase("hello i am kheni. how are youhhhh");

// --------------------slash case ----------------

const slashCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("/");
  console.log(output);
};
slashCase("hello i am kheni. how are youhhhh");

// -------------------- back slashCase ----------------

const backSlashCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("\\");
  console.log(output);
};
backSlashCase("hello i am kheni. how are youhhhh");

// ------------------ question case ---------------

const questionCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("?");
  console.log(output);
};
questionCase("hello i am kheni. how are youhhhh");

// ------------------exclamation  case ---------------

const exclamationCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join("!");
  console.log(output);
};
exclamationCase("hello i am kheni. how are youhhhh");

// ------------------colon  case ---------------

const colonCase = (string) => {
  const splitArray = string.split(" ");
  const output = splitArray.join(":");
  console.log(output);
};
colonCase("hello i am kheni. how are youhhhh");

// ----------------- start case ----------------

const startCase = (string) => {
  const splitArray = string.split(" ");
  const arr = [];
  for (let i = 0; i < splitArray.length; i++) {
    const firstchar = splitArray[i].charAt(0).toUpperCase();

    const secondword = splitArray[i].slice(1).toLowerCase();

    const word = firstchar + secondword;
    arr.push(word);
  }
  const output = arr.join(" ");
  console.log(output);
};
startCase("hello i am kheni. how are youhhhh");

// ----------------- Constant case ---------------

const ConstantCase = (string) => {
  const splitArray = string.split(" ");
  const arr = [];
  for (let i = 0; i < splitArray.length; i++) {
    const firstArray = splitArray[i].toUpperCase();
    arr.push(firstArray);
  }

  const output = arr.join("_");
  console.log(output);
};
ConstantCase("hello i am kheni. how are youhhhh");

// -------------------SpongeBob Case --------------

// ------------------wave case -------------

const waveCase = (string) => {
  const space = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      space.push(i);
    }
  }

  const splitArray = string.split(" ");
  const joinArray = splitArray.join("");
  let changeword = [];

  for (let j = 0; j < joinArray.length; j++) {
    const word = joinArray[j];
    if (j % 2 == 0) {
      changeword += joinArray[j].toUpperCase();
    } else {
      changeword += joinArray[j].toLowerCase();
    }
  }

  const array = changeword.split("");
  for (let k = 0; k < space.length; k++) {
    array.splice(space[k], 0, " ");
  }

  console.log(array.join(""));
};

waveCase("hello i am kheni. how are youhhhh");

// -----------------camel case --------------

const camelCase = (string) => {
  const splitArray = string.split(" ");

  const arr = [];
  for (i = 0; i < splitArray.length; i++) {
    const word = splitArray[0].charAt(0).toUpperCase();

    const rests = splitArray[i].slice(1);
    const merge = word + rests;
    arr.push(merge);
  }
  console.log((string.split(" ")[0] += arr.join("")));
};
camelCase("hello i am kheni how are youhhhh");

// -------------------- pascal case ----------------

const pascalCase = (string) => {
  const splitArray = string.split(" ");

  const arr = [];
  for (i = 0; i < splitArray.length; i++) {
    const word = splitArray[i].charAt(0).toUpperCase();

    const rests = splitArray[i].slice(1);
    const merge = word + rests;
    arr.push(merge);
  }
  const output = arr.join("");
  console.log(output);
};

pascalCase("hello i am kheni. how are youhhhh");
