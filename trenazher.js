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

let stroka1 = "шалаш";
function reverseString(stroka) {
     stroka = stroka1.split("").reverse().join("");
    return stroka;
}
console.log(stroka===stroka1);
