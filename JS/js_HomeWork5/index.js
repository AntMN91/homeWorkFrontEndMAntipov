// задание 1 

// function stringToarray(str) {
//     const result = console.log(str.split (' ',3));
//     return result;
// }

// stringToarray ('Lorem ipsum dolor');

// задание 2 

// function deleteСharacters(str, length) {
//     if ((str.constructor === String) && (length > 0)) {
//         return console.log (str.slice(0, length)); 
//     }
// }

// deleteСharacters('Lorem ipsum dolor',3);

// задание 3

// function  insertDash(str){
//     const result = str.split(' ').join ('-');
//     return console.log(result.toUpperCase());
// }

// insertDash('Долгая счасливая Жизнь');

// задание 4 

// function firstSymbolUpper(str) {
//     const result = str.charAt(0).toUpperCase() + str.slice(1);
//     return console.log(result);
// }

// firstSymbolUpper ('hello world');

// задание 5

// function capitalize(str) {
//     return console.log (str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}))
//   }


//   capitalize('мир труд май');

// задание 6 

// function changeRegister(str) {
//     let initialStr = str;
//     let sum = "";
// for (let i = 0; i < initialStr.length; i++) {
//     const char = initialStr[i];
//     sum += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
// }
// return console.log (sum);
// }

// changeRegister('мИр тРуД МаЙ');

// задание 7 

// function removeChar (str) {
//     const initialStr = str;
//      console.log(initialStr.replace (/[^a-zA-Zа-яА-Я0-9]/g,''));
//     return;
// } 


// removeChar ('17 мгновений весны');



// function govnoStr (str) {
//     let result = '';
//         for (let i = 0; i < str.length; i++ ){
//             if (str[i] >= 'а' && str[i] <= 'я' || str[i]>='0'&& str[i] <= 9) {
//         result = result + str[i];
//         }
// }
// return result;

// }
// console.log (govnoStr('17 : мгновений : весны :'));

// задание 8

// function zeros(num,len,sign) {
//     const result = sign + ('' + num).padStart(len, '0')
//     return console.log (result);
// }

// zeros('qwerty',33, '-')
//задание 9 

// function comparison (str1, str2) {
//     if (str1.toUpperCase() === str2.toUpperCase()) {
//         console.log (true);
//     } else {
//         console.log (false);
//     }
// }

// comparison('ыавыа', 'ladAcademy');
// comparison('ladAcademy','ladAcademy');

//Задание 10 

// function insensitiveSearch(str1, str2) {
//     const result = str1.includes(str2);
//     console.log(result)
// }
// insensitiveSearch('Цвет настроения синий','синий')

//задание 11 

// function initCap(str) {
//          return console.log (str.replace(str[0],'C').replace(str[6],'C').replace(str[5],''));           
// };
// initCap ('camel case');

// задание 12
// function initSnake(str) {
  
//         let result = str.replace(/[А-Я]/g, function (letter) {
//           return '_' + letter.toLowerCase();
//         });
//         return result.replace(/^_/, "");
//     };
//     console.log(initSnake('ДжаваСкрипт'));

//Задание 13  

// function repeatStr(str, n = 6) {
//     return console.log (str.repeat(n));
// };

// repeatStr ('Тревога!!');

//задание 14  
// let pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//   let name = pathname.split("/").pop();
//   return console.log (name);
// };
// path(pathname);

//Задание 15


// function endsWith(str, str1) {
//     return str.indexOf(str1, str.length - str1.length) !== -1;
// };
// console.log (endsWith('kjhgfd', 'tre'));

//Задание 16 

// function getSubstr(str, char, pos) {
//     if (pos == 'after') // после
//       return console.log(str.slice(str.indexOf(char) + 1));
//     else if (pos == 'before') // до
//       return console.log (str.slice(0, str.indexOf(char)));
//     else
//       return console.log (str);
//   }
  
//   getSubstr ('Все победы начинаются с победы над собой.','н','before')

// задание 17

// function insert(str, substr, pos) {
//     let array = str.split('');
//     array.splice(pos, 0, substr);
//     return console.log (array.join(''));
//   }

//   insert('Казнить нельзя', 'Помиловать ', 8);

// задание 18

// function  limitStr(str, num) {
//     if (str.length > num) {
//       return console.log(str.slice(0, num) + "...");
//     } else {
//       return console.log (str);
//     }
//   };
// limitStr('qwert', 8);


//задание 19  
// function count(str, symb) {
//     for (count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
//     return console.log(count);
// };

// count ('с миру по нитке','и');


//Задание 20 

// function strip(str) {
//    const result= str.replace(/\s+/g,' ').trim();
//     return console.log (result);
// }

// strip ('   Пролетарии всех стран    объединяйтесь!    ');

//Задание 21


// function cutString(str, n) {
//     return str.split(" ").splice(0, n).join(" ");
// };
// console.log ( cutString('Мама мыла раму',2))


// Задание 22

// function findWord(word,str) {
//     if (str.includes('word')){
//         console.log (true);
//     } else if (str.includes('word') !== word) {
//         console.log (false);
//     }
//     return;
// }

// findWord('word','Have the last word');