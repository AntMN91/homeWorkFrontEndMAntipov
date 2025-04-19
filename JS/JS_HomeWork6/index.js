// 1. 

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let arrLength = arr.map(function(item) { return item.length; });
// console.log(arrLength);  // [ 4, 5, 2, 5 ] 

// 2. 

 
// let numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//    let result = [];

//    numbers.reduce(function(sum, current, i) {
//       return result[i] = sum + current;
//    }, 0);

//    console.log( result );
// }

// currentSums(numbers); // [2,5,10,17,28,41,58]

// 3.

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(numbers) {
// let obj = {};
// let result = [];

// for(let i = 0; i < numbers.length; i++) {
//    let elem = numbers[i];
  

//    for(let j = i + 1; j < numbers.length; j++) {
//       let item = numbers[j];

//       if(elem + item != 7) continue;

//       let num = elem + ':' + item;
//       obj[num] = num;
//    }

// }

// for(let key in obj) {
//    result.push(obj[key]);
// }

// return result;
// }

// console.log (sumSeven(numbers));  // [0:7, 1:6, 2:5, 3:4]

// 4.

// let str = "Каждый охотник желает знать, где сидит фазан.";  


// function firstChar(value, index, arr) {  
//     if (index == 0)  
//         return true;  
//     else  
//         return arr[index - 1] === " ";  
// }  
  
// let array = [].filter.call(str, firstChar);  

// console.log (array);  // [К,о,ж,з,г,с,ф]

5.
