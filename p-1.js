// console.log("hello")

// let fruits=["a","b","c"]
// fruits.push("d");
// console.log(fruits);

// let array1=["a","b","c","d"];
// let array2=[...array1,"e","f"];
// console.log(array2)

// const fruits=["apple","banana","mango"];
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// const obj={
//     firstname:'krushi',
//     age:20,
//     about:personlinfo
// }

// function personlinfo(){
//     console.log(`person name is ${this.firstname}`);
// }
// obj.about();

// `${1+2}=3`
// `${'1'+'2'}=3`
// console.log(1+2, '1'+'2');

// const hello = 'hello';
// const world = 'world';
// console.log(hello + world);

// let num = 5;
// if (num <= 5) {
//   num = 0;
// }
// console.log(num);

// let num = 5;
// if (num < 5) {
//   num = 0;
// } else {
//   num = - 5
// }
// console.log(num);

// const numOne = 2;
// const numTwo = 1;
// console.log(numOne > numTwo ? 'hi' : 'bye');

// let num = 50;

// if (num > 10) {
//    num = 15;
// } else if (num > 5) {
//    num = 0;
// }

// console.log(num);

// let num = 50;

// if (num > 10) {
//    num = 15;
// }
// if (num > 5) {
//    num = 0;
// }

// console.log(num);

// const num = 2;
// if (num > 2) {
//   console.log('hello');
// } else {
//   console.log('world');
// }
// console.log(num > 2 ? 'hello' : 'world');

// let num = 2;

// if (num < 2) {
//   console.log('hi');
// }
// if (num > 2) {
//   console.log('bye');
// }

// if (num < 2) {
//   console.log('hi');
// } else {
//   console.log('bye');
// }

// let num = 5;
// if (num < 5) {
//   num = 0;
// }
// console.log(num);

// let num = 5;
// if (num < 5) {
//   num = 0;
// } else if (num > 5) {
//   num = - 5
// }
// console.log(num);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers[numbers.length]);

// const arr = [1, ['hi', 'bye']];

// console.log(arr[1][1]);

// const arr = [1, ['hi', 'bye']];

// console.log(arr[1]);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.length);

// const arr = [1, ['hi', 'bye']];
// arr.push(2);

// console.log(arr);

// const person = {
//     name: 'Alice',
//     age: 27,
//     cats: ['Leo', 'Tiger', 'Lizzy']
//   };

// console.log(person[0]);

// const obj = { num: 10 };
// delete obj.num;

// const person = {
//     name: 'Alice',
//     age: 27
//   };
// console.log(person.age);
// person.age = 28;
// console.log(person.age);
// delete person.age;
// console.log(person.age);

// const numbers = [5, 10, 10];
// let total = 1;
// for (let i = 0; i < numbers.length; i++) {
//   total = total * numbers[i];
// }
// console.log(total);

// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 0; i <= 4; i = i + 2) {
//     console.log(i);
//   }

// for (let i = 0; i > -4; i = i - 1) {
//     console.log(i);
//   }

// let num = 0;

// while ( num < 10 ) {
//    num = num + 3;
// }

// console.log(num);

// const arr = ['a', 1, 2, 'b', 3, 'c'];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     console.log(i);
//   }
// }

// const b = 'caro';
// function connect(a, b = 'people') {
//   return a + ' ' + b;
// }

// const result = connect('hello', b);

// console.log(result);

// const b = 'caro';
// function connect(a, b = 'people') {
//   return a + ' ' + b;
// }

// const result = connect('hello' + b);

// console.log(result);

// function func() {
//     const num = 10;
//     return num;

//   }
//   console.log(func());

// function func() {
//     const num = 10;
//   }
//   console.log(func());

// function multiply(x, y = 5) {
//     return x * y;
//   }

//   const result = multiply(6,4);

//   console.log(result);

// const x = 'global';
// function outer() {
//  const x = 'outer';
//  function inner() {
//   const x = 'inner';
//   console.log(x);
//  }
//  inner();
//  console.log(x);
// }
// outer();
// console.log(x);

// const price = 10;
// function func() {
//    const price = 5;
//    console.log(price);
// }
// func();
// console.log(price);

// let num = 10;
// {
//    num = 2;
// }
// console.log(num);

// const price = 10;
// function func() {
//    const quantity = 2;
// }
// func();
// console.log(price * quantity);

// function outer() {
//     function inner() {
//      console.log('hello world');
//     }
//    }
//    inner();

// let num = 10;
// {
//    let num = 2;
// }
// console.log(num);
