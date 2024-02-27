//задание 1
function returnNumber(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }

}
//задание 2 
function even(a) {
    if (a % 2 === 0) {
        return ('Чётное число');
    } else {
        return ('Нечётное число');
    }

}
//Задание 3.1

function quadro(a) {
    console.log(Math.sqrt(a));
}

function quadroIN(a) {
    
    return Math.pow(a, 2);
}
//Задание 4


function age() {
    let a = prompt('сколько вам лет')
    if (a < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (a > 0 && a <= 12) {
        console.log('Привет, друг!');
    }
    else console.log('Добро пожаловать!');


}

//Задание 5
function number1(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b;
    }

}
number1(12, "dgsd")
number1(12, 12)
//Задание 6
function number2() {
    let num = promt ('Введиткк число');
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданниый параметр не является числом'
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }

}

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
        case 12:
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