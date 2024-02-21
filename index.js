//задание 1
function returnNumber(a, b) {
    if (a > b) {
        console.log(b);
    } else {
        console.log(a);
    }

}
returnNumber(89, 8)
returnNumber(149, 14313)
returnNumber(145, 145)
//задание 2
function even(a) {
    if (a % 2 === 0) {
        console.log('Чётное число');
    } else {
        console.log('Нечётное число');
    }

}
even(55)
even(2)
even(1)
//Задание 3.1

function quadro(a) {

    return Math.sqrt(a);
}

function quadroIN(a) {
    return Math.pow(a, 2);
}

let result1 = quadro(144);
let result2 = quadroIN(12)

console.log(`${result1}, ${result2}`);
//Задание 4


function age(a) {
    if (a > 12) {
        console.log('Добро пожаловать!');
    } else if (a >= 0 && a <= 12) {
        console.log('Привет, друг!');
    }
    else console.log('Вы ввели неправильное значение');


}
age(-1)
age(11)
age(15)
//Задание 5
function number1(a, c) {
    if (!isNaN(a && c) === true) {
        let mult = a * c
        console.log(mult);
    } else {
        console.log('Одно или оба значения не являются числом');
    }

}
number1(12, "dgsd")
number1(12, 12)
//Задание 6
function number2(a) {
    if (!isNaN(a) === true) {
        let quadro6 = Math.pow(a, 2)
        console.log(`${a} в кубе равняется ${quadro6}`);
    } else {
        console.log("Переданный параметр не является числом");
    }

}
number2('da')
number2(0)
number2(1)
number2(2)
number2(3)
number2(4)
number2(5)
number2(6)
number2(7)
number2(8)
number2(9)
number2(10)
//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2
};
function getPerimetr() {
    return 2 * Math.PI * this.radius
};

const circle1 = {
    radius: 12,
    getArea,
    getPerimetr,
};
const circle2 = {
    radius: 11,
    getArea,
    getPerimetr,
};
circle1.getPerimetr()
//Задание 8
function firstGame(a) {
    switch (a) {
        case (12):
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log('Неверно введён номер месяца');
            break;
    
}
}
firstGame(12)
firstGame(4)
firstGame(6)
firstGame(11)