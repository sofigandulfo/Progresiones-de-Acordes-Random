//sistema calculadora

class Calculadora{
    constructor(){
    }
sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num1, exp){
    return num1**exp;
}

raizCuadrada(num1){
    return Math.sqrt(num1);
}

raizCubica(num1){
    return Math.cbrt(num1);
}
}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operación = prompt("1. Sumar, 2. Restar, 3. Dividir, 4. Multiplicar, 5. Potenciar, 6. Raiz Cuadrada, 7. Raiz Cubica");

if (operación == 1) {
    let num1 = prompt("primer numero para SUMAR");
    let num2 = prompt("segundo numero para SUMAR");
    resultado = calculadora.sumar(num1,num2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 2) {
    let num1 = prompt("primer numero para RESTAR");
    let num2 = prompt("segundo numero para RESTAR");
    resultado = calculadora.restar(num1,num2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 3) {
    let num1 = prompt("primer numero para DIVIDIR");
    let num2 = prompt("segundo numero para DIVIDIR");
    resultado = calculadora.dividir(num1,num2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 4) {
    let num1 = prompt("primer numero para MULTIPLICAR");
    let num2 = prompt("segundo numero para MULTIPLICAR");
    resultado = calculadora.multiplicar(num1,num2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 5) {
    let num1 = prompt("numero a POTENCIAR");
    let num2 = prompt("exponente");
    resultado = calculadora.potenciar(num1,num2);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 6) {
    let num1 = prompt("RAIZ CUADRADA de:");
    resultado = calculadora.raizCuadrada(num1);
    alert(`tu resultado es ${resultado}`);
}

else if (operación == 7) {
    let num1 = prompt("RAIZ CUBICA de:");
    resultado = calculadora.raizCubica(num1);
    alert(`tu resultado es ${resultado}`);
}



else {;
    alert("ERROR ERROR ERROR ERROR");
}
