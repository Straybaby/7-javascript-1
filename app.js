// Базовые арифметические операторы

/*const width = 10;
const height = 5;
const space = width*height;
const newWidth = width - 4;
console.log(newWidth);

//Строки

const city = 'Москва';
const street  = 'Новослободская';
console.log(city + ', '+ street);

//Операторы присваивания

let age = 18 + 5;
age += 2; //age=age+2;
age -= 2; //age=age-2;
age *= 2; //age=age*2;
age /= 2; //age=age/2;

age++ //age=age+1;
age-- //age=age-1;
console.log(age);

//Операторы сравнения

const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);*/

/*const payRateUSD = 80;
const time = 5;
const day = 5;
const projectHours = 40;

console.log((projectHours / time)<(time*9));
console.log(projectHours*payRateUSD);*/

const positionLat = 6;
const positionLong = 4;
const adressLat = 10;
const adressLong = 10;
const a = (Math.sqrt(positionLat*positionLat+positionLong*positionLong));
const b = (Math.sqrt(adressLat*adressLat+adressLong*adressLong));
console.log(b-a);