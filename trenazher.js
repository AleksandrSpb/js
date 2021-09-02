/*console.log(4*4-4 * 5 / 2);
console.log('вино' + 'град');
console.log(`Это - шаблонная строка,
и она может занимать 
несколько строк`);
console.log(`${2 + 5} раз отмерь - ${9 - 8} отрежь`); // "7 раз отмерь - 1 отрежь"
let year1 = 365;
year1 = year1 + 1; // 366
console.log(year1);

let hours = 20; // Текущее время в часах

// Устанавливаем в магазине прогрессивную вечернюю скидку:
// С 6 до 9 часов вечера скидка растёт на 10% каждый час
let discount = 0;

if (hours >= 18 && hours <= 21) {
    discount = (hours - 17) * 10;
}

// Выводим сообщение о текущей скидке
console.log('После ' + hours + ':00 скидка в магазине ' + discount + '%');

// "После 19:00 скидка в магазине 20%"

let fahrenheit= 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(celsius);*/

/*let stroka1 = "шалаш";
function reverseString(stroka) {
     stroka = stroka1.split("").reverse().join("");
    return stroka;
}
console.log(stroka===stroka1);*/

/*
function consoleKitten() {
    let a = '  Λ _ Λ';
    let b = ' (=චᆽච=)==∫';
    let c = '   ˉ ˉ   ˉ ˉ';

    console.log(a);
    console.log(b);
    console.log(c);
}
consoleKitten();*/
/*function keepScore(ours, theirs) {
    // Проверим, забили наши больше голов или нет:
    if (ours > theirs) {
        console.log('Выиграли! 😃 Счёт ' + ours + ':' + theirs);

        // Если наши забили не больше голов,
        // то может столько же? Проверим:
    } else if (ours === theirs) {
        console.log('Ничья. 😐 Счёт ' + ours + ':' + theirs);

        // Если два предыдущих условия не выполнены,
        // стало быть, наши забили меньше голов :(
    } else {
        console.log('Продули... 😢 Счёт ' + ours + ':' + theirs);
    }
}
keepScore(10, 10);*/

/*let employee = {firstName:'Василий', lastName:' Тёркин',age:28} //допишите код здесь
function getFullName () {
    employee = employee.firstName +  employee.lastName;
    console.log(employee);
    return employee;
}
getFullName();*/

/*let employee = {firstName:'Василий', lastName:'Тёркин',age:28}; //допишите код здесь
function fgetFullName() {
    employee = employee.firstName+ " " +  employee.lastName;
    console.log(employee);
}
fgetFullName();*/
/*let employee = {
    firstName: 'Василий',
    lastName: 'Тёркин',
    age: 28
}
function getFullName(employee){
    return(employee.firstName + ' ' + employee.lastName);
}
getFullName(employee);
employee.fullName = getFullName(employee);
console.log(employee.fullName);
console.log(employee)*/

/*let document = {one:25, two:30, three:45};
console.log(document.one);*/
const acrostic = [
    'Ангел лёг у края небосклона.',
    'Наклонившись, удивлялся безднам.',
    'Новый мир был синим и беззвездным.',
    'Ад молчал, не слышалось ни стона.',
    ' ',
    'Алой крови робкое биенье,',
    'Хрупких рук испуг и содроганье.',
    'Миру лав досталось в обладанье',
    'Ангела святое отраженье.',
    'Тесно в мире! Пусть живёт, мечтая',
    'О любви, о грусти и о тени,',
    'В сумраке предвечном открывая',
    'Азбуку своих же откровений.'
];

let annaAkhmatova = ''; // Объявляем переменную, в которой будет собрана итоговая строка

for (let i = 0; i < acrostic.length; i += 1) {
    annaAkhmatova += acrostic[i][0];
}
console.log(annaAkhmatova);
