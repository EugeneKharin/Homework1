// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people);

// Задание 2
function filter(arr, ruleFunction) {
   const filteredArray = [];
   for (const element of arr) {
       if (ruleFunction(element)) {
           filteredArray.push(element);
       }
   }
   return filteredArray;
}

function isPositive(num) {
   return num > 0;
}

function isMale(person) {
   return person.gender === 'male';
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale));

// Задание 3
function printCurrentDate() {
   console.log(new Date());
}

let interval = setInterval(() => {
   printCurrentDate();
}, 3000);

setTimeout(() => {
   clearInterval(interval);
   console.log('30 секунд прошло');
}, 30000);

// Задание 4
function delayForSecond(callback) {
   setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задание 5
function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
       if (cb) {
           cb();
       }
   }, 1000);
}

function sayHi(name) {
   return function() {
       console.log(`Привет, ${name}!`);
   };
}

delayForSecond(sayHi('Глеб'));