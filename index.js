//Задание 1
let password = 'пароль';
let message = prompt('Введите пароль');
if (message === 'пароль') {
    console.log('Пароль введен верно')
} else {
    console.log('Пароль введен неправильно')
};
//Задание 2
let c = Number(prompt('Введите значение'));
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 3
let d = Number(prompt('Введите значение'));
let e = Number(prompt('Введите значение'));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//Задание 4
let a = '2';
let b = '3';
alert(+a + +b);
//Задание 5
let winter = 'Зима';
let spring = 'Весна';
let summer = 'Лето';
let autumn = 'Осень';
let switchNumber = Number(prompt('Введите номер месяца'));
switch (switchNumber) {
    case (12):
    case 1:
    case 2:
        console.log(winter);
        break;
    case 3:
    case 4:
    case 5:
        console.log(spring);
        break;
    case 6:
    case 7:
    case 8:
        console.log(summer);
        break;
    case 9:
    case 10:
    case 11:
        console.log(autumn);
        break;
    default:
        console.log('Неверно введён номер месяца');
        break;
}
//Задание 7
let anyNumber = (prompt('Пожалуйста, введите любое число'))
if (isNaN(anyNumber)) {
    console.log(Number(anyNumber));
} else {
    if (anyNumber % 2 == 0) {
        console.log('Чётное')
    } else {
        console.log('Нечётное')
    }

}
//Задание 8
let clienOS = 1 || 0
if (clienOS === 1) {
    console.log('Установите версию приложения для Android по ссылке')
} else (clienOS === 0)
{
    console.log('Установите версию приложения для iOS по ссылке')
}
//Задание 9
let clienOS2 = 1 || 0
let year = 2015


if (year <= 2015) {
    if (clienOS === 1) {
        console.log('Установите облегченную версию приложения для Android по ссылке')
    } else (clienOS === 0)
    console.log('Установите облегченную версию приложения для IOS по ссылке')
    {

    }
} else {
    if (clienOS === 1) {
        console.log('Установите версию приложения для Android по ссылке')
    } else (clienOS === 0)
    console.log('Установите облегченную версию приложения для IOS по ссылке')
    {

    }

}