// Перебір масивів у функціональному стилі

// 1) forEach
// #1

const names = ["Anton", "Andrey", "Artem", "Maria", "Vadim"];
names.forEach((i) => console.log(i));

// #2

const names = ["Anton", "Andrey", "Artem", "Maria", "Vadim"];

names.forEach(function (item, i, arr) {
  console.log(i + ": " + item + " (массив:" + arr + ")");
});

// 2) filter
// #1
let array = [10, -11, 12, -12, 13, 19];

let positiveNum = array.filter(function (num) {
  return num > 0;
});
console.log(positiveNum);

// #2

function canVote(age) {
  return age >= 18;
}

function adult() {
  let filtered = [45, 18, 15, 67, 95].filter(canVote);
  console.log(filtered);
}
adult();

// 3) map
// #1

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

const plusFive = numbers1.map((item) => item + 5);
console.log(plusFive);

// #2

const pets = ["Барсік", "Тузік", "Рижик"];

let lengthArr = pets.map((name) => name.length);
console.log(lengthArr);

// 4) every/some

// #1

const people = [
  { alive: true },
  { alive: true },
  { alive: true },
  { alive: true },
];
if (people.every((item) => item.alive)) {
  console.log("Всі живі");
} else {
  console.log("Хтось вже ні");
}
// #2

const people = [
  { alive: false },
  { alive: false },
  { alive: false },
  { alive: false },
];
if (people.some((item) => item.alive)) {
  console.log(" Живий ");
} else {
  console.log(" Ні ");
}

// 5) reduce/reduceRight

// #1
const fibbonachi = [1, 1, 2, 3, 5];

const result = fibbonachi.reduce(function (sum, current_sum) {
  return sum + current_sum;
}, 0);

console.log(result);

// #2
const str = ["deleted", "is", "name", "My"];
const res1 = str.reduceRight((result, i) => `${result} ${i}`);
console.log(res1);

// ООП в JavaScript в характерному для JS стилі та в ES6

// 1) демонструвати та пояснювати роботу конструктора та створення об'єкта
// 2) демонструвати та пояснювати роль this
// 3) реалізувати наслідування (прототипне та ES6)
// 4) реалізувати поліморфізм (перевизначення методів)
// 5) приватні, публічні члени (властивості та методи) - у стилі замикань та в ES6

// Функціональний стиль, замикання
const fPerson = function (name) {
  this.name = name;

  this.speak = function () {
    console.log("person says some things");
  };

  this.sayName = function () {
    console.log(`My name is ${this.name}!`);
  };
};

const fProgrammer = function (name, laptopModel) {
  fPerson.call(this, name);
  this.laptopModel = laptopModel;
  let _speach = "I am programmer";

  const _speak = function () {
    return _speach;
  };

  this.sayName = function () {
    console.log(
      `Hi, I'm ${this.name}, and I have laptop ${
        this.laptopModel
      }! ${_speak()}!`
    );
  };
};

const prog1 = new fPerson("Bob");
prog1.speak();
prog1.sayName();

const prog2 = new fProgrammer("Bill", "Asus");
prog2.speak();
prog2.sayName();

// прототипи
const Person = function (name) {
  this.name = name;
};

Person.prototype.speak = function () {
  console.log(`person says some things`);
};

Person.prototype.sayName = function () {
  console.log(`I am a ${this.name}!`);
};

const Programmer = function (name, laptop) {
  Person.call(this, name);
  this.laptop = laptop;
};

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
Programmer.prototype.sayName = function () {
  console.log(`Hi, I'm ${this.name}, and I have laptop ${this.laptopModel}!`);
};

const prog11 = new fPerson("Bob");
prog11.speak();
prog11.sayName();

const prog21 = new fProgrammer("Bill", "Asus");
prog21.speak();
prog21.sayName();

// ES6+
class Person1 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("speak something");
  }

  sayName() {
    console.log(`I am ${this.name}`);
  }
}

const me = new Person1("Anton");
me.speak();
me.sayName();
