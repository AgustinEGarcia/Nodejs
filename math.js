function sumar(a, b){
    return a+b;
}

function restar(a, b){
    return a-b;
}

function multiplicar(a, b){
    return a*b;
}

function dividir(a, b){
    if(b === 0){
        console.log('no se puede dividir por cero')
    }else{
        return a/b;
    }
}

/*
exports.dividir = dividir;
exports.multiplicar = multiplicar;
exports.sumar = sumar;
exports.restar = restar;
*/

const Math = {};

Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

module.exports = Math;

