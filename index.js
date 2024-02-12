//Задание 1
let n = 0;
while (n < 2) {
    console.log('Привет');
    n++;
};
//Задание 2
let numbers = 1;
while (numbers <= 5) {
    console.log(numbers);
    numbers++;
};
//Задание 3
let number = 7;
while (number <= 22) {
    console.log(number);
    number++;
};
//Задание 4
const salary = {
    Коля: 200,
    Вася: 300,
    Петя: 400

};
for (Коля in salary) {
    console.log('Коля — зарплата ' + salary['Коля'] + ' долларов');
};

//Задание 5
let num = 0
for (let numberN = 1000; numberN > 50; num++) {
    numberN /= 2
    console.log(num);
    console.log(numberN);
}
//Задание 6

for (let friday = 5; friday < 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
    
}