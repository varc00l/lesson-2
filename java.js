const celsius = 15;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`Температура за Фаренгейтом: ${fahrenheit}°F`);

const daysInMonth = 45;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`Кількість годин у місяці: ${hoursInMonth} годин`);
console.log(`Кількість хвилин у місяці: ${minutesInMonth} хвилин`);

let health = 250;
let energy = 675; 
health -= 125; 
energy -= 286;
console.log(`Рівень здоров'я: ${health}`);
console.log(`Рівень енергії: ${energy}`);

const purchaseAmount = 500;
const discount = 0.10; 
const discountedAmount = purchaseAmount * (1 - discount);
console.log(`Сума після знижки: ${discountedAmount} гривень`);

const floatingNumber = 123.456;
const roundedDown = Math.floor(floatingNumber);
console.log(`Округлене число: ${roundedDown}`);

const floatString = "123.456";
const floatNumber = parseFloat(floatString);
console.log(`Десяткове число: ${floatNumber}`);

const intString = "123";
const intNumber = parseInt(intString, 10);
console.log(`Ціле число: ${intNumber}`);

const number = 16;
const squareRoot = Math.sqrt(number);
console.log(`Квадратний корінь числа ${number}: ${squareRoot}`);

const intValue = 123;
const strValue = "456";
const parsedInt = parseInt(strValue, 10);
console.log(`Перетворений рядок у ціле число: ${parsedInt}`);
const intToString = intValue.toString();
console.log(`Перетворене ціле число у рядок: ${intToString}`);
