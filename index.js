//Задание 1
const searchTen = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < searchTen.length; index++) {
    console.log(searchTen[index]);
    if (searchTen[index] == 10) {
        break
    }

}
//Задание 2
const searhIndex = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < searhIndex.length; index++) {
    if (searhIndex[index] == 4) {
        console.log(index);
    }

}
//Задание 3
const join = [1, 3, 5, 10, 20];
let str = join.join(' ');
console.log(str);
//Задание 4
let arr = []
for (let index = 0; index < 3; index++) {
    arr[index] = [];
    for (let i = 0; i < 3; i++) {
        arr[index][i] = 1;
    }
}
console.log(arr);
//Задание 5
let push = [1, 1, 1];
push.push(2, 2, 2);
console.log(push);
//Задание 6
const letter = [9, 8, 7, 'a', 6, 5];
const withOutLetter = letter.filter(function (number) {
    return number != 'a';

});
console.log(withOutLetter.sort());
//Задание 7
let message = Number(prompt('Угадайте число'));
const guess = [9, 8, 7, 6, 5];
let isGuess = guess.includes(message);
if (isGuess == true) {
    alert("Угадал")
} else {
    alert("Не угадал")
};
//Задание 8
let line = 'abcdef'
let result = line.split('');
let line2 = result.reverse();
console.log(line2.join(''));
//Задание 9
const massiveTwo = [
    [1, 2, 3],
    [4, 5, 6]];
const flat = massiveTwo.flat()
console.log(flat);
//Задание 10
let numbers = [1, 4, 3, 2, 5, 6, 7, 8, 10, 9];
for (let i = 0; i < numbers.length - 1; i++) {
    console.log(numbers[i] + numbers[i + 1]);

}
//Задание 11
function squared(arr) {
    return arr.map(num => num ** 2)
}
//Задание 12
function words(arr) {
    return arr.map(el => el.length)
}
//Задание 13
function positive(array) {
    return array.filter(value => {
        if (value < 0) {
            return true;
        } else {
            return false;
        }
    });
}
console.log(positive([-1, -2, -36, 14, 17]));
//Задание 14
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const numbers14 = generateArray(10, 10);
const evenOnly = numbers14.filter(function (n) {
    const remainder = n % 2
    return remainder === 0
})
console.log(numbers14);
console.log(evenOnly);
//Задание 15
const generateArray15 = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
let numbers15 = generateArray15(6, 10);
let acc = numbers15.reduce((a, b) => (a + b)) / numbers15.length;
console.log(acc);
