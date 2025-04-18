//Работа с if else
//задание 1.

// let a = 0 ;
//a = 1 ;
//a = -3;

// if (a === 0 ) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }

//задание 2.
// a = 1 ;
//a = 0 ;
//a = -3 ;

// if (a > 0 ) {
//     console.log ('Верно')
// } else {
//     console.log ('Неверно')
// }

// задание 3.

// a = -3 ;
//a = 0 ;
//a = 1 ;

// if (a < 0) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно')
// }

// задание 4 

// a = 0 ;
//a = 1 ;
//a = -3;

// if (a >= 0) {
//     console.log ('Верно')
// } else {
//     console.log ('Неверно')
// }

//задание 5 

// a = 0 ;
//a = 1 ;
//a = -3 ;

// if (a <= 0) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }

//задание 6 

//a = 0 ;
// a = 1;
//a = -3;

// if (a != 0) {
//     console.log ('Верно');
// } else {
//     console.log ('Неврно');
// }

// задание 7 

// a = 'test' ;
//a = 'тест' ;
//a = 3;

// if (a === 'test') {
//     console.log ('Верно')
//  } else {
//     console.log ('Неверное')
//  }

 //задание 8 

//  a = '1';
 //a = 1 ;
 //a = 3 ;

//  if (a === '1') {
//     console.log ('Верно')
//  } else {
//     console.log ('Неверно')
//  }


 //Работа с логическими переменными
//Задание 1 

// let test = true ;
//  test = false;
// if (test === true ) {
//     console.log ('Верно')
// } else {
//     console.log ('Неверно')
// }

// let result = test === true  ? 'Верно' : 'Неверно';
// console.log (result);

//Задание 2 
 
// if (test !== true ) {
//     console.log ('Верно')
// } else {
//     console.log ('Неверно');
// }

// result = test !== true ? 'Верно' : 'Неверно';
// console.log (result);


// Работа с && (и) и || (или)

//Задание 1 

// let a = 0 ;

// a = 5;
// a = 2;
// a = -3;


// if (a > 0 && a < 5) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно')
// }

//Задание 2

// a = 5;
// a = -3;
// a = 2;
// if (a === 0 || a === 2 ) {
//     result = a + 7;
//     console.log (result); 
// } else {
//     result = a / 10;
//     console.log (result);
// }

//задание 3

// let a = 1;
// let b = 3;

// a = 0;
// b = 6;

// a = 3;
// b = 5;


// if ( a <= 1 && b >= 3) {
//     result = a + b;
//     console.log (result)
// } else {
//     result = a - b ;
//     console.log (result);
// }

// задание 4 

// let a = 2;
// let b = 6;

// a = 1;
// b = 5;

// if ((a > 2 && a < 11)||(b >= 6 && b < 14)) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }

//На switch-case 
// задание 1 

// let num = '1' ;
// num = '2';

// switch(num) {
//     case '1':
//         console.log ('Зима')
//     break
//     case '2':
//         console.log ('Весна')
//     break
//     case '3':
//         console.log ('Лето')
//     break
//     case '4':
//         console.log ('Осень')
//         break
// }

// Общие задачи 
// задание 1

// let month = 1;
// month = 23;

// if ( month>=1 && month <=10) {
//     console.log ('1-ая декада месяца');
// } else if (month >= 11 && month <=20){
//     console.log ('2-ая декада месяца')
// } else if (month >=21 && month <=30) {
//     console.log ('3-ая декада месяца')
// }

// задание 2 

// let month = 12;

// if (month >= 12 && month <= 2) {
//     console.log ('Зима')
// } else if (month >= 3 && month <= 5) {
//     console.log ('Весна')
// } else if (month >= 6 && month <= 8) {
//     console.log ('Лето')
// } else if (month >= 9 && month <= 11) {
//     console.log ('Осень')
// }

// задание 3

// let str = 'abcde'
// str = 'bcde'
// let firstSymbol = str.charAt(0);

// if (firstSymbol === 'a') {
//     console.log ('да')
// } else {
//     console.log ('Нет')
// }

// Циклы while и for

// while 
// задание 1

// let i = 1;

// while ((i >= 1 && i<= 100 )) {
//     console.log (i);
//     i++;
// }

// for (let i = 1; i >= 1 && i<= 100 ;i++ ){
//     console.log (i);
// }


// задание 2 

// let i = 11;

// while ((i >= 11 && i<= 33 )) {
//     console.log (i);
//     i++;
// }

// for (let i = 11;i >= 11 && i<= 33;i++ ) {
//     console.log(i);
// }
//задание 3

// let num = 2;

// while (num <= 100) {
//     console.log (num);
//     num+=2;
// }

// for (let num = 2; num <= 100; num+=2) {
//     console.log (num);
// }

// задание 4 

// let i = 1;
// let summ = 0;
// while ((i >= 1 && i<= 100 )) {
//     summ += i;
//     i++;
// }

// console.log (summ);

// i = 1;
// summ = 0;
// for (;i >= 1 && i<= 100;i++){
//     summ+=i;
//     console.log (summ);

// }

// let summ = 0;
// for (let i = 1; i <= 100; i++, summ += i);
// console.log (summ);

// Задачи общие.

// let n = 1000;
// let iteration_num = 0;

// while((n = n/2) >= 50) {
//     console.log (n);
//     iteration_num++;
// }
// console.log (n);
// console.log ('Количество итераций' +' ' + iteration_num);