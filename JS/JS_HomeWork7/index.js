// 1. Что выдаст функция :

// function f() {
//     alert (this);
//     }
//     let user = {
//     g: f.bind(null)
//     };
    
//     user.g();

//функция user.g() выведет null. 12 
// Это связано с тем, что контекст связанной функции жёстко фиксирован, и изменить однажды привязанный контекст уже нельзя.

// 2 Можем ли мы изменить this дополнительным связыванием?

// function f() {
//     alert(this.name);
//     }
//     f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
//      f();

// Нельзя , можно сделать новую привязку ,но изменить существующую уже нельзя.

// 3 
// В свойство функции записано значение. Изменится ли оно
// после применения bind?


// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

// Да, после применения bind значение свойства функции изменится на undefined.
    
// 4 
// Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'Вася',
//     loginOk() {
//     alert(`${this.name} logged in`);
//     },
//     loginFail() {
//     alert(`${this.name} failed to log in`);
//     },
//     };
//     askPassword(user.loginOk, user.loginFail);


// Ошибка происходит потому, что askPassword получает функции loginOk/loginFail без контекста. 

// 5
// Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'John',
//     login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//     };

    // askPassword(() => user.login(true), () => user.login(false)); 

// 6 Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.

// const elem = {value: 'Привет'};
// function func(surname, name) {
//   alert(this.value + ', ' + surname + ' ' + name);
// }
// func = func.bind(elem);

// func('Иванов', 'Иван');
// func('Петров', 'Петр');

// 7 
// Есть функция которая складывает три числа.Выполните
// каррирование.

// const sum = (a, b, c) => a + b + c;

// const sum2 = a => b => c => a + b + c;

// console.log (sum2(43)(20)(-11));

// 8 

let startTimer = 10;
let endTimer = 0 ;

function timer (a,b) {
   function resultTimer () { for ( a; a > b;a--) {
    }};
    console.log ("Поехали!")
}
timer(startTimer,endTimer);
