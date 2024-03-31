//Задание 1
let js = 'js';
console.log(js.toUpperCase());
// Задание 2
function searchStr(array, str) {
   let newM = [];
   let zero = 0;
   for (let index = 0; index < array.length; index++) {
      if (array[index].startsWith(str) == true) {
         newM[zero] = array[index];
         zero += 1;

      }
   }
   return newM;
}
console.log(searchStr(['кк', 'рр', 'кр', 'пп'], 'к'));
//Задание 3
let number = Number(32.58884);
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
//Задание 5
function random() {
   let randomOne = Math.random() * 10;
   return Math.floor(randomOne);
}
console.log(random());
//Задание 6
function massiveBack(int) {
   let massiveZero = []
   for (let index = 0; index < Math.round(int / 2); index++) {
      massiveZero[index] = Math.floor(Math.random() * int);

   }
   return massiveZero
}
console.log(massiveBack(34));
//Задание 7
function twoInt(a, b) {
   return a + Math.floor(Math.random() * (b - a));
}
console.log(twoInt(78, 45));
//Задание 8
console.log(Date());
//Задание 9
let currentDate = new Date()
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate)
//Задание 10
function userDate(year, month, day, hours, minutes, seconds) {
   const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
   const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

   const date = new Date(year, month - 1, day, hours, minutes, seconds);

   const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}.`;
   const formattedTime = `Время: ${date.getHours()} часов ${date.getMinutes()} минут ${date.getSeconds()} секунд`;

   return `${formattedDate}\n${formattedTime}`;
}

console.log(userDate(2011, 10, 10, 10, 10, 10));
// Задание 11 
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
function shuffleArray(array) {
   const result = array.slice();
   for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
   }
   return result;
}
function fruitGame() {
   const shuffledFruits = shuffleArray(fruits);
   alert('Запомните порядок фруктов: ' + shuffledFruits.join(', '));
   const firstGuess = prompt('Введите первое слово:');
   const secondGuess = prompt('Введите последнее слово:');

   if (firstGuess.toLowerCase() === shuffledFruits[0].toLowerCase() && secondGuess.toLowerCase() === shuffledFruits[shuffledFruits.length - 1].toLowerCase()) {
      alert('Поздравляем, вы угадали оба слова!');
   } else {
      alert('Вы проиграли, попробуйте еще раз.');
   }
}

