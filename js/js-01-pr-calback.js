// Пример 1 - Коллбек функции
// Напишите три функции:

// letMeSeeYourName() - принимает в параметрах имя пользователя и колбек
// и вызывает коллбек ф-цию callback, передавая ей имя + воскл. знак.
// greet(name) - коллбек принимающий имя
// и логирующий в консоль строку "Привет, <name!>"
// sayBye(name) - коллбек принимающий имя
// и логирующий в консоль строку "До встречи, <name!>"

// const letMeSeeYourName = function (name, callback) {
//   callback(name + '!');
// };

// const greet = function (name) {
//   console.log(`Привет, ${name}`);
// };

// // const sayBye = function (name) {
// //   console.log(`До встречи, ${name}`);
// // };

// letMeSeeYourName('Маруся', greet);

// letMeSeeYourName('Иван', name => console.log(`До встречи, ${name}`));

///////////////////////////////////////////////////////

// Пример 2 - Коллбек функции
// Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара,
// а также колбек. Функция создаёт обьект товара,
// добавляя ему уникальный идентификатор в свойство id
// и вызывает колбек передавая ему созданный обьект.

// showProduct(product) - коллбек принимающий обьект продукта
// и логирующий его в консоль - `id: ${id}, name: ${name}, price: ${price}`

// const showProduct = function ({ id, name, price }) {
//   // const { id, name, price } = product;
//   console.log(`id: ${id}, name: ${name}, price: ${price}`);
// };

// let id = 0;

// const makeProduct = function (name, price, callback) {
//   id += 1;
//   const product = {
//     id,
//     name,
//     price,
//   };
//   console.log(product);
//   callback(product);
// };

// makeProduct('Холодильник', 10000, showProduct);
// makeProduct('Плита', 9000, showProduct);
// makeProduct('Чайник', 8000, showProduct);
// makeProduct('Тостер', 5000, showProduct);

//////////////////////////////////////////////////////////////

// Пример 3 - Коллбек функции
// Напишите три функции:
// eachArray(arr, callback) - принимает массив и колбэк
// и вызывает колбэк для каждого элемента массива
// reverseString(str) - принимает строку
// и печатает ее в консоль задом наперед
// upperCaseString(str) - принимает строку
// и печатает ее в консоль в верхнем регистре

// const strings = ['Happy', 'New', 'Year!'];

// function eachArray(arr, callback) {
//   for (const item of arr) {
//     callback(item);
//   }
// }

// function reverseString(str) {
//   console.log(str.split('').reverse().join(''));
// }

// // function upperCaseString(str) {
// //   console.log(str.toUpperCase());
// // }

// eachArray(strings, reverseString);
// // console.log('------------------------');
// eachArray(strings, str => console.log(str.toUpperCase()));

/////////////////////////////////////////////////////////

// Пример 4 - напишите функции
// calculate(num1, num2, action) - которая принимает 2 числа
// и action - функцию - действие над числами
// add(a, b) - складывает числа
// substract(a, b) - вычитает из числа a число b
// mult(a, b) - умножает числа
// divide(a, b) - делит число a на число b

// const calculate = (num1, num2, action) => {
//   let result = action(num1, num2);

//   console.log(
//     `Function "${action.name}" returned ${result} for numbers ${num1} and ${num2}`,
//   );
// };

// const add = function (a, b) {
//   return a + b;
// };

// const substract = (c, d) => c - d;

// calculate(3, 7, add); // 10
// calculate(13, 7, substract); // 6
// calculate(3, 7, function (num1, num2) {
//   return num1 * num2;
// }); // 21
// calculate(56, 7, (num1, num2) => num1 / num2); // 7
//
//
//
//
//

// calculate(13, 7, (a, b) => a + b); // 20
// calculate(13, 17, (a, b) => a - b); // -4
// calculate(6, 7, (a, b) => a * b); // 42
// calculate(49, 7, (a, b) => a / b); // 7

//////////////////////////////////////////////////////////

// Пример 5 - Коллбек функции
// Напишите функцию each(array, callback), которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека. Аналог map

// function map(array, callback) {
//   const newArray = [];
//   for (const elem of array) {
//     const updatedElem = callback(elem);
//     newArray.push(updatedElem);
//   }
//   return newArray;
// }

// const mult = element => element * 2;

// const numbers = [64, 49, 36, 25, 16];

// const multArray = map(numbers, mult);

// console.log(multArray);

// console.log(map([64, 49, 36, 25, 16], element => element - 10));

// console.log(map(['Happy', 'New', 'Year'], str => `${str}!`));
// console.log(map([64, 49, 36, 25, 16], element => Math.sqrt(element)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.ceil(element)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.floor(element)));
