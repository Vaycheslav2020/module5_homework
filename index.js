// Задание №1
  console.log('// Задание №1');

let varNumber
varNumber = prompt("введите число")
varNumber = +varNumber

if(isNaN(varNumber)) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  if (typeof varNumber === "number") {
    if (varNumber % 2 == 0) {
      console.log("четное");
    } else {
      console.log("нечетное");
    }
  }
}

// Задание 2.
  console.log('// Задание №2');

let variable1 = 123,
    variable2 = "string 123",
    variable3 = true,
    variable4 = 2n

    switch (typeof variable3) {
      case "string":
        console.log("x = строка");
        break;
      case "number":
        console.log("x = число");
        break;
      case "boolean":
        console.log("x = boolean");
        break;
      default:
        console.log("Тип x не определён");
        break;
    }

// Задание 3.
  console.log('// Задание №3');

let str = "Hello"

let strReverse = str.split('').reverse().join('')
console.log(strReverse);

// Задание 4.
  console.log('// Задание №4');

let x = Math.floor((Math.random()*101))
console.log(x);

// Задание 5.
  console.log('// Задание №5');

let arr0 = ["hello", 123, "123", false, true, null, undefined, NaN, "array", "false"]
console.log(arr0.length);

for (let i = 0; i < arr0.length; i++) {
  const element = arr0[i];
  console.log(element);
}

// Задание 6.
  console.log('// Задание №6');

let arr1 = [1, 1, 1, 2, 2, 2];
let arr = [1, 1, 1, 1, 1, 1];
let arg;

for (let i = 0; i < arr.length; i++) {
  const el = arr[i]
  for (let j = 0; j < arr.length; j++) {
    const elem = arr[j];
    if (elem === el) {
      arg = true
    } else {
      arg = false
      break
    }
  }
}
console.log(arg);

// Задание 7.
  console.log('// Задание №7');

let arr5 = [1, 20, 0, 55, 44, 654, 369, null, undefined, "258", 47, 0, "df", 0, 23];
let countZero = 0, countEven = 0, countOdd = 0;

for (let i = 0; i < arr5.length; i++) {
  const el = arr5[i];
  let num = typeof el;
  if (num === "number") {
    if (el === 0) {
      countZero += 1;
    } else if (el % 2 === 0) {
      countEven += 1;
    } else {
      countOdd += 1;
    }
  }
}
console.log(
  `кол-во нулей = ${countZero}, кол-во четных = ${countEven},  кол-во нечетных = ${countOdd}`
);

// Задание 8.
  console.log('// Задание №8');

let myMap = new Map()

myMap.set(true, false)
myMap.set("string", "123")
myMap.set(123, "number")
myMap.set("123", "5689")
myMap.set('null', 'undefined')

for (const [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}