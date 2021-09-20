// вариант 1
let a = +window.prompt("Введите число");

if(a == 10) {
    alert("Верно");
}
else if(a != 10 || isNaN(a) ) {
    alert("Неверно");
}

// вариант 2
// let a; 
// a = +window.prompt("Введите число");
// if(isNaN(a)) {
//     alert("Это не число!");
// }

//  else if(a == 10) {
//     alert("Верно");
// }
//      else {
//          alert("Неверно");
// }
 