//Задание 1
let a = (10);
console.log(a)
console.log(a += 10);
//Задание 2
let release = (2007);
console.log(release);
//Задание 3
let nameAuthor = ('Brendan Eich')
console.log(nameAuthor);
//Задание 4
let ten = (10);
let two = (2);
console.log(ten + two);
console.log(ten - two);
console.log(ten * two);
console.log(ten / two);
//Задание 5
let five = 5;
let resultTask5 = (two ** five); //Значение "2"(переменная "two") взято из задания 4 
console.log(resultTask5);
//Задание 6
let nine = (9);
let resultTask6 = (nine % two);//Значение "2"(переменная "two") взято из задания 4 
console.log(resultTask6);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
console.log(num); //реузльтат "7"
//Задание 8
let ageTask8 = prompt("Сколько вам лет?");
console.log(ageTask8);
//Задание 9
const user = {
name: ('Markus Alexej Persson'),
age: (44),
isAdmin:(true),
};
console.log(user);
//Задание 9.1
user ['city_of_residence'] = 'Stockholm';
//Задание 9.2 
user ['age'] = (90);
//Задание 9.3
delete user.city_of_residence;
//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);
//Задание 10
let nameInfo = prompt("Как вас зовут?");
let nameSave = [nameInfo];
console.log(`Привет,${nameInfo}!`)
