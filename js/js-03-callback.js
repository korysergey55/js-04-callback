const printMessage = function (message) {
 console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = "HOCs are awesome";
  callback(string);
  console.log(callback(string));
};
higherOrderFunction(printMessage);

// Но что, если мы хотим сделать что-то, кроме логирования чисел? 
// Поскольку «делать что-то» можно представить как функцию,
// а функции - это просто значения, мы можем передать действие как аргумент.

const printValue = function (value) {
  console.log(value);
};
printValue(5);

const prettyPrint = function (value) {
  console.log("Logging value: ", value);
};
prettyPrint(10);

const repeat = function (repeats, action) {
  for (let i = 0; i < repeats; i += 1) {
    action(i);
  }
};
repeat(3, printValue); // Передаем printValue как callback-функцию // 0// 1// 2
repeat(3, prettyPrint);// Передаем prettyPrint как callback-функцию // Logging value: 0 // Logging value: 1 // Logging value: 2

