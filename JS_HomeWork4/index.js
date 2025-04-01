
// задание 1


// function getDegree (a) {
//     return Math.pow(a,2)
// }

// const result = getDegree(5);
// console.log (result);

// задание 2 

// function getSumm (a,b) {
//     return a+b;
// }

// const resulGetSum = getSumm(5,5);
// console.log (resulGetSum);

// задание 3 

// function calculationResult (a,b,c) {
//     return (a+b)/c;
// }

// const resultCalculation = calculationResult(3,2,2);
// console.log (resultCalculation);

// задание 4 

// function getDayWeek (a) {
//     if (a === 1) {
//         return ('понедельник');
//     } else if (a === 2 ) {
//         return 'вторник';
//     } else if (a === 3) {
//         return 'Среда'
//     } else if (a === 4 ) {
//         return 'четверг'
//     } else if (a === 5) {
//         return 'пятница'
//     } else if (a === 6) {
//         return 'суббота'
//     } else if (a === 7) {
//         return 'Воскресенье'
//     } else {
//       return  'Ошибка'
//     }
// }

// const dayWeek = getDayWeek(3);
// console.log (dayWeek);

// задание 5

// function getEqualityNumbers (a,b) {
//     if (a === b){
//         return 'true'
//     } else {
//         return 'false'
//     }
// }

// const comparisonResult = getEqualityNumbers(3,5);
// console.log (comparisonResult);

// задание 6 

// function getResultComparison (a,b) {
//     if (a+b > 10 ) {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }

// const resultComparison = getResultComparison (11,4);
// console.log (resultComparison);

// задание 7 

// function getNegativeNumber (a) {
//     if (a < 0 ) {
//         return 'true'
//     } else if (a === 0 ) {
//         return 'undefined'
//     } else {
//         return 'false'
//     }
// }

// const negativeNumber = getNegativeNumber(-7);
// console.log (negativeNumber);

// задание 8 

// function isNumberInRange(a) {
//     if (a > 0 && a < 10) {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }

// const numberInRange = isNumberInRange (5);
// console.log (numberInRange);

// // задание 9 
 

// function getDigitsSum (num) {
//     let initialNumber = num;
//     let sum = 0;

//     while (initialNumber) {
//         sum += initialNumber % 10;
//         initialNumber = Math.floor(initialNumber / 10);
//       }
//        return sum;
//     }
    
    // const digitsSum = getDigitsSum(n);
    // console.log (digitsSum);

    // задание 10
    // function getYearAmount13 (num){
    //     let initialNumber = num;

    //     while (initialNumber >=1 && initialNumber <= 2020) {
    //         let result = getDigitsSum (initialNumber);
    //         if (result === 13) {
    //                         console.log (initialNumber);
    //                   }              
    //         initialNumber++;
           

    //     }
        
        
    // } 

    // const resulYearAmount = getYearAmount13(1);
    // console.log (resulYearAmount);
        

    // задание 11

    // function isEven(num) {
    //     if (num % 2 === 0){
    //         console.log ('true')
    //     }else {
    //         console.log(false);
    //     }
    // }

    // const resulIsEven = isEven(3);

    // задание 12

    // function getNumAmount9 (num) {
    //     let initialNumber = num;

    //     while (initialNumber > 9) {
    //         initialNumber = getDigitsSum (initialNumber);
            
    //     }
    //     console.log (initialNumber);


    // }

    // const resultNumAmount9 = getNumAmount9 (9999);

    // задание 13 

    // function reverse(str) {
    
    //     // Variable holds reverse string 
    //     let rev_str = "";
    //     for (let i = str.length - 1; i >= 0; i--) {
    //         rev_str += str[i];
    //     }
   
    //     return rev_str;
    // }
    
    
    // function is_palindrome(str) {
    //     reverse_str = reverse(str);
       

    //     if (reverse_str === str) {
    //         console.log("Палиндром");
    //     }
    //     else {
    //         console.log("Не палиндром")
    //     }
    // }
    
    // let test = "топот";
    // is_palindrome(test);

    //  test = "Hello";
    // is_palindrome(test);