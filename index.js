function sumar(num1, num2) {
    return num1 + num2;
}

console.log(sumar(3, 2));
//arrow function
let sumar2 = (num1, num2) => {return num1 + num2}
console.log(sumar2(3, 2));

let a = [4, 21, 33, 12, 9, 54];
console.log(a.map(function(num) {
    return num * 2; 
}));

//reescribir console log poniendo la función en sintaxis flecha
console.log(a.map(num=>num * 2));

let d = [4, 21, 33, 12, 9, 54];
console.log(d.filter(function(num) {
    return num % 2 === 0;
}));

//reescribir console log poniendo la función en sintaxis flecha
console.log(d.filter(num=>num % 2 === 0));
